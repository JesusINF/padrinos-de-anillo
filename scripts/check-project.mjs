import { readFile } from "node:fs/promises";

const requiredFiles = ["index.html", "styles.css", "app.js", "firebase-config.js", "firestore.rules"];
const contents = Object.fromEntries(
  await Promise.all(requiredFiles.map(async (file) => [file, await readFile(file, "utf8")]))
);

const assertions = [
  [contents["index.html"].includes('lang="es-MX"'), "El documento debe declarar es-MX"],
  [contents["index.html"].includes("Mary") && contents["index.html"].includes("Everardo"), "Deben aparecer Mary y Everardo"],
  [contents["index.html"].includes("Padrinos de anillo"), "Debe identificarse el rol"],
  [contents["index.html"].includes("2027-01-23"), "Debe existir la fecha semántica"],
  [(contents["index.html"].match(/accept-trigger/g) ?? []).length === 1, "Debe existir una sola acción de aceptación"],
  [!contents["index.html"].includes('class="response'), "No debe repetirse la solicitud al final"],
  [contents["styles.css"].includes("reveal--story") && contents["styles.css"].includes("reveal--place"), "Deben existir transiciones diferenciadas al hacer scroll"],
  [contents["index.html"].includes("viewport-fit=cover"), "El viewport debe respetar áreas seguras móviles"],
  [contents["styles.css"].includes("--paper-shape") && !/\.hero__paper\s*\{[^}]*clip-path:/s.test(contents["styles.css"]), "El sello no debe quedar recortado por el contenedor de papel"],
  [contents["styles.css"].includes("prefers-reduced-motion"), "Debe respetarse movimiento reducido"],
  [!contents["styles.css"].includes("transition: all"), "No debe utilizarse transition: all"],
  [contents["firestore.rules"].includes("allow read, update, delete: if false"), "Las respuestas deben ser inmutables y privadas"],
  [contents["firestore.rules"].includes("!exists("), "La regla debe bloquear una segunda creación"],
  [!Object.values(contents).some((content) => content.includes("—") || content.includes("–")), "El contenido no debe utilizar guiones largos"],
  [!Object.values(contents).some((content) => /(?:private_key|client_secret|service_account)/i.test(content)), "No deben existir credenciales privadas en el sitio"]
];

const failed = assertions.filter(([condition]) => !condition).map(([, message]) => message);

if (failed.length) {
  console.error(failed.map((message) => `FAIL: ${message}`).join("\n"));
  process.exit(1);
}

console.log(`OK: ${assertions.length} comprobaciones del proyecto pasaron.`);
