import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { doc, getFirestore, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import {
  initializeAppCheck,
  ReCaptchaV3Provider
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app-check.js";

const INVITATION_ID = "mary-everardo";
const RESPONSE_KEY = `padrinos-response:${INVITATION_ID}`;
const isConfigured = !firebaseConfig.apiKey.startsWith("REPLACE_");

const acceptButtons = [...document.querySelectorAll(".accept-trigger")];
const confirmButton = document.querySelector("#confirm-button");
const confirmDialog = document.querySelector("#confirm-dialog");
const promptPanel = document.querySelector("#response-prompt");
const successPanel = document.querySelector("#response-success");
const formStatus = document.querySelector("#form-status");
const heroStatus = document.querySelector(".hero-status");

let database = null;
let authentication = null;
let submissionLocked = false;

function setStatus(message, state = "idle") {
  formStatus.textContent = message;
  formStatus.dataset.state = state;
  heroStatus.textContent = message;
  heroStatus.dataset.state = state;
}

function showSuccess() {
  submissionLocked = true;
  for (const button of acceptButtons) {
    button.disabled = true;
    button.querySelector(".accept-button__label").textContent = "Respuesta registrada";
  }
  promptPanel.hidden = true;
  successPanel.hidden = false;
  successPanel.focus({ preventScroll: true });
}

function setBusy(isBusy) {
  for (const button of acceptButtons) {
    button.disabled = isBusy || submissionLocked;
    button.setAttribute("aria-busy", String(isBusy));
  }
  confirmButton.disabled = isBusy;
}

async function initializeFirebase() {
  if (localStorage.getItem(RESPONSE_KEY) === "accepted") {
    showSuccess();
    return;
  }

  if (!isConfigured) {
    setStatus("La confirmación estará disponible cuando termine la configuración segura.", "error");
    return;
  }

  try {
    const app = initializeApp(firebaseConfig);

    if (firebaseConfig.appCheckSiteKey) {
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(firebaseConfig.appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
      });
    }

    authentication = getAuth(app);
    database = getFirestore(app);
    await signInAnonymously(authentication);
    for (const button of acceptButtons) button.disabled = false;
    setStatus("Su respuesta se guardará de forma segura.");
  } catch (error) {
    console.error("No fue posible iniciar Firebase", error);
    setStatus("No pudimos preparar la confirmación. Revisen su conexión e intenten recargar.", "error");
  }
}

async function saveAcceptance() {
  if (submissionLocked || !database || !authentication?.currentUser) return;

  submissionLocked = true;
  setBusy(true);
  setStatus("Guardando su respuesta...");

  try {
    const responseRef = doc(database, "responses", INVITATION_ID);
    await setDoc(responseRef, {
      accepted: true,
      createdAt: serverTimestamp(),
      inviteId: INVITATION_ID,
      recipients: ["Mary", "Everardo"],
      responderUid: authentication.currentUser.uid
    });

    localStorage.setItem(RESPONSE_KEY, "accepted");
    showSuccess();
  } catch (error) {
    console.error("No fue posible registrar la respuesta", error);

    if (error?.code === "permission-denied") {
      submissionLocked = true;
      setBusy(false);
      setStatus("Esta invitación ya tiene una respuesta o no pudimos verificar el registro. No se enviará otra vez.", "error");
      return;
    }

    submissionLocked = false;
    setBusy(false);
    setStatus("No se guardó la respuesta. Revisen su conexión e inténtenlo nuevamente.", "error");
  }
}

for (const button of acceptButtons) {
  button.addEventListener("click", () => {
    if (!button.disabled) confirmDialog.showModal();
  });
}

confirmDialog.addEventListener("close", () => {
  if (confirmDialog.returnValue === "confirm") saveAcceptance();
});

confirmDialog.addEventListener("click", (event) => {
  if (event.target === confirmDialog) confirmDialog.close("cancel");
});

function initializeReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12%", threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

initializeReveals();
initializeFirebase();
