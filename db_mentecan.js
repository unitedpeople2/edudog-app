// db_mentecan.js - Base de Datos de Retos Mentecan Vital

const CHALLENGES = [
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
                    audioSeconds: 45, 
                    audioUrl: "", // PENDIENTE: Poner link del audio
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy vas a evitar que tu perro muerda objetos prohibidos redirigiendo su conducta. Tu perro no muerde por ser malo, lo hace por energía acumulada. El error es corregir cuando ya rompió algo.", 
                    puntosClave: [
                        "Observa cuándo intenta morder algo prohibido.", 
                        "Di 'NO' firme en el momento exacto.", 
                        "Dale inmediatamente un objeto permitido."
                    ] 
                }, 
                practica: { timerSeconds: 180, pasos: [
                    { titulo: 'Práctica Activa', desc: 'Durante los próximos 3 minutos, vigila a tu perro de cerca. Si va a morder, aplica el "NO" y redirige con su juguete.', emoji: '⏱️', icon: 'fa-stopwatch' }
                ]}, 
                tips: ["Corrige en el momento exacto, no segundos o minutos después."], 
                error: { titulo: "El gran error", desc: "Regañarlo cuando el zapato ya está roto. Su cerebro no conecta el regaño con la acción pasada." }, 
                resumen: "Hoy diste el primer paso para cambiar su comportamiento.",
                microEnganche: "Mañana aprenderás por qué tu perro insiste en morder."
            },
            { 
                day: 2, title: 'Eliminar la causa', semanaLabel: 'Fase 1: Acción Inmediata', duracion: '5 min', nivel: 'Principiante', categoria: 'Energía', icon: 'fa-bolt', 
                teoria: { 
                    audioSeconds: 45, 
                    audioUrl: "", // PENDIENTE: Poner link del audio
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy reducirás la necesidad de morder eliminando su exceso de energía. Un perro con energía sin liberar buscará descargarla destruyendo.", 
                    puntosClave: [
                        "Juega activamente con tu perro durante 5 minutos.", 
                        "Usa un juguete para liberar su energía física y mental.", 
                        "Termina la sesión con calma para bajar sus revoluciones."
                    ] 
                }, 
                practica: { timerSeconds: 300, pasos: [
                    { titulo: 'Sesión de Desgaste', desc: 'Juega a lanzarle la pelota o tira y afloja. Haz que corra y se canse. Al terminar el timer, detente y pide calma.', emoji: '🎾', icon: 'fa-baseball' }
                ]}, 
                tips: ["Un perro cansado física y mentalmente aprende mil veces más rápido."], 
                error: { titulo: "Falta de actividad", desc: "Pedirle que esté tranquilo cuando lleva 8 horas durmiendo y lleno de energía." }, 
                resumen: "Estás atacando la raíz del problema (la energía acumulada).",
                microEnganche: "Mañana aprenderás a anticiparte antes de que muerda."
            },
            { 
                day: 3, title: 'La Anticipación', semanaLabel: 'Fase 2: Control Mental', duracion: '3 min', nivel: 'Medio', categoria: 'Atención', icon: 'fa-eye', 
                teoria: { 
                    audioSeconds: 45, 
                    audioUrl: "", // PENDIENTE: Poner link del audio
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy evitarás el problema antes de que ocurra. Tu perro siempre da señales antes de morder: olfatea, se acerca y se enfoca. Si esperas a que muerda, llegaste tarde.", 
                    puntosClave: [
                        "Identifica los momentos del día donde suele morder.", 
                        "Interviene antes de que su boca toque el objeto.", 
                        "En el instante que lo interrumpes, dale su juguete."
                    ] 
                }, 
                practica: { timerSeconds: 180, pasos: [
                    { titulo: 'Vigilancia Táctica', desc: 'Observa su lenguaje corporal. En cuanto fije su mirada en un mueble o zapato, interrumpe con un chasquido o un "NO" antes de que actúe.', emoji: '👀', icon: 'fa-binoculars' }
                ]}, 
                tips: ["Anticipar es 100 veces más poderoso que corregir el error."], 
                error: { titulo: "Reaccionar tarde", desc: "Esperar a escuchar el sonido de algo rompiéndose para recién ir a intervenir." }, 
                resumen: "Ahora pasaste de ser reactivo a tener control antes del error.",
                microEnganche: "Mañana reforzarás el buen comportamiento para que lo repita."
            },
            { 
                day: 4, title: 'Reforzamiento Positivo', semanaLabel: 'Fase 2: Control Mental', duracion: '3 min', nivel: 'Medio', categoria: 'Premios', icon: 'fa-star', 
                teoria: { 
                    audioSeconds: 45, 
                    audioUrl: "", // PENDIENTE: Poner link del audio
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy harás que tu perro prefiera lo correcto. Los perros repiten lo que les da recompensa. Si solo corriges lo malo, pero no premias lo bueno, el aprendizaje está incompleto.", 
                    puntosClave: [
                        "Observa cuidadosamente cuando use SU juguete permitido.", 
                        "Felicítalo inmediatamente con voz aguda y alegre.", 
                        "Refuerza con toda tu atención, caricias o un premio."
                    ] 
                }, 
                practica: { timerSeconds: 180, pasos: [
                    { titulo: 'Cacería de buenas acciones', desc: 'No busques errores, busca aciertos. Cuando de forma natural agarre su hueso o juguete, hazle una fiesta de felicitaciones.', emoji: '🎉', icon: 'fa-gift' }
                ]}, 
                tips: ["Premia lo bueno de forma exagerada, no solo castigues lo malo."], 
                error: { titulo: "Ignorar lo bueno", desc: "Verlo jugando con su juguete y no decirle nada porque 'es lo que debe hacer'. ¡Celebra!" }, 
                resumen: "Tu perro ya está aprendiendo activamente a tomar buenas decisiones.",
                microEnganche: "Mañana consolidarás el cambio para siempre."
            },
            { 
                day: 5, title: 'La Consolidación', semanaLabel: 'Fase 3: El Hábito', duracion: '5 min', nivel: 'Avanzado', categoria: 'Consistencia', icon: 'fa-lock', 
                teoria: { 
                    audioSeconds: 45, 
                    audioUrl: "", // PENDIENTE: Poner link del audio
                    intro: "Objetivo de hoy 🎯", 
                    cuerpo: "Hoy convertirás el comportamiento en un hábito permanente. El cambio real no ocurre en un día, ocurre con la consistencia. Vamos a unir todo lo aprendido.", 
                    puntosClave: [
                        "Aplica el combo: Corregir en el momento + Redirigir + Anticipar + Reforzar.", 
                        "Sé consistente. No hay días de descanso para las reglas.", 
                        "Mantén la calma absoluta, no necesitas gritar."
                    ] 
                }, 
                practica: { timerSeconds: 300, pasos: [
                    { titulo: 'Modo Automático', desc: 'Activa el temporizador y haz tu vida normal, pero aplicando las 4 reglas al instante si es necesario. Ya sabes qué hacer.', emoji: '🧠', icon: 'fa-brain' }
                ]}, 
                tips: ["La constancia paciente crea resultados permanentes."], 
                error: { titulo: "Bajar la guardia", desc: "Pensar que porque ayer se portó bien, hoy puedes dejar de anticipar." }, 
                resumen: "Ya tienes el control total del comportamiento de tu perro.",
                microEnganche: "¡Felicidades! Estás listo para el siguiente nivel de entrenamiento avanzado."
            }
        ]
    },
    // --- AQUÍ EMPIEZA EL RETO ANTIGUO DE 7 DÍAS (MOVIDO AL PUESTO 2) ---
    {
        id: 'no-muerda', name: 'Soltar a la orden (Avanzado)', icon: '🦷', totalDays: 7, desc: 'Domina el comando soltar y la obediencia estricta.',
        introAchieve: 'Llevaremos su educación al siguiente nivel. Lograrás que suelte cualquier objeto prohibido solo con escuchar tu voz, desde cualquier lugar de la casa.',
        lessons: [
            { 
                day: 1, title: 'El código de su mente', semanaLabel: 'Fase 1: Diagnóstico', duracion: '10 min', nivel: 'Fácil', categoria: 'Psicología', icon: 'fa-magnifying-glass', 
                teoria: { 
                    audioSeconds: 25, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-1.mp3?alt=media&token=8ee71daa-b72a-484a-ac4e-355791da006d", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "Morder no es rebeldía, es instinto. Hoy dejamos de regañar y empezamos a leer su mente para darle verdaderas soluciones.", 
                    puntosClave: ["La información es poder: Identificar qué muerde revela qué necesita.", "No hay maldad, hay instinto: Morder es su válvula de escape biológica.", "Regla de Oro hoy: Cero correcciones. Solo observa y analiza."] 
                }, 
                practica: { timerSeconds: 600, pasos: [{ titulo: 'Observación pasiva', desc: 'Actúa como un espectador invisible. Deja que explore y anota exactamente hacia qué materiales se dirige.', emoji: '🔍', icon: 'fa-magnifying-glass' }] }, 
                tips: ["Un perro exhausto físicamente reduce su necesidad de morder en un 80%."], error: { titulo: "El error de novato", desc: "Gritarle o corregirlo sin entender primero por qué eligió ese objeto." }, resumen: "El diagnóstico preciso hoy garantiza la obediencia de mañana.", microEnganche: "Mañana aprenderás el poder de tu postura." 
            },
            { 
                day: 2, title: 'El poder del "QUIETO"', semanaLabel: 'Fase 2: Control', duracion: '15 min', nivel: 'Fácil', categoria: 'Obediencia', icon: 'fa-hand', 
                teoria: { 
                    audioSeconds: 29, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-2.mp3?alt=media&token=9544e478-7772-460d-9962-e8ef4d87a648", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "El comando 'QUIETO' es la frontera entre el caos y el control. Sin gritar, convertiremos tu mano en una barrera psicológica.", 
                    puntosClave: ["Firmeza visual: Tu mano extendida es una pared emocional.", "Voz de ancla: Un solo comando firme, sin titubeos.", "Micro-segundos de oro: El premio llega cuando se detiene."] 
                }, 
                practica: { timerSeconds: 900, pasos: [{ titulo: 'La frontera visual', desc: 'Cuando intente acercarse a un objeto, interpon tu mano firme y abierta frente a su campo de visión.', emoji: '✋', icon: 'fa-hand' }] }, 
                tips: ["Usa trozos de premio muy pequeños para que no se llene rápido."], error: { titulo: "Desgaste del comando", desc: "Repetir 'Quieto, quieto'. Le enseñas que tus órdenes son opcionales." }, resumen: "Tu seguridad al dar la orden genera su obediencia.", microEnganche: "Mañana usaremos sus juguetes a tu favor." 
            },
            { 
                day: 3, title: 'Cambio por diversión', semanaLabel: 'Fase 2: Control', duracion: '12 min', nivel: 'Medio', categoria: 'Sustitución', icon: 'fa-baseball', 
                teoria: { 
                    audioSeconds: 23, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-3.mp3?alt=media&token=52cd1a0a-84a3-4ae5-934b-7b0839e33d5c", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "Hoy dominaremos la 'Sustitución de Alto Valor': en vez de quitarle a la fuerza lo que muerde, le ofreceremos un trato irresistible.", 
                    puntosClave: ["El intercambio justo: Nunca le quites algo sin ofrecerle algo mejor.", "El SÍ es más fuerte que el NO.", "Conviértete en el premio: Tu entusiasmo es la recompensa."] 
                }, 
                practica: { timerSeconds: 720, pasos: [{ titulo: 'El intercambio maestro', desc: 'Cuando vaya por la carnada, di QUIETO. Al detenerse, haz aparecer su juguete de forma emocionante.', emoji: '🎾', icon: 'fa-baseball' }] }, 
                tips: ["Rota sus juguetes cada 2 días. La novedad dispara la dopamina."], error: { titulo: "Generar competencia", desc: "Jalonearle el zapato para quitárselo a la fuerza." }, resumen: "Elegir QUÉ morder es el resultado de tu liderazgo.", microEnganche: "Mañana aprenderá a soltar por voluntad propia." 
            },
            { 
                day: 4, title: 'Confianza ciega (SUELTA)', semanaLabel: 'Fase 3: Avanzado', duracion: '15 min', nivel: 'Medio', categoria: 'Seguridad', icon: 'fa-arrows-rotate', 
                teoria: { 
                    audioSeconds: 28, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-4.mp3?alt=media&token=4eae7408-0ccb-41b3-984a-1dc56a0661fb", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "'SUELTA' no es una orden, es confianza absoluta. Hoy le demostraremos que soltar sus tesoros no significa perderlos.", 
                    puntosClave: ["Cero confrontación: La fuerza bruta genera resistencia.", "La economía del perro: Te doy esto a cambio de un premio mejor.", "Paciencia táctica: Quien se mueve primero, pierde."] 
                }, 
                practica: { timerSeconds: 900, pasos: [{ titulo: 'Congelación y comando', desc: 'Deja de moverte por completo. Pon un snack irresistible frente a su nariz y di SUELTA.', emoji: '🗣️', icon: 'fa-bullhorn' }] }, 
                tips: ["Si no suelta, no repitas el comando. Solo acerca más el snack."], error: { titulo: "La trampa de la fuerza", desc: "Abrirle la mandíbula con tus manos." }, resumen: "Soltar voluntariamente es la prueba de respeto hacia ti.", microEnganche: "Mañana quitaremos la correa física." 
            },
            { 
                day: 5, title: 'La correa invisible', semanaLabel: 'Fase 3: Avanzado', duracion: '10 min', nivel: 'Avanzado', categoria: 'Resistencia', icon: 'fa-ruler-horizontal', 
                teoria: { 
                    audioSeconds: 25, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-5.mp3?alt=media&token=9df28241-0a70-4bd4-9141-362a7114f6d2", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "Hoy expandiremos tu control creando un escudo emocional donde tu voz detenga sus impulsos desde la distancia.", 
                    puntosClave: ["Proyección de voz: Tu energía debe cruzar la habitación.", "Contacto visual: Es el cable inalámbrico que los conecta.", "Progreso milimétrico: La confianza se construye paso a paso."] 
                }, 
                practica: { timerSeconds: 600, pasos: [{ titulo: 'Prueba de tentación', desc: 'Lanza suavemente un objeto que le guste a un lado suyo, fuera de su alcance inmediato. Si va, di QUIETO.', emoji: '👟', icon: 'fa-binoculars' }] }, 
                tips: ["El premio siempre se entrega en el sitio donde le pediste que se quedara."], error: { titulo: "Exceso de ambición", desc: "Alejarte 5 metros en el primer intento." }, resumen: "El respeto a tu voz es más fuerte que cualquier barrera.", microEnganche: "Mañana le pondremos la prueba más difícil." 
            },
            { 
                day: 6, title: 'Comportamiento blindado', semanaLabel: 'Fase 4: Consolidación', duracion: '15 min', nivel: 'Avanzado', categoria: 'Entorno', icon: 'fa-house-signal', 
                teoria: { 
                    audioSeconds: 25, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-6.mp3?alt=media&token=a884d811-a99f-4efc-a4ec-91fb4768f2a6", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "Hoy blindaremos su mente exponiéndolo a sus mayores tentaciones, enseñándole que el respeto aplica en cada rincón.", 
                    puntosClave: ["Variabilidad calculada: Exponerlo a tentaciones pasadas.", "Cero excepciones: La regla aplica hoy, mañana y siempre.", "Decisiones autónomas: Permitir que él elija lo correcto."] 
                }, 
                practica: { timerSeconds: 900, pasos: [{ titulo: 'El circuito', desc: 'Crea un pasillo con 3 objetos tentadores. Camina con él. Si los ignora voluntariamente, hazle una fiesta.', emoji: '✅', icon: 'fa-circle-check' }] }, 
                tips: ["Usa calcetines, suelen ser los más difíciles para ellos."], error: { titulo: "Mensajes mixtos", desc: "Dejar que muerda zapatos viejos. Él no sabe de precios." }, resumen: "La verdadera obediencia es cuando elige portarse bien.", microEnganche: "¡Mañana es el test de graduación final!" 
            },
            { 
                day: 7, title: 'La Prueba Maestra', semanaLabel: 'Fase 4: Consolidación', duracion: '20 min', nivel: 'Avanzado', categoria: 'Éxito', icon: 'fa-trophy', 
                teoria: { 
                    audioSeconds: 27, audioUrl: "https://firebasestorage.googleapis.com/v0/b/guias-facil-bot.firebasestorage.app/o/MenteCan%2FNomuerdas-7.mp3?alt=media&token=c85d08a8-84e9-4cc0-a387-f29913f82548", 
                    intro: "Objetivo de hoy 🎯", cuerpo: "Hoy evaluaremos su autocontrol en absoluta soledad para graduarlo hacia un estilo de vida de libertad en el hogar.", 
                    puntosClave: ["El test de fuego: Su comportamiento en privado revela su aprendizaje.", "Desapego positivo: Confía en el trabajo que has hecho.", "El fin del hábito: Un perro con autocontrol es un compañero eterno."] 
                }, 
                practica: { timerSeconds: 1200, pasos: [{ titulo: 'Simulacro real', desc: 'Deja la habitación con objetos a la vista. Espera afuera 5 minutos. Si no rompió nada al entrar, dale el Jackpot (premio gigante).', emoji: '🎓', icon: 'fa-graduation-cap' }] }, 
                tips: ["El ejercicio previo reduce el instinto destructivo. Cánsalo primero."], error: { titulo: "El castigo retroactivo", desc: "Regañarlo por algo que rompió mientras no estabas." }, resumen: "Has esculpido la mente de tu perro de forma permanente.", microEnganche: "¡Completaste tu segundo reto con éxito total!" 
            }
        ]
    }
];