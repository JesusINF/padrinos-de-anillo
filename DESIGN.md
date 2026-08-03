---
name: "Padrinos de Anillo"
description: "Una invitación ceremonial que despliega el Santuario y la petición como una catedral de papel al amanecer."
colors:
  mist: "#e8eef1"
  sky: "#dce8ed"
  blush: "#efd9d3"
  paper: "#fffdf8"
  paper-deep: "#f6f0e7"
  sage: "#66765d"
  sage-dark: "#3f503a"
  burgundy: "#4a1f2b"
  ink: "#352c2d"
  muted-ink: "#655b5c"
  gold: "#9b6d1f"
  gold-light: "#d8bd78"
  error: "#9b2c2c"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.15rem, 15vw, 5.7rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 9vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.45rem, 6.8vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.14em"
rounded:
  button-compact: "0.55rem"
  control: "0.875rem"
  paper: "1rem"
  dialog: "1.25rem"
  panel-inner: "1.3rem"
  panel-outer: "1.8rem"
  image: "2rem"
  seal: "50%"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.25rem"
  6: "1.5rem"
  8: "2rem"
  10: "2.5rem"
  12: "3rem"
  16: "4rem"
  20: "5rem"
components:
  hero-accept:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button-compact}"
    padding: "{spacing.3} {spacing.5}"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.burgundy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "{spacing.3} {spacing.5}"
    height: "3.5rem"
---

# Design System: Padrinos de Anillo

## Overview

**Creative North Star: "Catedral de papel al amanecer"**

La invitación se siente como un recuerdo ceremonial hecho a mano, no como una plantilla de boda ni como un formulario digital. El Santuario aparece modelado en papel claro sobre un cielo de niebla; desde esa arquitectura emergen pliegues rosa y salvia, una cinta diagonal y una hoja marfil que contiene la petición personal. La composición hace tangible el gesto de abrir una pieza de papelería y convierte la aceptación en la colocación simbólica de un sello.

El mundo visual combina solemnidad y calidez con una densidad baja: una imagen protagonista, grandes pausas, texto breve y una sola acción decisiva. La ornamentación se limita a elementos que pertenecen al mismo material —relieve botánico, anillos lineales, reglas doradas y bordes de papel— para que cada detalle refuerce la tesis.

**Key Characteristics:**

- Arquitectura local reinterpretada como relieve de papel, nunca como fondo fotográfico genérico.
- Capas marfil, rosa empolvado y salvia con tinta borgoña y acentos de oro envejecido.
- Contraste entre la expresividad editorial de Cormorant Garamond y la claridad funcional de Manrope.
- Una procesión vertical, mobile-first, que presenta la aceptación una sola vez y después conduce al significado y al lugar.
- Movimiento limpio y progresivo que revela el ensamblaje sin bloquear la lectura.
- Estados de respuesta inequívocos que preservan la invitación completa después de aceptar.

**The Keepsake Rule.** Cada nueva superficie debe sentirse como otra pieza del mismo recuerdo físico; la interfaz y la seguridad operativa nunca deben convertirla en un panel de aplicación genérico.

## Colors

La paleta imita papel iluminado al amanecer: fondos fríos y tranquilos, superficies cálidas, tinta profunda y acentos vegetales y metálicos usados con disciplina.

### Primary

- **Borgoña ceremonial** (`burgundy`): tinta de nombres, preguntas y títulos; también identifica la acción inmediata del primer pliegue.
- **Salvia de promesa** (`sage-dark`, con `sage` para interacción): acción final, fecha confirmada y señales de continuidad serena.

### Secondary

- **Rosa de sobre** (`blush`): pliegue cálido, sello orgánico y respuesta secundaria al pasar el puntero.
- **Azul amanecer** (`sky`) y **niebla arquitectónica** (`mist`): atmósfera del Santuario y bloque de lugar; nunca compiten con el contenido.

### Tertiary

- **Oro envejecido** (`gold`) y **oro de borde** (`gold-light`): anillos, reglas, foco y detalles ceremoniales. Su escasez le da valor.

### Neutral

- **Papel marfil** (`paper`): hoja principal, interior del panel y diálogo.
- **Papel profundo** (`paper-deep`): fondo general y controles secundarios.
- **Tinta cálida** (`ink`): lectura principal fuera de títulos.
- **Tinta atenuada** (`muted-ink`): apoyo, ubicación, explicación y estados neutrales.
- **Rojo de incidencia** (`error`): exclusivamente errores accionables; nunca decoración.

**The One Gold Seal Rule.** El oro marca ceremonia, foco o separación fina; no debe convertirse en grandes masas, degradados brillantes ni texto largo.

**The Quiet Pastel Rule.** Los pasteles construyen atmósfera y capas. La legibilidad siempre recae en borgoña, tinta o salvia oscura, no en versiones saturadas de rosa o azul.

## Typography

**Display Font:** Cormorant Garamond (con Georgia y serif como respaldo)  
**Body Font:** Manrope (con sans-serif como respaldo)

**Character:** Cormorant Garamond aporta la voz de una invitación editorial y permite nombres amplios, elegantes y humanos. Manrope mantiene fechas, acciones, estados y explicaciones contemporáneos, claros y accesibles. Ambas familias están servidas localmente para preservar velocidad y consistencia.

### Hierarchy

- **Display:** nombres propios en dos líneas cuando el ancho lo requiere, con medida máxima de aproximadamente 11 caracteres y espaciado compacto. En escritorio crece hasta la escala hero sin perder su línea breve.
- **Headline:** títulos de historia, lugar y respuesta; peso regular y composición balanceada, nunca mayúsculas completas.
- **Title:** pregunta principal; más firme que un titular narrativo para sostener la decisión.
- **Body:** texto de lectura y explicación, con base mínima de 16px y medida útil de hasta 60 caracteres en bloques largos.
- **Label:** controles y datos funcionales; peso fuerte. Las mayúsculas espaciadas se reservan al mes o a metadatos breves, no a párrafos ni botones completos.
- **Ceremonial eyebrow:** el rol “Padrinos de anillo” conserva Cormorant Garamond a una escala discreta y en oro.

**The Names Lead Rule.** Los nombres de las personas invitadas son el gesto tipográfico dominante; ninguna decoración, fecha ni titular secundario debe competir con ellos en la primera vista.

**The Two Voices Rule.** La serif expresa ceremonia y significado; la sans serif expresa acción, estado y datos. No se incorporan scripts, tipografías adicionales ni estilos caligráficos ornamentales.

## Layout

La base es una procesión vertical pensada para teléfonos de 320–430px: imagen del Santuario, pliegues, hoja con la pregunta y única aceptación, historia, lugar y cierre. Los contenedores usan ancho intrínseco, márgenes laterales cómodos y una escala espacial de 4px. Las secciones principales respiran con separaciones amplias de la escala, mientras que metadatos y controles usan pasos pequeños y repetibles.

El hero ocupa al menos `100dvh`. En móvil, la imagen llena la franja superior; dos pliegues triangulares y la cinta cruzan la transición, y la hoja asciende con borde superior inclinado. La hoja deja un margen exterior estrecho, limita su ancho y añade espacio de área segura en el extremo inferior. Ninguna capa decorativa puede generar desplazamiento horizontal ni interceptar interacción.

A partir de 48rem, la composición progresa a dos columnas: Santuario a la izquierda y hoja a la derecha. La hoja pierde el recorte inclinado y se convierte en un plano vertical; el sello de anillos se coloca sobre la costura entre ambas columnas. Historia y lugar también pasan a dúos asimétricos. No se debe “encoger” esta versión de escritorio para crear móvil.

La imagen puede recortarse para favorecer la cúpula y la torre, pero debe conservar el reconocimiento arquitectónico. El contenido soporta zoom, texto largo y salto de línea mediante medidas fluidas, `clamp()`, Grid/Flexbox e `overflow-wrap`; el scroll horizontal está prohibido.

**The Fold Continuity Rule.** Los pliegues, la cinta y la hoja deben coincidir visualmente en su punto de encuentro. Si cambia la altura del hero o la proporción de imagen, se recalibra el conjunto como una sola composición, no cada pieza de forma aislada.

## Elevation & Depth

La profundidad imita papel apilado, no vidrio ni neumorfismo. La hoja principal usa una sombra ambiental amplia y de baja opacidad; la cinta combina sombra exterior y una línea de luz interior para sugerir tejido. El relieve botánico emplea sombras de un píxel en dos direcciones, y los bordes dorados semitransparentes separan hojas sin endurecerlas. El diálogo es la única capa claramente elevada sobre un velo oscuro con desenfoque moderado.

### Shadow Vocabulary

- **Relieve de papel** (`0 22px 55px rgba(73, 52, 47, 0.14), 0 4px 14px rgba(73, 52, 47, 0.08)`): hoja hero y sobre de respuesta.
- **Costura editorial** (`-22px 0 55px rgba(73, 52, 47, 0.12)`): separación de imagen y hoja en escritorio.
- **Acción ceremonial** (`0 12px 28px rgba(63, 80, 58, 0.24)`): botón habilitado; desaparece cuando está deshabilitado.
- **Confirmación modal** (`0 28px 90px rgba(46, 25, 30, 0.3)`): única elevación de primer plano.

**The Paper, Not Plastic Rule.** Las sombras son suaves, cálidas y estructurales. Se prohíben brillos de neón, glassmorphism, sombras negras duras y elevación indiscriminada de cada bloque.

## Shapes

La geometría alterna precisión editorial y gesto artesanal. Las hojas y controles tienen esquinas suaves; el panel de respuesta usa una doble envolvente salvia/marfil con radios escalonados y filetes dorados. El hero móvil introduce una arista diagonal mediante recorte, mientras los pliegues triangulares y la cinta oblicua crean dirección. En contraste, anillos, sello y medallón son circulares; el sello narrativo admite una silueta ligeramente irregular para parecer prensado a mano.

Los adornos son lineales y semánticos: anillos entrelazados, diamante pequeño, ubicación, ramas y hojas. Se implementan como SVG inline o geometría CSS, con trazo redondeado y sin emojis. Los bordes visibles son finos y translúcidos; no se usan contornos gruesos alrededor de tarjetas.

**The Material Geometry Rule.** Cada silueta debe poder explicarse como hoja, pliegue, cinta, sello, relieve o trazo impreso. Una forma sin relación material no pertenece a este sistema.

## Components

### Hero de papel

El componente firma ensambla la imagen arquitectónica, dos pliegues, una cinta diagonal, la hoja de invitación, el relieve botánico y el sello de anillos. Su z-order es parte del diseño: arte al fondo, pliegues, hoja, cinta y detalles de primer plano. Todo texto permanece HTML vivo; la imagen nunca contiene información necesaria.

### Botones

- **Forma:** control suave y táctil con altura mínima superior a 44px; el hero usa un radio más contenido y la respuesta final un radio más generoso.
- **Acción hero:** borgoña sobre papel para una decisión visible en el primer pliegue.
- **Acción final y confirmación:** salvia oscura sobre papel; al pasar el puntero cambia a salvia media y aumenta la sombra sin mover el layout.
- **Secundario:** papel profundo con texto borgoña; su hover puede tomar rosa de sobre.
- **Activo:** compresión breve a `scale(0.97)` para respuesta táctil.
- **Foco:** contorno dorado de 3px con separación de 4px, siempre visible.

### Diálogo de confirmación

La confirmación introduce una pausa deliberada antes de una respuesta irreversible. Usa hoja marfil, anillos dorados, título borgoña, explicación explícita y dos acciones con jerarquía inequívoca. En móvil las acciones se apilan; desde 48rem se alinean en dos columnas. El backdrop oscurece y desenfoca sin borrar por completo el contexto.

### Seguridad visual y estados

- **Preparando / deshabilitado:** la acción mantiene forma y etiqueta, baja a 58% de opacidad, pierde sombra y usa cursor no permitido. No debe parecer disponible antes de que el estado remoto esté resuelto.
- **Enviando:** la etiqueta se oculta sin cambiar el tamaño del control y aparece un spinner de anillo; `aria-busy` y el estado visible deben coincidir.
- **Error:** el mensaje vive junto a la acción, usa el color de error y peso semibold, y se anuncia mediante una región de estado. Nunca se comunica sólo por color.
- **Confirmado:** la acción del hero se sustituye por anillos con marca y un agradecimiento por nombre; la página completa sigue disponible.
- **Irreversible:** la interfaz explica que sólo puede registrarse una vez antes de confirmar. Este contrato visual acompaña —pero no sustituye— la restricción real en Firebase Security Rules.

### Motion

Las interacciones usan transiciones explícitas de color, opacidad, sombra y transformación entre 140–180ms con salida suave. Al hacer scroll, la historia entra con elevación, enfoque progresivo y un sello que se despliega; el lugar se descubre con una cortina lateral y su texto avanza después. Al iniciar, los pliegues entran en una secuencia solapada de 760–820ms para que parezca que el sobre se ensambla; la lectura y la acción no esperan a una intro bloqueante.

`prefers-reduced-motion: reduce` elimina desplazamientos, revela el contenido inmediatamente, desactiva el scroll suave y reduce animaciones/transiciones a una duración imperceptible. Ninguna función depende del movimiento.

**The Honest State Rule.** Apariencia, etiqueta, disponibilidad, anuncio accesible y estado persistido deben contar la misma historia; nunca se muestra éxito optimista antes de confirmar la escritura.

## Do's and Don'ts

### Do:

- **Do** preservar “Catedral de papel al amanecer” como tesis y verificar toda modificación contra el mock aprobado y la implementación vigente.
- **Do** construir primero el flujo vertical de 320–430px y tratar 48rem como una mejora compositiva, no como un simple cambio de tamaño.
- **Do** mantener texto y controles como HTML semántico, SVG pequeños como adornos, y la ilustración arquitectónica sólo como imagen ambiental con alternativa significativa.
- **Do** usar la escala espacial, los tokens de color y los radios existentes antes de introducir un valor nuevo; una excepción debe resolver una necesidad material concreta.
- **Do** conservar contraste WCAG AA, foco visible, zoom, objetivos táctiles de al menos 44px, áreas seguras, lectura sin scroll horizontal y modo de movimiento reducido.
- **Do** probar cualquier cambio de altura o contenido sobre el ensamblaje completo de arte, pliegues, cinta, hoja y sello en móvil y escritorio.
- **Do** representar estados remotos con texto visible y anuncios accesibles, manteniendo estable el tamaño de botones y paneles durante carga, error y éxito.
- **Do** dejar nombres de la pareja y cualquier dato no proporcionado como contenido configurable; la estética nunca autoriza inventar información.

### Don't:

- **Don't** volver a la propuesta rosa intensa, tipografía script o Soft UI genérico del archivo maestro exploratorio; no corresponde al diseño final aprobado.
- **Don't** convertir la experiencia en un conjunto de tarjetas repetitivas, navegación de aplicación, dashboard o formulario RSVP genérico.
- **Don't** añadir gradientes decorativos ajenos a la materialidad; el único degradado vigente describe el volumen de la cinta.
- **Don't** usar emojis, iconos de estilos mezclados, fotografías sin licencia o texto esencial incrustado en imágenes.
- **Don't** saturar de oro, ornamentos botánicos, sellos o anillos: cada uno debe ocupar un punto ceremonial claro.
- **Don't** usar hover con desplazamiento de layout, intros bloqueantes, parallax, movimiento continuo ni animación sin alternativa reducida.
- **Don't** ocultar la invitación tras aceptar, permitir una segunda acción aparente, o usar sólo `localStorage`/estado visual como garantía de unicidad.
- **Don't** modificar un token aislado sin revisar contraste, estados, recortes de imagen, continuidad de pliegues y coherencia entre hero, respuesta, diálogo y footer.
