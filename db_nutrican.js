// db_nutrican.js - Base de Datos y Textos de NutriCan Vital

const INGREDIENT_INFO = {
    'huesos': { 
        title: 'Huesos Carnosos 🦴', 
        concept: 'Son huesos blandos recubiertos de carne. Aportan el calcio necesario y limpian los dientes de tu perrito de forma natural. <br><br><b class="text-rose-600">⚠️ Regla de Oro:</b> ¡NUNCA se dan cocidos! Siempre crudos para que no se astillen.', 
        options: 'Cuellos de pollo, alitas de pollo (sin puntas), rabadilla blanda, carcasas (huacales) de pollo, muslos, cuellos de pavo, cuellos de pato, codorniz entera, costillas de cerdo carnosas, rabo de res.' 
    },
    'carne': { 
        title: 'Carne Magra (Músculo) 🥩', 
        concept: 'Es la principal fuente de proteína y energía para tu peludo. Básicamente, es cualquier corte de carne sin el hueso.', 
        options: 'Pechuga de pollo, pierna o muslo deshuesado, corazón de res (cuenta como músculo), corazón de pollo, sangrecita, carne de cerdo magra, pulpa de res, carne molida baja en grasa, carne de pavo, pescado azul (bonito o jurel sin espinas), carne de cordero.' 
    },
    'visceras': { 
        title: 'Vísceras Mix 🩸', 
        concept: 'Son las "vitaminas" naturales de la dieta BARF. Deben darse en pequeñas cantidades. Recuerda que la mitad de esta ración (5%) debe ser obligatoriamente hígado.', 
        options: 'Hígado de pollo, hígado de res, riñón de res o cerdo, bazo, sesos, criadillas, pulmón (bofe), mollejas.<br><br><span class="text-[11px] text-slate-500 font-medium">Tip: Si no le gusta la textura, puedes licuarlas con un poco de agua o mezclarlas con la carne molida.</span>' 
    },
    'vegetales': { 
        title: 'Vegetales y Frutas 🥦', 
        concept: 'Aportan fibra, vitaminas y antioxidantes. Los perros no mastican como nosotros, así que para que puedan absorber sus nutrientes, debes darlos licuados en puré o ligeramente cocidos/al vapor.', 
        options: 'Zanahoria, zapallo (calabaza), brócoli, espinaca, zucchini (calabacín), vainitas, manzana (siempre sin semillas), pera, plátano, arándanos, sandía, papaya.' 
    }
};

const TRANSITION_TEXTS = {
    14: [ 
        "100% Dieta blanda cocida (Pollo y zapallo). Cero crudo.", 
        "Mantén dieta blanda. Estómago desintoxicándose.", 
        "Último día de dieta blanda exclusiva.", 
        "Agrega 30% de la carne magra cruda a lo cocido.", 
        "Sube a 50% de carne magra cruda. Heces pueden variar.", 
        "75% carne cruda. El estómago se hace ácido.", 
        "100% Carne cruda + vegetales. Adiós a lo cocido.", 
        "Introduce el Hígado crudo en mínima cantidad.", 
        "Sube la porción de hígado al 5%.", 
        "Introduce otras vísceras (riñón, bazo).", 
        "Transición total de vísceras lograda.", 
        "¡El gran paso! Introduce Huesos Carnosos (Cuellos triturados).", 
        "Aumenta ración de huesos. Mastica bajo supervisión.", 
        "¡Transición 100% completada! Felicidades." 
    ],
    10: [ 
        "Dieta blanda cocida para estabilizar flora.", 
        "Agrega 50% de carne magra cruda.", 
        "100% Carne magra cruda + Vegetales.", 
        "Introduce una pizca de hígado.", 
        "Porción completa de hígado (5%).", 
        "Introduce segunda víscera (riñón).", 
        "Todas las vísceras al 100%.", 
        "Introduce Huesos Carnosos (Cuellos blandos).", 
        "Aumenta Huesos Carnosos a ración normal.", 
        "¡Transición 100% completada! Felicidades." 
    ],
    5: [ 
        "50% carne cocida, 50% carne cruda.", 
        "100% Carne cruda + Vegetales. Introduce vísceras.", 
        "Vísceras al 100%. Vigila las heces.", 
        "Introduce Huesos Carnosos blandos.", 
        "¡Transición 100% completada al crudo!" 
    ]
};