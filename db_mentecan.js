// db_mentecan.js - Base de Datos de Retos Mentecan Vital

const CHALLENGES = [
    // --- RETO 1: EVITAR QUE MUERDA TODO (5 DÍAS) ---
    {
        id: 'evitar-morder-5d', 
        name: 'Evitar que muerda todo', 
        icon: '🛑', 
        totalDays: 5, 
        desc: 'Elimina el hábito destructivo desde la raíz en 5 días.',
        introAchieve: 'Vas a entender la psicología de tu perro y redirigir su energía. Salva tus muebles, tus zapatos y crea una convivencia pacífica desde el día 1.',
        lessons: [
            { 
                day: 1, title: 'Entender y redirigir', semanaLabel: 'Fase 1: Acción Inmediata', duracion: '3 min', nivel: 'Principiante', categoria: 'Redirección', icon: 'fa-arrow-right-arrow-left', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy vas a evitar que tu perro muerda objetos prohibidos redirigiendo su conducta. Tu perro no muerde por ser malo, lo hace por energía acumulada. El error es corregir cuando ya rompió algo.", 
                    puntosClave: ["Observa cuándo intenta morder algo prohibido.", "Di 'NO' firme en el momento exacto.", "Dale inmediatamente un objeto permitido."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Práctica Activa', desc: 'Durante los próximos 3 minutos, vigila a tu perro de cerca. Si va a morder, aplica el "NO" y redirige con su juguete.', emoji: '⏱️', icon: 'fa-stopwatch' }] }, 
                tips: ["Corrige en el momento exacto, no segundos o minutos después."], 
                error: { titulo: "El gran error", desc: "Regañarlo cuando el zapato ya está roto. Su cerebro no conecta el regaño con la acción pasada." }, 
                resumen: "Hoy diste el primer paso para cambiar su comportamiento.", microEnganche: "Mañana aprenderás por qué tu perro insiste en morder."
            },
            { 
                day: 2, title: 'Eliminar la causa', semanaLabel: 'Fase 1: Acción Inmediata', duracion: '5 min', nivel: 'Principiante', categoria: 'Energía', icon: 'fa-bolt', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy reducirás la necesidad de morder eliminando su exceso de energía. Un perro con energía sin liberar buscará descargarla destruyendo.", 
                    puntosClave: ["Juega activamente con tu perro durante 5 minutos.", "Usa un juguete para liberar su energía física y mental.", "Termina la sesión con calma para bajar sus revoluciones."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Sesión de Desgaste', desc: 'Juega a lanzarle la pelota o tira y afloja. Haz que corra y se canse. Al terminar el timer, detente y pide calma.', emoji: '🎾', icon: 'fa-baseball' }] }, 
                tips: ["Un perro cansado física y mentalmente aprende mil veces más rápido."], 
                error: { titulo: "Falta de actividad", desc: "Pedirle que esté tranquilo cuando lleva 8 horas durmiendo y lleno de energía." }, 
                resumen: "Estás atacando la raíz del problema (la energía acumulada).", microEnganche: "Mañana aprenderás a anticiparte antes de que muerda."
            },
            { 
                day: 3, title: 'La Anticipación', semanaLabel: 'Fase 2: Control Mental', duracion: '3 min', nivel: 'Medio', categoria: 'Atención', icon: 'fa-eye', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy evitarás el problema antes de que ocurra. Tu perro siempre da señales antes de morder: olfatea, se acerca y se enfoca. Si esperas a que muerda, llegaste tarde.", 
                    puntosClave: ["Identifica los momentos del día donde suele morder.", "Interviene antes de que su boca toque el objeto.", "En el instante que lo interrumpes, dale su juguete."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Vigilancia Táctica', desc: 'Observa su lenguaje corporal. En cuanto fije su mirada en un mueble o zapato, interrumpe con un chasquido o un "NO" antes de que actúe.', emoji: '👀', icon: 'fa-binoculars' }] }, 
                tips: ["Anticipar es 100 veces más poderoso que corregir el error."], 
                error: { titulo: "Reaccionar tarde", desc: "Esperar a escuchar el sonido de algo rompiéndose para recién ir a intervenir." }, 
                resumen: "Ahora pasaste de ser reactivo a tener control antes del error.", microEnganche: "Mañana reforzarás el buen comportamiento para que lo repita."
            },
            { 
                day: 4, title: 'Reforzamiento Positivo', semanaLabel: 'Fase 2: Control Mental', duracion: '3 min', nivel: 'Medio', categoria: 'Premios', icon: 'fa-star', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy harás que tu perro prefiera lo correcto. Los perros repiten lo que les da recompensa. Si solo corriges lo malo, pero no premias lo bueno, el aprendizaje está incompleto.", 
                    puntosClave: ["Observa cuidadosamente cuando use SU juguete permitido.", "Felicítalo inmediatamente con voz aguda y alegre.", "Refuerza con toda tu atención, caricias o un premio."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Cacería de buenas acciones', desc: 'No busques errores, busca aciertos. Cuando de forma natural agarre su hueso o juguete, hazle una fiesta de felicitaciones.', emoji: '🎉', icon: 'fa-gift' }] }, 
                tips: ["Premia lo bueno de forma exagerada, no solo castigues lo malo."], 
                error: { titulo: "Ignorar lo bueno", desc: "Verlo jugando con su juguete y no decirle nada porque 'es lo que debe hacer'. ¡Celebra!" }, 
                resumen: "Tu perro ya está aprendiendo activamente a tomar buenas decisiones.", microEnganche: "Mañana consolidarás el cambio para siempre."
            },
            { 
                day: 5, title: 'La Consolidación', semanaLabel: 'Fase 3: El Hábito', duracion: '5 min', nivel: 'Avanzado', categoria: 'Consistencia', icon: 'fa-lock', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy convertirás el comportamiento en un hábito permanente. El cambio real no ocurre en un día, ocurre con la consistencia. Vamos a unir todo lo aprendido.", 
                    puntosClave: ["Aplica el combo: Corregir en el momento + Redirigir + Anticipar + Reforzar.", "Sé consistente. No hay días de descanso para las reglas.", "Mantén la calma absoluta, no necesitas gritar."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Modo Automático', desc: 'Activa el temporizador y haz tu vida normal, pero aplicando las 4 reglas al instante si es necesario. Ya sabes qué hacer.', emoji: '🧠', icon: 'fa-brain' }] }, 
                tips: ["La constancia paciente crea resultados permanentes."], 
                error: { titulo: "Bajar la guardia", desc: "Pensar que porque ayer se portó bien, hoy puedes dejar de anticipar." }, 
                resumen: "Ya tienes el control total del comportamiento de tu perro.", microEnganche: "¡Felicidades! Estás listo para el siguiente reto de tu entrenamiento."
            }
        ]
    },

    // --- RETO 2: ENSEÑAR A HACER SUS NECESIDADES (5 DÍAS) ---
    {
        id: 'ir-al-bano-5d', 
        name: 'Enseñar a ir al baño', 
        icon: '🚽', 
        totalDays: 5, 
        desc: 'Logra que tu perro haga sus necesidades en el lugar correcto.',
        introAchieve: 'Construiremos una rutina infalible. Dile adiós a limpiar accidentes por toda la casa y enséñale exactamente dónde está su baño.',
        lessons: [
            { 
                day: 1, title: 'Crear zona correcta', semanaLabel: 'Fase 1: La Base', duracion: '5 min', nivel: 'Principiante', categoria: 'Ubicación', icon: 'fa-map-location-dot', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy definirás el lugar exacto donde tu perro debe hacer sus necesidades. Tu perro no sabe dónde es su baño porque nadie se lo ha enseñado claramente.", 
                    puntosClave: ["Elige un solo lugar (pad o exterior).", "Lleva a tu perro a esa zona.", "Espera pacientemente hasta que haga algo."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Visita guiada', desc: 'Llévalo 3 veces al mismo lugar hoy. Quédate con él hasta que orine o defeque en esa zona específica.', emoji: '📍', icon: 'fa-location-dot' }] }, 
                tips: ["Nunca cambies el lugar de su baño, eso solo lo confunde."], 
                error: { titulo: "Múltiples opciones", desc: "Poner pads de entrenamiento por toda la casa. Él no sabrá cuál elegir." }, 
                resumen: "Hoy creaste la base del entrenamiento y su mapa mental.", microEnganche: "Mañana aprenderás el momento exacto para llevarlo."
            },
            { 
                day: 2, title: 'Detectar el momento', semanaLabel: 'Fase 1: La Base', duracion: '5 min', nivel: 'Principiante', categoria: 'Rutina', icon: 'fa-clock', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy aprenderás cuándo tu perro necesita ir al baño. Tu perro siempre necesita ir en momentos clave. Si no lo llevas, lo hará en cualquier lugar.", 
                    puntosClave: ["Llévalo inmediatamente al despertar.", "Llévalo 15 minutos después de comer.", "Llévalo justo después de jugar activamente."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Anticipación', desc: 'No esperes a que ocurra el accidente. Aplica esta rutina 3 veces hoy en los momentos clave.', emoji: '⏰', icon: 'fa-stopwatch' }] }, 
                tips: ["Anticiparte a sus necesidades evita accidentes en el piso."], 
                error: { titulo: "Esperar a que avise", desc: "Creer que el perro te va a ladrar para pedirte ir al baño al segundo día de entrenamiento." }, 
                resumen: "Ya estás evitando errores antes de que ocurran.", microEnganche: "Mañana reforzarás cuando lo haga bien para que no lo olvide."
            },
            { 
                day: 3, title: 'Reforzar lo correcto', semanaLabel: 'Fase 2: El Refuerzo', duracion: '3 min', nivel: 'Medio', categoria: 'Premios', icon: 'fa-star', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy harás que tu perro entienda que lo hizo bien. Los perros aprenden por asociación. Si hace algo correcto y no pasa nada, no aprende.", 
                    puntosClave: ["Espera a que haga sus necesidades en su zona.", "Felicítalo inmediatamente, justo cuando termine.", "Usa voz muy positiva y entrégale un premio muy rico."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Fiesta del Baño', desc: 'Refuerza cada vez que acierte en su lugar. Tu emoción debe ser clara para que su cerebro lo registre como una victoria.', emoji: '🎉', icon: 'fa-gift' }] }, 
                tips: ["Premia en el momento exacto, ni antes de que termine, ni minutos después."], 
                error: { titulo: "Premiar tarde", desc: "Darle el premio cuando ya volvió a la sala. Pensará que lo premias por entrar a la sala." }, 
                resumen: "Tu perro ya empieza a entender dónde es su baño.", microEnganche: "Mañana aprenderás a corregir los errores correctamente."
            },
            { 
                day: 4, title: 'Corregir sin confundir', semanaLabel: 'Fase 2: El Refuerzo', duracion: '3 min', nivel: 'Medio', categoria: 'Corrección', icon: 'fa-ban', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy aprenderás a corregir sin generar miedo o confusión. Uno de los errores más comunes es corregir tarde. Solo puedes corregir en el momento exacto.", 
                    puntosClave: ["Si lo ves en el acto, di un 'NO' firme.", "Llévalo rápido, pero sin agresividad, al lugar correcto.", "No castigues nunca si el accidente ya pasó."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Interrupción', desc: 'Solo si lo atrapas en el acto de orinar fuera de su zona, interrumpe con el "NO" y transpórtalo a su baño.', emoji: '🚫', icon: 'fa-hand' }] }, 
                tips: ["Fuera de tiempo, no corrijas. Limpia en silencio y con limpiador enzimático."], 
                error: { titulo: "Castigo retroactivo", desc: "Frotarle la nariz en el orine. Solo lograrás que te tenga miedo y orine a escondidas." }, 
                resumen: "Ahora estás educando sin confundir a tu mascota.", microEnganche: "Mañana consolidarás el hábito para no volver atrás."
            },
            { 
                day: 5, title: 'Crear el hábito', semanaLabel: 'Fase 3: Éxito Total', duracion: '5 min', nivel: 'Avanzado', categoria: 'Consistencia', icon: 'fa-calendar-check', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy convertirás el comportamiento en rutina. El aprendizaje se convierte en hábito con repetición. Tu perro ya entendió, ahora necesita consistencia.", 
                    puntosClave: ["Mantén horarios de comida y paseos constantes.", "Usa siempre el mismo lugar designado.", "Refuerza efusivamente lo correcto cada vez."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Rutina Inquebrantable', desc: 'Aplica todo lo aprendido durante el día. Anticipa, lleva a su zona y premia. No bajes la guardia.', emoji: '🔄', icon: 'fa-arrows-rotate' }] }, 
                tips: ["La rutina crea resultados permanentes. Los perros aman la previsibilidad."], 
                error: { titulo: "Cambiar las reglas", desc: "Dejarlo salir a horas diferentes cada día. Su vejiga no sabrá cuándo prepararse." }, 
                resumen: "Tu perro ya tiene una nueva conducta higiénica.", microEnganche: "¡Felicidades! Un hogar limpio es el mejor premio."
            }
        ]
    },

    // --- RETO 3: LOGRA QUE TE OBEDEZCA (5 DÍAS) ---
    {
        id: 'obediencia-basica-5d', 
        name: 'Obediencia Básica', 
        icon: '🐕', 
        totalDays: 5, 
        desc: 'Logra que tu perro te preste atención y siga tus órdenes.',
        introAchieve: 'Sentaremos las bases de la comunicación. Tu perro aprenderá a mirarte, a acudir a tu llamado y a quedarse quieto, transformándose en un compañero educado.',
        lessons: [
            { 
                day: 1, title: 'Captar su atención', semanaLabel: 'Fase 1: Conexión', duracion: '3 min', nivel: 'Principiante', categoria: 'Atención', icon: 'fa-bullseye', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy lograrás que tu perro te preste atención cuando lo llamas. Antes de que obedezca, primero debe prestarte atención. Si no reacciona a su nombre, no hay conexión.", 
                    puntosClave: ["Di su nombre con tono alegre.", "Cuando te mire a los ojos, felicítalo o dale un snack.", "Repite esto varias veces a lo largo del día."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Juego del Nombre', desc: 'En un ambiente tranquilo, di su nombre. Si te mira, premio. Si no te mira, haz un sonido gracioso, cuando voltee, premio.', emoji: '🗣️', icon: 'fa-comment-dots' }] }, 
                tips: ["No repitas su nombre muchas veces seguidas como un disco rayado. Di el nombre y espera."], 
                error: { titulo: "Desgastar su nombre", desc: "Usar su nombre para regañarlo ('¡Milo, NO!'). Su nombre debe ser siempre algo positivo." }, 
                resumen: "Hoy lograste el primer y más importante paso: la conexión.", microEnganche: "Mañana aprenderá a venir corriendo hacia ti."
            },
            { 
                day: 2, title: 'El Llamado Efectivo', semanaLabel: 'Fase 1: Conexión', duracion: '5 min', nivel: 'Principiante', categoria: 'Llamado', icon: 'fa-person-walking-arrow-right', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy lograrás que tu perro venga cuando lo llamas. Muchos perros no vienen porque no ven motivo para hacerlo. Hoy vas a cambiar eso siendo irresistible para él.", 
                    puntosClave: ["Llámalo por su nombre con energía y entusiasmo.", "Retrocede unos pasos rápidamente para activar su instinto de seguimiento.", "Felicítalo exageradamente al llegar a ti."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'El Imán', desc: 'Practica el llamado 5 veces hoy dentro de casa. Llámalo, corre hacia atrás y cuando llegue, dale un snack premium.', emoji: '🧲', icon: 'fa-magnet' }] }, 
                tips: ["Nunca lo llames para algo negativo (bañarlo, regañarlo o cortarle las uñas)."], 
                error: { titulo: "Perseguirlo", desc: "Llamarlo y caminar HACIA él. Eso en lenguaje canino significa 'te estoy cazando', por lo que él huirá." }, 
                resumen: "Tu perro empieza a responder a tu voz con alegría.", microEnganche: "Mañana aprenderá a controlar su cuerpo y quedarse quieto."
            },
            { 
                day: 3, title: 'La Orden "Quieto"', semanaLabel: 'Fase 2: Control', duracion: '3 min', nivel: 'Medio', categoria: 'Autocontrol', icon: 'fa-hand', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy tu perro aprenderá a quedarse en un lugar. Quedarse quieto no es natural para ellos, se enseña paso a paso. No busques perfección, busca progreso.", 
                    puntosClave: ["Dile 'Quieto' acompañando con la palma de tu mano abierta.", "Espera solo un par de segundos.", "Felicítalo y prémialo si no se mueve en ese breve tiempo."] 
                }, 
                practica: { timerSeconds: 180, pasos: [{ titulo: 'Pausa de 3 Segundos', desc: 'Pídele que se siente. Di QUIETO, cuenta hasta 3 en tu mente. Si no se levanta, libéralo diciendo "OK" y prémialo.', emoji: '⏱️', icon: 'fa-stopwatch' }] }, 
                tips: ["Empieza con tiempos muy cortos. El éxito construye confianza."], 
                error: { titulo: "Exigir demasiado", desc: "Pedirle que se quede quieto por 1 minuto en el primer intento. Fracasará y se frustrará." }, 
                resumen: "Tu perro ya está desarrollando control de sus impulsos.", microEnganche: "Mañana uniremos todas las órdenes en un circuito."
            },
            { 
                day: 4, title: 'Refuerzo de Obediencia', semanaLabel: 'Fase 2: Control', duracion: '5 min', nivel: 'Medio', categoria: 'Circuito', icon: 'fa-dumbbell', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy harás que tu perro repita las órdenes correctamente. La obediencia se logra con repetición. Vamos a unir el nombre, el llamado y el quieto para crear un hábito.", 
                    puntosClave: ["Practica la atención con su 'Nombre'.", "Practica el comando 'Venir'.", "Practica el comando 'Quieto'."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Circuito Ninja', desc: 'Haz una sesión de 5 minutos donde combines las 3 órdenes. Llámalo, pídele que se quede quieto, aléjate, y vuelve a llamarlo.', emoji: '🔄', icon: 'fa-arrows-rotate' }] }, 
                tips: ["Repetir bien vale más que hacerlo perfecto. Sé paciente."], 
                error: { titulo: "Aburrir al perro", desc: "Hacer sesiones de 20 minutos seguidos. Los perros aprenden mejor en ráfagas cortas y divertidas de 5 minutos." }, 
                resumen: "Tu perro ya está entendiendo la estructura de obediencia.", microEnganche: "Mañana consolidaremos el aprendizaje a prueba de balas."
            },
            { 
                day: 5, title: 'Control Total', semanaLabel: 'Fase 3: Maestría', duracion: '5 min', nivel: 'Avanzado', categoria: 'Generalización', icon: 'fa-globe', 
                teoria: { 
                    audioSeconds: 45, audioUrl: "", 
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy convertirás la obediencia en un comportamiento natural en cualquier entorno. Los perros son contextuales; si obedece en la sala, no significa que obedezca en el parque.", 
                    puntosClave: ["Practica las órdenes en diferentes lugares de la casa.", "Usa los comandos en situaciones reales (antes de comer o salir).", "Sigue reforzando cada acierto para mantener la motivación."] 
                }, 
                practica: { timerSeconds: 300, pasos: [{ titulo: 'Cambio de Escenario', desc: 'Aplica el circuito de ayer pero en el patio, en la cocina o durante el paseo en un lugar sin tantas distracciones.', emoji: '🌳', icon: 'fa-tree' }] }, 
                tips: ["Varía el entorno poco a poco. No vayas al parque más ruidoso el primer día."], 
                error: { titulo: "Quitar los premios muy rápido", desc: "Creer que como ya lo sabe hacer, ya no necesita que le pagues con su snack." }, 
                resumen: "Tu perro ahora responde a tus órdenes en diversos escenarios.", microEnganche: "¡Felicidades! Estás listo para retos más avanzados de educación."
            }
        ]
    }
];