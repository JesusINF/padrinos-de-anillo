# Padrinos de anillo

Invitación web privada en intención y pública en alojamiento para pedir a Mary y Everardo que sean padrinos de anillo el 23 de enero de 2027 en La Piedad, Michoacán.

## Desarrollo local

```powershell
npm run serve
```

La página usa HTML, CSS y JavaScript sin framework. Firebase Authentication anónima y Cloud Firestore guardan una única respuesta en `responses/mary-everardo`.

## Configuración de Firebase

1. Registrar una aplicación web en Firebase.
2. Activar Authentication con el proveedor Anónimo.
3. Crear Cloud Firestore en modo producción.
4. Publicar `firestore.rules`.
5. Copiar la configuración web pública en `firebase-config.js`.
6. Opcionalmente activar App Check con reCAPTCHA v3 y completar `appCheckSiteKey`.

La configuración web de Firebase identifica el proyecto, pero no concede acceso administrativo. La seguridad está en `firestore.rules`: solo se permite crear una respuesta exacta, autenticada y única; lecturas, modificaciones y eliminaciones desde el cliente quedan bloqueadas.

## Recursos

- La ilustración del Santuario fue generada especialmente para este proyecto y no se presenta como fotografía documental.
- Cormorant Garamond y Manrope provienen de Google Fonts y se distribuyen bajo SIL Open Font License.
