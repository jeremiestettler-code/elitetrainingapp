// sessions.js
// =======================
// DONNÉES DES SÉANCES — Programme Force (compatibles index.html)
// =======================
// ⚠️ CE FICHIER NE CONTIENT QUE DES DONNÉES
// AUCUN HTML / AUCUNE LOGIQUE
//
// Structure attendue :
// window.SESSIONS = { KEY: { name, warmup:[...], items:[...] }, ... }
//
// NOTE COMPATIBILITÉ : certaines versions d'index.html lisent `SESSIONS` (sans window.)
// → on expose les deux (window.SESSIONS et SESSIONS)

window.SESSIONS = {

  /* =====================
     A — PECTOR AUX / TRICEPS (2 variantes)
     ===================== */

  A1: {
    name: "Séance A1 — Pecs / Triceps (Force)",
    warmup: [
      { id:"WU-A1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles d’épaules + ouverture thoracique (amplitude confortable)." },
      { id:"WU-A1-2", name:"Band pull-aparts", icon:"wu_bandpull", todo:"2×15", seconds:60, desc:"Élastique léger, omoplates basses, contrôle." },
      { id:"WU-A1-3", name:"Squats à vide", icon:"wu_squat", todo:"2×10", seconds:60, desc:"Descente lente, genoux stables, respiration." },
      { id:"WU-A1-4", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8–12", seconds:45, desc:"Genoux si besoin, amplitude confortable." }
    ],
    cooldown: [
      { id:"CD-A1-1", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"60 s", seconds:60, desc:"Poitrine ouverte, épaules basses, respiration lente." },
      { id:"CD-A1-2", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"45 s", seconds:45, desc:"Relâche les épaules/pectoraux. Garde les omoplates basses." },
      { id:"CD-A1-3", name:"Adho Mukha Svanasana — épaules + chaîne post.", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge le dos, talons vers le sol." },
      { id:"CD-A1-4", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Bassin neutre, fessier serré, respiration." },
      { id:"CD-A1-5", name:"Cocon — relâchement du haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Arrondis le dos, respire, relâche nuque et épaules." },
      { id:"CD-A1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"A1-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:4, reps:"6–8", work:45, rest:120,
        desc:"Mouvement principal : lourd et propre (1–2 reps en réserve).",
        steps:["Pieds ancrés, omoplates serrées/basses.","Descends en contrôle (≈2s) au niveau des pectoraux.","Pousse stable en expirant (sans cogner les haltères)."],
        mistakes:["Épaules qui montent","Poignets cassés","Rebond en bas"] },

      { id:"A1-2", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pec + épaules", sets:3, reps:"8–10", work:45, rest:90,
        desc:"Accent haut pectoraux, trajectoire stable.",
        steps:["Inclinaison légère.","Descends en contrôle.","Pousse sans perdre le gainage (expire)."],
        mistakes:["Inclinaison trop forte","Cambrure excessive","Amplitude courte"] },

      { id:"A1-3", name:"Écartés haltères sur banc", icon:"flydb", muscle:"Pectoraux", sets:3, reps:"12–15", work:45, rest:75,
        desc:"Isolation : étirement + contrôle (charge modérée).",
        steps:["Bras légèrement fléchis.","Ouvre en arc jusqu’à l’étirement.","Reviens en serrant les pectoraux."],
        mistakes:["Trop lourd","Descendre trop bas","Bras trop tendus"] },

      { id:"A1-4", name:"Poulie — Triceps vertical prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Ta poulie : uniquement ce mouvement, strict.",
        steps:["Coudes collés, buste stable.","Extension complète + pause 1s.","Retour contrôlé sans bouger les épaules."],
        mistakes:["Coudes qui s’écartent","Balancer le buste","Trop lourd"] },

      { id:"A1-5", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:3, reps:"15–20", work:45, rest:60,
        desc:"Largeur d’épaules : léger, strict.",
        steps:["Épaules basses.","Monte à hauteur d’épaule.","Redescends lentement (≈2s)."],
        mistakes:["Élan","Trapèzes dominants","Poignets cassés"] },

      { id:"A1-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre : bassin stable, respiration.",
        steps:["Coudes sous épaules.","Bassin neutre, fessiers serrés.","Respire (pas d’apnée)."],
        mistakes:["Bassin qui s’affaisse","Apnée","Épaules hautes"] }
    ]
  },

  A2: {
    name: "Séance A2 — Pecs / Triceps (Volume)",
    warmup: [
      { id:"WU-A2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles + ouverture thoracique (progressif)." },
      { id:"WU-A2-2", name:"Row élastique", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"Tirage léger, pause 1s en fin de course." },
      { id:"WU-A2-3", name:"Pompes tempo", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"3s descente, contrôle." },
      { id:"WU-A2-4", name:"Triceps léger (poulie)", icon:"cabletri", todo:"1×15", seconds:45, desc:"Prise serrée, amplitude complète." }
    ],
    cooldown: [
      { id:"CD-A2-1", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"60 s", seconds:60, desc:"Poitrine ouverte, épaules basses, respiration lente." },
      { id:"CD-A2-2", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"45 s", seconds:45, desc:"Relâche les épaules/pectoraux. Garde les omoplates basses." },
      { id:"CD-A2-3", name:"Adho Mukha Svanasana — épaules + chaîne post.", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge le dos, talons vers le sol." },
      { id:"CD-A2-4", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Bassin neutre, fessier serré, respiration." },
      { id:"CD-A2-5", name:"Cocon — relâchement du haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Arrondis le dos, respire, relâche nuque et épaules." },
      { id:"CD-A2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"A2-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:4, reps:"8–10", work:45, rest:90,
        desc:"Volume : garde 1–2 reps en réserve.",
        steps:["Omoplates serrées/basses.","Descends en contrôle (≈2s).","Pousse stable, expire."],
        mistakes:["Épaules hautes","Rebond","Amplitude courte"] },

      { id:"A2-2", name:"Développé couché prise neutre (haltères)", icon:"dbbench", muscle:"Pectoraux + triceps", sets:3, reps:"10–12", work:45, rest:75,
        desc:"Souvent plus confortable pour les épaules.",
        steps:["Poignets neutres.","Coudes 30–45°.","Pousse sans perdre le gainage."],
        mistakes:["Coudes trop ouverts","Épaules qui montent","Vitesse"] },

      { id:"A2-3", name:"Écartés inclinés haltères", icon:"flydb", muscle:"Haut pectoraux", sets:3, reps:"15", work:45, rest:60,
        desc:"Isolation haut pec : contrôle + sensation.",
        steps:["Bras semi-fléchis.","Ouvre en arc.","Reviens en serrant."],
        mistakes:["Trop lourd","Bras tendus","Trop bas"] },

      { id:"A2-4", name:"Extension triceps au-dessus de la tête (haltère)", icon:"supersetB", muscle:"Triceps", sets:3, reps:"12", work:45, rest:60,
        desc:"Long chef du triceps (strict).",
        steps:["Coudes serrés.","Descends derrière la tête.","Remonte sans cambrer."],
        mistakes:["Coudes qui s’ouvrent","Cambrure","Trop lourd"] },

      { id:"A2-5", name:"Poulie — Triceps vertical prise serrée (pump)", icon:"cabletri", muscle:"Triceps", sets:2, reps:"15–20", work:45, rest:45,
        desc:"Finisher triceps : contrôle, amplitude complète.",
        steps:["Coudes collés.","Extension complète.","Retour contrôlé."],
        mistakes:["Balancer","Trop lourd","Amplitude courte"] },

      { id:"A2-6", name:"Dead bug", icon:"deadbug", muscle:"Gainage profond", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Anti-extension : bas du dos collé.",
        steps:["Bas du dos collé.","Allonge bras/jambe opposés.","Retour sans perdre le gainage."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  /* =====================
     B — DOS / BICEPS (2 variantes)
     ===================== */

  B1: {
    name: "Séance B1 — Dos / Biceps (Épaisseur)",
    warmup: [
      { id:"WU-B1-1", name:"Hip hinge", icon:"wu_hinge", todo:"2×10", seconds:60, desc:"Charnière hanche à vide, dos neutre." },
      { id:"WU-B1-2", name:"Row élastique", icon:"wu_rowband", todo:"2×15", seconds:60, desc:"Pause 1s, omoplates basses." },
      { id:"WU-B1-3", name:"Mobilité épaules", icon:"wu_shoulder", todo:"1 min", seconds:60, desc:"Rétractions + rotations douces." }
    ],
    cooldown: [
      { id:"CD-B1-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression dos/épaules, relâche la prise progressivement." },
      { id:"CD-B1-2", name:"Adho Mukha Svanasana — dorsaux + ischios", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"90 s", seconds:90, desc:"Allonge la colonne, pousse les hanches vers l’arrière." },
      { id:"CD-B1-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre l’avant de la hanche (utile après hinge/row)." },
      { id:"CD-B1-4", name:"Baddha Konasana — adducteurs/hanches", icon:"baddha_konasana_posture_du_papillon", todo:"75 s", seconds:75, desc:"Dos grandit, genoux vers le sol sans forcer." },
      { id:"CD-B1-5", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Stabilité + ouverture côté, respiration." },
      { id:"CD-B1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"B1-1", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios + fessiers", sets:4, reps:"8", work:45, rest:120,
        desc:"Arrière jambes + fessiers, dos neutre.",
        steps:["Hanches en arrière.","Haltères proches des jambes.","Remonte en serrant les fessiers."],
        mistakes:["Dos rond","Genoux trop pliés","Rebond"] },

      { id:"B1-2", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Grand dorsal", sets:4, reps:"10 / côté", work:45, rest:90,
        desc:"Tire vers la hanche, pause 1s.",
        steps:["Buste stable.","Coude vers la hanche.","Redescends lentement."],
        mistakes:["Rotation","Élan","Tirer vers l’épaule"] },

      { id:"B1-3", name:"Rowing landmine", icon:"landminerow", muscle:"Dos + gainage", sets:3, reps:"10", work:45, rest:90,
        desc:"Puissant et stable.",
        steps:["Hinge, dos neutre.","Tire vers sternum bas.","Pause 1s, contrôle."],
        mistakes:["Dos arrondi","Trapèzes","Bras seulement"] },

      { id:"B1-4", name:"Curl haltères alterné", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Strict, sans balancer.",
        steps:["Coudes fixes.","Monte + pause 1s.","Descends lentement."],
        mistakes:["Balancer","Coudes en avant","Descente rapide"] },

      { id:"B1-5", name:"Curl marteau", icon:"hammer", muscle:"Brachial + avant-bras", sets:3, reps:"12", work:45, rest:60,
        desc:"Renforce la prise.",
        steps:["Poignets neutres.","Monte sans élan.","Contrôle la descente."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"B1-6", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques", sets:3, reps:"40 s / côté", type:"time", seconds:40, work:40, rest:60,
        desc:"Stabilité du tronc.",
        steps:["Coude sous l’épaule.","Hanches hautes.","Respire."],
        mistakes:["Hanches qui s’affaissent","Apnée","Épaule mal placée"] }
    ]
  },

  B2: {
    name: "Séance B2 — Dos / Biceps (Contrôle)",
    warmup: [
      { id:"WU-B2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Ouverture thoracique + scapula." },
      { id:"WU-B2-2", name:"Row élastique tempo", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"2s tirage / 2s retour + pause 1s." },
      { id:"WU-B2-3", name:"Good morning léger", icon:"wu_hinge", todo:"1×10", seconds:45, desc:"Charnière hanche (léger)." }
    ],
    cooldown: [
      { id:"CD-B2-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression dos/épaules, relâche la prise progressivement." },
      { id:"CD-B2-2", name:"Adho Mukha Svanasana — dorsaux + ischios", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"90 s", seconds:90, desc:"Allonge la colonne, pousse les hanches vers l’arrière." },
      { id:"CD-B2-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre l’avant de la hanche (utile après hinge/row)." },
      { id:"CD-B2-4", name:"Baddha Konasana — adducteurs/hanches", icon:"baddha_konasana_posture_du_papillon", todo:"75 s", seconds:75, desc:"Dos grandit, genoux vers le sol sans forcer." },
      { id:"CD-B2-5", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Stabilité + ouverture côté, respiration." },
      { id:"CD-B2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"B2-1", name:"Rowing landmine (prise serrée)", icon:"landminerow", muscle:"Dos (épaisseur)", sets:4, reps:"8–10", work:45, rest:90,
        desc:"Tirage fort, gainage solide.",
        steps:["Dos neutre.","Tire vers sternum bas.","Pause 1s."],
        mistakes:["Dos rond","Élan","Trapèzes"] },

      { id:"B2-2", name:"Tirage élastique bras tendus", icon:"wu_bandpull", muscle:"Grand dorsal", sets:3, reps:"15", work:45, rest:60,
        desc:"Sensation dorsaux (vers les hanches).",
        steps:["Bras quasi tendus.","Tire vers les hanches.","Contrôle le retour."],
        mistakes:["Épaules hautes","Coudes trop pliés","Vitesse"] },

      { id:"B2-3", name:"Rowing haltères sur banc incliné", icon:"onearmrow", muscle:"Dos", sets:3, reps:"12", work:45, rest:75,
        desc:"Moins d’élan, plus d’isolation.",
        steps:["Poitrine sur banc incliné.","Tire coudes vers l’arrière.","Redescends lentement."],
        mistakes:["Élan","Épaules hautes","Amplitude courte"] },

      { id:"B2-4", name:"Curl Zottman", icon:"supersetA", muscle:"Biceps + avant-bras", sets:3, reps:"10", work:45, rest:60,
        desc:"Monte en supination, descends en pronation.",
        steps:["Monte supination.","Tourne en haut.","Descends pronation (contrôle)."],
        mistakes:["Élan","Rotation trop rapide","Trop lourd"] },

      { id:"B2-5", name:"Curl marteau (finisher)", icon:"hammer", muscle:"Brachial", sets:2, reps:"15", work:45, rest:45,
        desc:"Pump bras.",
        steps:["Neutre.","Strict.","Contrôle."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"B2-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre.",
        steps:["Bassin neutre.","Fessiers serrés.","Respire."],
        mistakes:["Bassin bas","Apnée","Épaules hautes"] }
    ]
  },

  /* =====================
     C — ÉPAULES (2 variantes)
     ===================== */

  C1: {
    name: "Séance C1 — Épaules (Force)",
    warmup: [
      { id:"WU-C1-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles + ouverture thoracique." },
      { id:"WU-C1-2", name:"Rotations externes élastique", icon:"wu_external", todo:"2×12", seconds:60, desc:"Coiffe : léger, contrôle." },
      { id:"WU-C1-3", name:"Élévations latérales légères", icon:"lateral", todo:"1×15", seconds:45, desc:"Très léger, juste la sensation." }
    ],
    cooldown: [
      { id:"CD-C1-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression épaules, relâche trapèzes." },
      { id:"CD-C1-2", name:"Adho Mukha Svanasana — épaules + dos", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge la colonne." },
      { id:"CD-C1-3", name:"Bhujangasana (cobra) — ouverture thoracique", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Ouvre la cage, épaules basses." },
      { id:"CD-C1-4", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Ouvre le flanc, stabilise l’épaule." },
      { id:"CD-C1-5", name:"Cocon — relâchement nuque/haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Respire, relâche les tensions." },
      { id:"CD-C1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"C1-1", name:"Développé militaire haltères", icon:"ohp", muscle:"Épaules + triceps", sets:4, reps:"6–8", work:45, rest:90,
        desc:"Presse verticale stricte.",
        steps:["Côtes rentrées.","Pousse au-dessus.","Redescends en contrôle."],
        mistakes:["Cambrure","Trop devant","Amplitude courte"] },

      { id:"C1-2", name:"Landmine press unilatéral", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"8 / côté", work:45, rest:90,
        desc:"Trajectoire naturelle, stable.",
        steps:["Gainage fort.","Pousse en diagonale.","Retour contrôlé."],
        mistakes:["Cambrure","Rotation","Épaule haute"] },

      { id:"C1-3", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:4, reps:"15", work:45, rest:60,
        desc:"Léger, strict.",
        steps:["Épaules basses.","Monte à hauteur d’épaule.","Descends lentement."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"C1-4", name:"Oiseau (reverse fly)", icon:"reversefly", muscle:"Arrière épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Équilibre le travail des pectoraux.",
        steps:["Buste penché.","Ouvre + pause 1s.","Contrôle."],
        mistakes:["Trapèzes","Élan","Dos arrondi"] },

      { id:"C1-5", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90,
        desc:"Posture, grip, gainage.",
        steps:["Épaules basses.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"C1-6", name:"Dead bug", icon:"deadbug", muscle:"Gainage profond", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Anti-extension.",
        steps:["Dos collé.","Allonge opposés.","Retour contrôlé."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  C2: {
    name: "Séance C2 — Épaules (Volume + stabilité)",
    warmup: [
      { id:"WU-C2-1", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Thorax + scapula." },
      { id:"WU-C2-2", name:"Rotations externes élastique", icon:"wu_external", todo:"2×12", seconds:60, desc:"Léger, contrôle." },
      { id:"WU-C2-3", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:60, desc:"Ouverture hanches, amplitude confortable." }
    ],
    cooldown: [
      { id:"CD-C2-1", name:"Dead Hang (suspension passive)", icon:"dead_hang_suspension_passive", todo:"60 s", seconds:60, desc:"Décompression épaules, relâche trapèzes." },
      { id:"CD-C2-2", name:"Adho Mukha Svanasana — épaules + dos", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Pousse le sol, allonge la colonne." },
      { id:"CD-C2-3", name:"Bhujangasana (cobra) — ouverture thoracique", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Ouvre la cage, épaules basses." },
      { id:"CD-C2-4", name:"Ardha Chandrasana — ouverture latérale", icon:"ardha_chandrasana_posture_de_la_demi_lune", todo:"45 s / côté", seconds:90, desc:"Ouvre le flanc, stabilise l’épaule." },
      { id:"CD-C2-5", name:"Cocon — relâchement nuque/haut du dos", icon:"cocon", todo:"60 s", seconds:60, desc:"Respire, relâche les tensions." },
      { id:"CD-C2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"C2-1", name:"Arnold press haltères", icon:"ohp", muscle:"Épaules", sets:4, reps:"10", work:45, rest:90,
        desc:"Plus de volume, contrôle.",
        steps:["Rotation en montant.","Gainage.","Redescends contrôlé."],
        mistakes:["Cambrure","Trop lourd","Amplitude courte"] },

      { id:"C2-2", name:"Élévations latérales tempo", icon:"lateral", muscle:"Deltoïde moyen", sets:3, reps:"20", work:45, rest:60,
        desc:"2s montée / 2s descente.",
        steps:["Strict.","Tempo lent.","Pas d’élan."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"C2-3", name:"Oiseau sur banc incliné", icon:"reversefly", muscle:"Arrière épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Isolation arrière deltoïde.",
        steps:["Poitrine sur banc.","Ouvre + pause.","Contrôle."],
        mistakes:["Élan","Trapèzes","Amplitude courte"] },

      { id:"C2-4", name:"Landmine press (finisher)", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"12", work:45, rest:75,
        desc:"Stable, bon finisher.",
        steps:["Gainage.","Pousse diagonale.","Retour contrôlé."],
        mistakes:["Cambrure","Épaule haute","Rotation"] },

      { id:"C2-5", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:90,
        desc:"Stabilité et posture.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"C2-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Gainage propre.",
        steps:["Bassin neutre.","Fessiers serrés.","Respire."],
        mistakes:["Bassin bas","Apnée","Épaules hautes"] }
    ]
  },

  /* =====================
     D — BRAS / MÉTABOLIQUE (2 variantes)
     ===================== */

  D1: {
    name: "Séance D1 — Bras (Lourd)",
    warmup: [
      { id:"WU-D1-1", name:"Curl léger", icon:"dbcurl", todo:"2×12", seconds:60, desc:"Très léger, activation biceps." },
      { id:"WU-D1-2", name:"Triceps léger (poulie)", icon:"cabletri", todo:"2×12", seconds:60, desc:"Prise serrée, amplitude complète." },
      { id:"WU-D1-3", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Prépare triceps/pecs." }
    ],
    cooldown: [
      { id:"CD-D1-1", name:"Adho Mukha Svanasana — full body", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Étire chaîne postérieure, épaules." },
      { id:"CD-D1-2", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Contrebalance les pompes / pressing." },
      { id:"CD-D1-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre hanches après métabolique." },
      { id:"CD-D1-4", name:"Baddha Virabhadrasana — ouverture hanches", icon:"baddha_virabhadrasana_posture_du_guerrier_humble", todo:"45 s / côté", seconds:90, desc:"Respire, épaules relâchées." },
      { id:"CD-D1-5", name:"Ardha Navasana — gainage doux", icon:"ardha_navasana_posture_du_demi_bateau", todo:"45 s", seconds:45, desc:"Gainage contrôlé, respiration." },
      { id:"CD-D1-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"D1-1", name:"Superset : Curl Zottman + Extension triceps au-dessus de la tête", muscle:"Bras", sets:4, reps:"10 + 10", work:45, rest:60,
        images:{ a:"supersetA", b:"supersetB" },
        desc:"Sans repos entre les deux exercices : curl puis extension triceps.",
        steps:["10 curls Zottman stricts.","Sans pause : 10 extensions triceps au-dessus de la tête.","Repos 60s."],
        mistakes:["Élan","Coudes qui bougent","Trop lourd"] },

      { id:"D1-2", name:"Curl marteau", icon:"hammer", muscle:"Brachial + avant-bras", sets:3, reps:"12", work:45, rest:60,
        desc:"Renforce la prise.",
        steps:["Poignets neutres.","Monte sans élan.","Contrôle la descente."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"D1-3", name:"Poulie — Triceps vertical prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Pause 1s en bas.",
        steps:["Coudes collés.","Extension complète.","Retour contrôlé."],
        mistakes:["Balancer","Coudes qui s’ouvrent","Trop lourd"] },

      { id:"D1-4", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90,
        desc:"Posture, grip, gainage.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"D1-5", name:"Élévations latérales (pump)", icon:"lateral", muscle:"Épaules", sets:2, reps:"20", work:45, rest:45,
        desc:"Finisher épaules.",
        steps:["Très léger.","Strict.","Contrôle."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"D1-6", name:"Dead bug", icon:"deadbug", muscle:"Tronc", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Stabilité.",
        steps:["Dos collé.","Allonge opposés.","Retour contrôlé."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  D2: {
    name: "Séance D2 — Bras + Métabolique",
    warmup: [
      { id:"WU-D2-1", name:"Jumping jacks", icon:"wu_jj", todo:"2 min", seconds:120, desc:"Monte progressivement le cardio." },
      { id:"WU-D2-2", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:60, desc:"Ouverture hanches, amplitude confortable." },
      { id:"WU-D2-3", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Activation haut du corps." }
    ],
    cooldown: [
      { id:"CD-D2-1", name:"Adho Mukha Svanasana — full body", icon:"adho_mukha_svanasana_posture_du_chien_tete_en_bas", todo:"75 s", seconds:75, desc:"Étire chaîne postérieure, épaules." },
      { id:"CD-D2-2", name:"Bhujangasana (cobra) — ouverture poitrine", icon:"bhujangasana_posture_du_cobra", todo:"45 s", seconds:45, desc:"Contrebalance les pompes / pressing." },
      { id:"CD-D2-3", name:"Anjaneyasana — fléchisseurs de hanche", icon:"anjaneyasana_posture_du_croissant_de_lune", todo:"60 s / côté", seconds:120, desc:"Ouvre hanches après métabolique." },
      { id:"CD-D2-4", name:"Baddha Virabhadrasana — ouverture hanches", icon:"baddha_virabhadrasana_posture_du_guerrier_humble", todo:"45 s / côté", seconds:90, desc:"Respire, épaules relâchées." },
      { id:"CD-D2-5", name:"Ardha Navasana — gainage doux", icon:"ardha_navasana_posture_du_demi_bateau", todo:"45 s", seconds:45, desc:"Gainage contrôlé, respiration." },
      { id:"CD-D2-6", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s. Relâche épaules et mâchoire." },
    ],
    items: [
      { id:"D2-1", name:"Kettlebell swing", icon:"swing", muscle:"Fessiers + cardio", sets:4, reps:"15", work:45, rest:75,
        desc:"Explosif hanche.",
        steps:["Hinge (charnière hanche).","Explose les hanches.","Contrôle le retour."],
        mistakes:["Squat au lieu de hinge","Dos rond","Lever avec les bras"] },

      { id:"D2-2", name:"Pompes pieds sur banc", icon:"pushup", muscle:"Pectoraux + triceps", sets:3, reps:"12–15", work:45, rest:90,
        desc:"Cardio + pecs/triceps.",
        steps:["Gainage.","Descends poitrine.","Pousse, expire."],
        mistakes:["Hanches basses","Amplitude courte","Coudes trop ouverts"] },

      { id:"D2-3", name:"Superset : Curl Zottman + Extension triceps au-dessus de la tête", muscle:"Bras", sets:3, reps:"12 + 12", work:45, rest:45,
        images:{ a:"supersetA", b:"supersetB" },
        desc:"Volume bras : sans élan, strict.",
        steps:["12 curls Zottman.","Sans pause : 12 extensions triceps.","Repos 45 s."],
        mistakes:["Élan","Coudes qui bougent","Trop lourd"] },

      { id:"D2-4", name:"Farmer walk", icon:"farmer", muscle:"Gainage + grip", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:90,
        desc:"Stabilité et posture.",
        steps:["Grandis-toi.","Marche lente.","Respire."],
        mistakes:["Se pencher","Pas rapides","Trapèzes"] },

      { id:"D2-5", name:"Gainage dynamique", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:60,
        desc:"Mountain climbers lents ou planche dynamique.",
        steps:["Rythme contrôlé.","Bassin stable.","Respire."],
        mistakes:["Bassin qui bouge","Trop vite","Apnée"] },

      { id:"D2-6", name:"Élévations latérales (finisher)", icon:"lateral", muscle:"Épaules", sets:2, reps:"20", work:45, rest:45,
        desc:"Finisher épaules (léger).",
        steps:["Léger.","Strict.","Contrôle."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] }
    ]
  }

  ,

  /* =====================
     RUN — ÉCHAUFFEMENT COURSE (7–10 km)
     ===================== */


  /* =====================
     HOCKEY — FORCE + PHYSIQUE (4 séances full body)
     Durée cible : 50–60 min
     ===================== */

  H1: {
    name: "Hockey H1 — Unilatéral + stabilité + bras",
    warmup: [
      { id:"WU-H1-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif." },
      { id:"WU-H1-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Ouvertures contrôlées." },
      { id:"WU-H1-3", name:"Abduction élastique", icon:"wu_band_abduction", todo:"2×12", seconds:60, desc:"Fessier moyen." },
      { id:"WU-H1-4", name:"Hip hinge", icon:"wu_hip_hinge", todo:"1×10", seconds:45, desc:"Charnière propre." }
    ],
    cooldown: [
      { id:"CD-H1-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Retour au calme." },
      { id:"CD-H1-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Thorax." },
      { id:"CD-H1-3", name:"Respiration", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme." }
    ],
    items: [
      { id:"H1-1", name:"Bulgarian split squat", icon:"bulgarian", muscle:"Jambes", sets:4, reps:"8 / jambe", work:45, rest:120 },
      { id:"H1-2", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios/fessiers", sets:3, reps:"8–10", work:45, rest:120 },
      { id:"H1-3", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Dos", sets:3, reps:"10 / côté", work:45, rest:90 },
      { id:"H1-4", name:"Landmine press unilatéral", icon:"landminepress", muscle:"Épaules", sets:3, reps:"8 / côté", work:45, rest:90 },
      { id:"H1-5", name:"Pallof press", icon:"pallof_press_band", muscle:"Core", sets:3, reps:"10 / côté", work:45, rest:60 },
      { id:"H1-6", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques", sets:3, reps:"40 s / côté", type:"time", seconds:40, work:40, rest:60 },
      { id:"H1-7", name:"Poulie triceps (bonus)", icon:"cabletri", muscle:"Triceps", sets:2, reps:"12–15", work:45, rest:45 },
      { id:"H1-8", name:"Curl marteau (bonus)", icon:"hammer", muscle:"Biceps", sets:2, reps:"12–15", work:45, rest:45 }
    ]
  },

  H2: {
    name: "Hockey H2 — Puissance hanche",
    warmup: [
      { id:"WU-H2-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif." },
      { id:"WU-H2-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Hanches libres." }
    ],
    cooldown: [
      { id:"CD-H2-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Relâche." },
      { id:"CD-H2-2", name:"Respiration", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme." }
    ],
    items: [
      { id:"H2-1", name:"Kettlebell swing", icon:"swing", muscle:"Puissance", sets:5, reps:"12–15", work:45, rest:75 },
      { id:"H2-2", name:"Hip thrust haltère", icon:"hip_thrust_db", muscle:"Fessiers", sets:4, reps:"8–10", work:45, rest:120 },
      { id:"H2-3", name:"Landmine squat", icon:"landminesquat", muscle:"Jambes", sets:3, reps:"8–10", work:45, rest:120 },
      { id:"H2-4", name:"Rowing landmine", icon:"landminerow", muscle:"Dos", sets:3, reps:"8–10", work:45, rest:90 },
      { id:"H2-5", name:"Farmer walk", icon:"farmer", muscle:"Grip", sets:3, reps:"50 s", type:"time", seconds:50, work:50, rest:90 },
      { id:"H2-6", name:"Hollow hold", icon:"hollow_hold", muscle:"Core", sets:3, reps:"35 s", type:"time", seconds:35, work:35, rest:60 }
    ]
  },

  H3: {
    name: "Hockey H3 — Dos + pecs/bras",
    warmup: [
      { id:"WU-H3-1", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"2 min", seconds:120, desc:"Scapula." },
      { id:"WU-H3-2", name:"Face pull", icon:"wu_facepull", todo:"2×12", seconds:60, desc:"Activation." }
    ],
    cooldown: [
      { id:"CD-H3-1", name:"Mobilité épaules", icon:"wu_shoulder_mob", todo:"90 s", seconds:90, desc:"Relâche." },
      { id:"CD-H3-2", name:"Respiration", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme." }
    ],
    items: [
      { id:"H3-1", name:"Row poitrine sur banc", icon:"chest_supported_row", muscle:"Dos", sets:4, reps:"10–12", work:45, rest:90 },
      { id:"H3-2", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux", sets:4, reps:"6–10", work:45, rest:120 },
      { id:"H3-3", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Dos", sets:3, reps:"10 / côté", work:45, rest:90 },
      { id:"H3-4", name:"Landmine press", icon:"landmine_press", muscle:"Épaules", sets:3, reps:"10", work:45, rest:90 },
      { id:"H3-5", name:"Superset bras", icon:"superset_arms", muscle:"Biceps + triceps", sets:3, reps:"12 + 12", work:45, rest:60 },
      { id:"H3-6", name:"Pallof press", icon:"pallof_press_band", muscle:"Core", sets:3, reps:"10 / côté", work:45, rest:60 }
    ]
  },

  H4: {
    name: "Hockey H4 — Athlétique + pecs",
    warmup: [
      { id:"WU-H4-1", name:"Cardio bas impact", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif." },
      { id:"WU-H4-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Appuis." }
    ],
    cooldown: [
      { id:"CD-H4-1", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"2 min", seconds:120, desc:"Retour au calme." },
      { id:"CD-H4-2", name:"Respiration", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme." }
    ],
    items: [
      { id:"H4-1", name:"Kettlebell swing", icon:"swing", muscle:"Puissance", sets:4, reps:"12–15", work:45, rest:75 },
      { id:"H4-2", name:"Row élastique assis", icon:"band_row_seated", muscle:"Dos", sets:4, reps:"15", work:45, rest:60 },
      { id:"H4-3", name:"Hip thrust pause", icon:"hip_thrust_pause", muscle:"Fessiers", sets:3, reps:"10", work:45, rest:90 },
      { id:"H4-4", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pec", sets:3, reps:"8–12", work:45, rest:90 },
      { id:"H4-5", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"45 s", type:"time", seconds:45, work:45, rest:60 },
      { id:"H4-6", name:"Poulie triceps (bonus)", icon:"cabletri", muscle:"Triceps", sets:2, reps:"12–15", work:45, rest:45 }
    ]
  },
},

// ===============================
// SUMMER intégré dans HOCKEY
// ===============================

H5: SU1,
H6: SU2,
H7: SU3,
H8: SU4,
H9: SU5,
H10: SU6,
H11: SU7,
H12: SU8,
  /* =====================
     SUMMER — HAUT DU CORPS + COURSE (8 séances)
     Objectif : esthétique haut du corps + transfert running
     ===================== */

  SU1: {
    name: "Summer SU1 — Push fondation",
    warmup: [
      { id:"WU-SU1-1", name:"Rameur léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Monte doucement la température corporelle." },
      { id:"WU-SU1-2", name:"Mobilité épaules", icon:"wu_shoulder", todo:"2 min", seconds:120, desc:"Cercles d’épaules + ouverture thoracique." },
      { id:"WU-SU1-3", name:"Band pull-aparts", icon:"wu_bandpull", todo:"2×15", seconds:60, desc:"Active le haut du dos, épaules basses." },
      { id:"WU-SU1-4", name:"Pompes faciles", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Activation progressive pectoraux/triceps." }
    ],
    cooldown: [
      { id:"CD-SU1-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Inspire 4s, expire 6s." },
      { id:"CD-SU1-2", name:"Mobilité épaules douce", icon:"wu_shoulder", todo:"75 s", seconds:75, desc:"Relâche les deltoïdes et le haut du dos." },
      { id:"CD-SU1-3", name:"Ouverture thoracique", icon:"wu_tspine_open", todo:"75 s", seconds:75, desc:"Respire lentement, cage ouverte." }
    ],
    items: [
      { id:"SU1-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:4, reps:"6–8", work:45, rest:120,
        desc:"Exercice principal lourd et propre.",
        steps:["Pieds ancrés au sol.","Omoplates serrées/basses.","Descends contrôlé, pousse fort en expirant."],
        mistakes:["Épaules hautes","Rebond","Amplitude incomplète"] },

      { id:"SU1-2", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pectoraux + épaules", sets:3, reps:"8–10", work:45, rest:90,
        desc:"Accent haut des pectoraux.",
        steps:["Inclinaison légère.","Descends en contrôle.","Pousse sans perdre le gainage."],
        mistakes:["Inclinaison trop forte","Cambrure excessive","Poignets cassés"] },

      { id:"SU1-3", name:"Landmine press", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"10", work:45, rest:90,
        desc:"Trajectoire naturelle, très bonne pour l’épaule.",
        steps:["Bassin gainé.","Pousse en diagonale.","Retour lent et contrôlé."],
        mistakes:["Rotation du buste","Épaule qui monte","Cambrure"] },

      { id:"SU1-4", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:3, reps:"15", work:45, rest:60,
        desc:"Travail strict pour la largeur d’épaules.",
        steps:["Monte à hauteur d’épaule.","Épaules basses.","Descends lentement."],
        mistakes:["Élan","Trapèzes dominants","Trop lourd"] },

      { id:"SU1-5", name:"Poulie triceps prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12", work:45, rest:60,
        desc:"Extension stricte, amplitude complète.",
        steps:["Coudes collés.","Pousse jusqu’en bas.","Retour sous contrôle."],
        mistakes:["Balancer","Coudes qui s’ouvrent","Charge trop lourde"] },

      { id:"SU1-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"45 s", type:"time", seconds:45, work:45, rest:60,
        desc:"Gainage simple et propre.",
        steps:["Coudes sous épaules.","Bassin neutre.","Respire sans apnée."],
        mistakes:["Bassin qui s’affaisse","Épaules hautes","Apnée"] }
    ]
  },

  SU2: {
    name: "Summer SU2 — Pull fondation",
    warmup: [
      { id:"WU-SU2-1", name:"Rameur léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Progressif, souffle facile." },
      { id:"WU-SU2-2", name:"Row élastique", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"Active les omoplates." },
      { id:"WU-SU2-3", name:"Rotations externes", icon:"wu_external", todo:"2×12", seconds:60, desc:"Prépare les épaules." },
      { id:"WU-SU2-4", name:"Hip hinge léger", icon:"wu_hinge", todo:"1×10", seconds:45, desc:"Place le dos pour les rowings." }
    ],
    cooldown: [
      { id:"CD-SU2-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Redescends progressivement." },
      { id:"CD-SU2-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Relâche haut du dos et cage thoracique." },
      { id:"CD-SU2-3", name:"Mobilité épaules douce", icon:"wu_shoulder", todo:"75 s", seconds:75, desc:"Amplitude confortable." }
    ],
    items: [
      { id:"SU2-1", name:"Rowing landmine", icon:"landminerow", muscle:"Dos", sets:4, reps:"8", work:45, rest:90,
        desc:"Épais du dos + gainage.",
        steps:["Hinge propre.","Tire vers le bas du sternum.","Pause 1s puis redescends."],
        mistakes:["Dos rond","Élan","Trapèzes dominants"] },

      { id:"SU2-2", name:"Row élastique assis", icon:"band_row_seated", muscle:"Dos", sets:3, reps:"15", work:45, rest:60,
        desc:"Volume propre pour le haut du dos.",
        steps:["Poitrine sortie.","Tire les coudes vers l’arrière.","Contrôle le retour."],
        mistakes:["Épaules hautes","Retour trop rapide","Buste qui balance"] },

      { id:"SU2-3", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Grand dorsal", sets:3, reps:"10 / côté", work:45, rest:90,
        desc:"Tire vers la hanche, pas vers l’épaule.",
        steps:["Buste stable.","Coude vers la hanche.","Pause 1s en haut."],
        mistakes:["Rotation du buste","Élan","Amplitude courte"] },

      { id:"SU2-4", name:"Reverse fly", icon:"reversefly", muscle:"Arrière d’épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Excellent pour équilibrer le travail de poussée.",
        steps:["Buste penché.","Ouvre les bras.","Contrôle tout le trajet."],
        mistakes:["Trapèzes","Élan","Dos arrondi"] },

      { id:"SU2-5", name:"Curl haltères alterné", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"12", work:45, rest:60,
        desc:"Strict et contrôlé.",
        steps:["Coudes fixes.","Monte sans élan.","Descends lentement."],
        mistakes:["Balancer","Épaules en avant","Trop lourd"] },

      { id:"SU2-6", name:"Dead bug", icon:"deadbug", muscle:"Gainage profond", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Très utile pour la stabilité en course.",
        steps:["Dos collé au sol.","Allonge bras/jambe opposés.","Reviens lentement."],
        mistakes:["Dos creusé","Trop vite","Apnée"] }
    ]
  },

  SU3: {
    name: "Summer SU3 — Push intensification",
    warmup: [
      { id:"WU-SU3-1", name:"Tapis de course léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Très facile." },
      { id:"WU-SU3-2", name:"Mobilité épaules", icon:"wu_shoulder", todo:"90 s", seconds:90, desc:"Prépare le pressing." },
      { id:"WU-SU3-3", name:"Band pull-aparts", icon:"wu_bandpull", todo:"2×15", seconds:60, desc:"Scapula actives." },
      { id:"WU-SU3-4", name:"Pompes tempo", icon:"wu_pushup", todo:"1×8", seconds:45, desc:"Descente lente, contrôle." }
    ],
    cooldown: [
      { id:"CD-SU3-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme progressif." },
      { id:"CD-SU3-2", name:"Ouverture thoracique", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Déverrouille la cage." },
      { id:"CD-SU3-3", name:"Mobilité épaules douce", icon:"wu_shoulder", todo:"60 s", seconds:60, desc:"Relâche sans forcer." }
    ],
    items: [
      { id:"SU3-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:5, reps:"5", work:45, rest:120,
        desc:"Bloc intensité, propre, sans aller à l’échec.",
        steps:["Installe les appuis.","Descends avec contrôle.","Pousse explosif mais propre."],
        mistakes:["Rebond","Perte de gainage","Charge mal maîtrisée"] },

      { id:"SU3-2", name:"Landmine press", icon:"landminepress", muscle:"Épaules + haut pec", sets:4, reps:"8", work:45, rest:90,
        desc:"Excellent complément lourd.",
        steps:["Gainage fort.","Pousse en diagonale.","Retour sous contrôle."],
        mistakes:["Rotation","Cambrure","Épaule haute"] },

      { id:"SU3-3", name:"Pompes pieds sur banc", icon:"pushup", muscle:"Pectoraux + triceps", sets:3, reps:"10–15", work:45, rest:75,
        desc:"Fin de bloc poussée, bon stress musculaire.",
        steps:["Corps gainé.","Poitrine vers le support.","Pousse sans casser la ligne."],
        mistakes:["Hanches basses","Amplitude courte","Coudes trop ouverts"] },

      { id:"SU3-4", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:4, reps:"12", work:45, rest:60,
        desc:"Travail propre, tension continue.",
        steps:["Léger.","Monte contrôlé.","Descente lente."],
        mistakes:["Élan","Trapèzes","Poignets cassés"] },

      { id:"SU3-5", name:"Poulie triceps prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Strict, sans balancer.",
        steps:["Coudes fixes.","Extension complète.","Retour lent."],
        mistakes:["Buste qui bouge","Épaules qui montent","Charge trop lourde"] },

      { id:"SU3-6", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques", sets:3, reps:"35 s / côté", type:"time", seconds:35, work:35, rest:60,
        desc:"Stabilité du bassin, utile pour la foulée.",
        steps:["Coude sous l’épaule.","Hanches hautes.","Respire régulièrement."],
        mistakes:["Hanches qui tombent","Apnée","Épaule mal placée"] }
    ]
  },

  SU4: {
    name: "Summer SU4 — Pull intensification",
    warmup: [
      { id:"WU-SU4-1", name:"Rameur léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Cardio progressif." },
      { id:"WU-SU4-2", name:"Row élastique", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"Active les dorsaux." },
      { id:"WU-SU4-3", name:"Face pull léger", icon:"wu_facepull", todo:"2×12", seconds:60, desc:"Prépare l’arrière d’épaule." },
      { id:"WU-SU4-4", name:"Hip hinge léger", icon:"wu_hinge", todo:"1×10", seconds:45, desc:"Prépare le gainage du rowing." }
    ],
    cooldown: [
      { id:"CD-SU4-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Calme le rythme." },
      { id:"CD-SU4-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"90 s", seconds:90, desc:"Décompresse le haut du dos." },
      { id:"CD-SU4-3", name:"Mobilité épaules", icon:"wu_shoulder", todo:"60 s", seconds:60, desc:"Amplitude douce." }
    ],
    items: [
      { id:"SU4-1", name:"Rowing landmine", icon:"landminerow", muscle:"Dos", sets:5, reps:"5", work:45, rest:105,
        desc:"Bloc force/épaisseur.",
        steps:["Dos neutre.","Tire fort vers le sternum bas.","Repose proprement."],
        mistakes:["Dos arrondi","Trajet sale","Élan excessif"] },

      { id:"SU4-2", name:"Row élastique assis", icon:"band_row_seated", muscle:"Dos", sets:4, reps:"12–15", work:45, rest:60,
        desc:"Volume sans trop fatiguer le bas du corps.",
        steps:["Poitrine haute.","Tire les coudes vers l’arrière.","Contrôle le retour."],
        mistakes:["Épaules hautes","Retour brusque","Buste qui recule"] },

      { id:"SU4-3", name:"Face pull", icon:"facepull_band", muscle:"Arrière épaules + posture", sets:3, reps:"15", work:45, rest:60,
        desc:"Excellent pour équilibrer le haut du corps.",
        steps:["Tire vers le visage.","Coudes ouverts.","Pause 1s."],
        mistakes:["Tirage trop bas","Élan","Charge trop lourde"] },

      { id:"SU4-4", name:"Curl marteau", icon:"hammer", muscle:"Brachial + avant-bras", sets:3, reps:"10–12", work:45, rest:60,
        desc:"Travail prise + bras.",
        steps:["Poignets neutres.","Monte sans balancer.","Descends lentement."],
        mistakes:["Élan","Amplitude courte","Trop lourd"] },

      { id:"SU4-5", name:"Farmer walk", icon:"farmer", muscle:"Grip + posture + gainage", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:90,
        desc:"Très bon transfert sur la posture globale.",
        steps:["Grandis-toi.","Marche lente.","Épaules basses."],
        mistakes:["Se pencher","Pas précipités","Trapèzes contractés"] },

      { id:"SU4-6", name:"Pallof press", icon:"pallof_press_band", muscle:"Core anti-rotation", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Très utile pour stabiliser le tronc en course.",
        steps:["Bassin fixe.","Pousse bras devant.","Résiste à la rotation."],
        mistakes:["Buste qui tourne","Épaules hautes","Charge trop forte"] }
    ]
  },

  SU5: {
    name: "Summer SU5 — Spécial course",
    warmup: [
      { id:"WU-SU5-1", name:"Rameur ou tapis léger", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180, desc:"Très progressif." },
      { id:"WU-SU5-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Ouvertures contrôlées." },
      { id:"WU-SU5-3", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:60, desc:"Prépare les appuis." },
      { id:"WU-SU5-4", name:"Hip hinge", icon:"wu_hip_hinge", todo:"1×10", seconds:45, desc:"Charnière hanche propre." }
    ],
    cooldown: [
      { id:"CD-SU5-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Récupération active." },
      { id:"CD-SU5-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"90 s", seconds:90, desc:"Relâche le bassin." },
      { id:"CD-SU5-3", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"60 s", seconds:60, desc:"Détends la chaîne postérieure haute." }
    ],
    items: [
      { id:"SU5-1", name:"Kettlebell swing", icon:"swing", muscle:"Puissance hanche", sets:4, reps:"15", work:45, rest:75,
        desc:"Explosivité utile pour la foulée.",
        steps:["Hinge, pas squat.","Explose avec les hanches.","Laisse redescendre sous contrôle."],
        mistakes:["Dos rond","Lever avec les bras","Squatter le mouvement"] },

      { id:"SU5-2", name:"Hip thrust haltère", icon:"hip_thrust_db", muscle:"Fessiers", sets:3, reps:"12", work:45, rest:90,
        desc:"Renforce l’extension de hanche.",
        steps:["Pieds stables.","Monte en serrant les fessiers.","Pause 1s en haut."],
        mistakes:["Hyperextension lombaire","Pieds mal placés","Descente trop rapide"] },

      { id:"SU5-3", name:"Soulevé de terre roumain haltères", icon:"rdl", muscle:"Ischios + fessiers", sets:3, reps:"10", work:45, rest:90,
        desc:"Chaîne postérieure solide sans trop de fatigue nerveuse.",
        steps:["Hanches en arrière.","Dos neutre.","Remonte en serrant les fessiers."],
        mistakes:["Dos rond","Trop de genoux","Rebond"] },

      { id:"SU5-4", name:"Fentes dynamiques", icon:"wu_lunge", muscle:"Appuis + mobilité", sets:3, reps:"10 / jambe", work:45, rest:60,
        desc:"Contrôle et mobilité utiles pour courir mieux.",
        steps:["Grandis-toi.","Pas propre.","Pousse fort au retour."],
        mistakes:["Genou qui rentre","Buste qui chute","Pas trop court"] },

      { id:"SU5-5", name:"Dead bug", icon:"deadbug", muscle:"Core", sets:3, reps:"10 / côté", work:45, rest:60,
        desc:"Stabilité lombo-pelvienne.",
        steps:["Dos collé.","Allonge opposés.","Respire."],
        mistakes:["Dos creusé","Vitesse","Apnée"] },

      { id:"SU5-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"45 s", type:"time", seconds:45, work:45, rest:60,
        desc:"Gainage simple, efficace.",
        steps:["Ligne droite.","Bassin neutre.","Respiration calme."],
        mistakes:["Bassin qui tombe","Épaules hautes","Apnée"] }
    ]
  },

  SU6: {
    name: "Summer SU6 — Haut du corps volume",
    warmup: [
      { id:"WU-SU6-1", name:"Rameur léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Mise en route." },
      { id:"WU-SU6-2", name:"Mobilité épaules", icon:"wu_shoulder", todo:"90 s", seconds:90, desc:"Épaules libres." },
      { id:"WU-SU6-3", name:"Row élastique", icon:"wu_rowband", todo:"2×12", seconds:60, desc:"Scapula actives." },
      { id:"WU-SU6-4", name:"Rotations externes", icon:"wu_external", todo:"2×12", seconds:60, desc:"Prépare le haut du corps." }
    ],
    cooldown: [
      { id:"CD-SU6-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Retour au calme." },
      { id:"CD-SU6-2", name:"Mobilité épaules douce", icon:"wu_shoulder", todo:"75 s", seconds:75, desc:"Relâche les tensions." },
      { id:"CD-SU6-3", name:"Ouverture thoracique", icon:"wu_tspine_open", todo:"75 s", seconds:75, desc:"Respiration ample." }
    ],
    items: [
      { id:"SU6-1", name:"Développé incliné haltères", icon:"inclinedb", muscle:"Haut pectoraux", sets:4, reps:"10–12", work:45, rest:90,
        desc:"Volume propre, sans aller à l’échec.",
        steps:["Inclinaison légère.","Contrôle la descente.","Pousse stable."],
        mistakes:["Trop lourd","Amplitude courte","Cambrure excessive"] },

      { id:"SU6-2", name:"Rowing unilatéral haltère", icon:"onearmrow", muscle:"Dos", sets:4, reps:"10–12 / côté", work:45, rest:75,
        desc:"Grand classique très efficace.",
        steps:["Buste fixe.","Tire vers la hanche.","Pause en haut."],
        mistakes:["Rotation","Élan","Trajet trop haut"] },

      { id:"SU6-3", name:"Curl haltères alterné", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Volume bras.",
        steps:["Coudes fixes.","Monte propre.","Descente contrôlée."],
        mistakes:["Balancer","Trop lourd","Épaules qui avancent"] },

      { id:"SU6-4", name:"Poulie triceps prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12–15", work:45, rest:60,
        desc:"Finition triceps.",
        steps:["Coudes collés.","Amplitude complète.","Retour lent."],
        mistakes:["Balancer","Charge excessive","Coudes mobiles"] },

      { id:"SU6-5", name:"Élévations latérales", icon:"lateral", muscle:"Deltoïde moyen", sets:4, reps:"15", work:45, rest:60,
        desc:"Épaules larges, léger et strict.",
        steps:["Monte à hauteur d’épaule.","Contrôle.","Épaules basses."],
        mistakes:["Trapèzes","Élan","Poignets cassés"] },

      { id:"SU6-6", name:"Reverse fly", icon:"reversefly", muscle:"Arrière d’épaules", sets:3, reps:"15", work:45, rest:60,
        desc:"Bon équilibre postural.",
        steps:["Buste penché.","Ouvre les bras.","Contrôle."],
        mistakes:["Trapèzes","Élan","Dos arrondi"] }
    ]
  },

  SU7: {
    name: "Summer SU7 — Haut du corps rapide",
    warmup: [
      { id:"WU-SU7-1", name:"Tapis ou rameur léger", icon:"wu_cardio_lowimpact", todo:"2 min", seconds:120, desc:"Rapide mais progressif." },
      { id:"WU-SU7-2", name:"Mobilité épaules", icon:"wu_shoulder", todo:"60 s", seconds:60, desc:"Prépare le haut du corps." },
      { id:"WU-SU7-3", name:"Band pull-aparts", icon:"wu_bandpull", todo:"1×20", seconds:45, desc:"Active le haut du dos." }
    ],
    cooldown: [
      { id:"CD-SU7-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"90 s", seconds:90, desc:"Fais redescendre le rythme." },
      { id:"CD-SU7-2", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"60 s", seconds:60, desc:"Déverrouille le thorax." }
    ],
    items: [
      { id:"SU7-1", name:"Développé couché haltères", icon:"dbbench", muscle:"Pectoraux + triceps", sets:3, reps:"8", work:45, rest:90,
        desc:"Version courte et efficace.",
        steps:["Appuis solides.","Descente contrôlée.","Pousse en expirant."],
        mistakes:["Rebond","Épaules hautes","Perte de trajectoire"] },

      { id:"SU7-2", name:"Rowing landmine", icon:"landminerow", muscle:"Dos", sets:3, reps:"8", work:45, rest:90,
        desc:"Complément dos rapide.",
        steps:["Dos neutre.","Tire fort.","Contrôle le retour."],
        mistakes:["Élan","Dos rond","Trapèzes"] },

      { id:"SU7-3", name:"Landmine press", icon:"landminepress", muscle:"Épaules", sets:3, reps:"10", work:45, rest:75,
        desc:"Simple, efficace, stable.",
        steps:["Gainage fort.","Pousse en diagonale.","Retour lent."],
        mistakes:["Rotation","Cambrure","Épaule haute"] },

      { id:"SU7-4", name:"Curl haltères alterné", icon:"dbcurl", muscle:"Biceps", sets:3, reps:"12", work:45, rest:45,
        desc:"Bras en fin de séance courte.",
        steps:["Strict.","Monte sans élan.","Contrôle."],
        mistakes:["Balancer","Trop lourd","Amplitude courte"] },

      { id:"SU7-5", name:"Poulie triceps prise serrée", icon:"cabletri", muscle:"Triceps", sets:3, reps:"12", work:45, rest:45,
        desc:"Finition rapide.",
        steps:["Coudes fixes.","Extension complète.","Retour contrôlé."],
        mistakes:["Balancer","Épaules hautes","Charge trop lourde"] },

      { id:"SU7-6", name:"Planche", icon:"plank", muscle:"Tronc", sets:3, reps:"40 s", type:"time", seconds:40, work:40, rest:45,
        desc:"Finir propre sans allonger la séance.",
        steps:["Ligne droite.","Bassin neutre.","Respire."],
        mistakes:["Bassin qui s’effondre","Apnée","Nuque cassée"] }
    ]
  },

  SU8: {
    name: "Summer SU8 — Full body runner",
    warmup: [
      { id:"WU-SU8-1", name:"Tapis de course léger", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180, desc:"Montée progressive." },
      { id:"WU-SU8-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"75 s", seconds:75, desc:"Ouvre les hanches." },
      { id:"WU-SU8-3", name:"Mobilité épaules", icon:"wu_shoulder", todo:"60 s", seconds:60, desc:"Prépare la poussée." },
      { id:"WU-SU8-4", name:"Hip hinge léger", icon:"wu_hip_hinge", todo:"1×10", seconds:45, desc:"Place bien la chaîne postérieure." }
    ],
    cooldown: [
      { id:"CD-SU8-1", name:"Respiration / relâchement", icon:"wu_breath_core", todo:"2 min", seconds:120, desc:"Retour au calme complet." },
      { id:"CD-SU8-2", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"75 s", seconds:75, desc:"Relâche les appuis." },
      { id:"CD-SU8-3", name:"Ouverture T-spine", icon:"wu_tspine_open", todo:"60 s", seconds:60, desc:"Respiration ample." }
    ],
    items: [
      { id:"SU8-1", name:"Landmine squat", icon:"landminesquat", muscle:"Jambes + tronc", sets:3, reps:"10", work:45, rest:90,
        desc:"Version jambe modérée, sans te cramer pour la course.",
        steps:["Buste gainé.","Descends propre.","Pousse fort au sol."],
        mistakes:["Genoux qui rentrent","Dos rond","Trop lourd"] },

      { id:"SU8-2", name:"Landmine press", icon:"landminepress", muscle:"Épaules + haut pec", sets:3, reps:"10", work:45, rest:75,
        desc:"Pressing stable.",
        steps:["Pousse en diagonale.","Reste gainé.","Retour contrôlé."],
        mistakes:["Cambrure","Rotation","Épaule qui monte"] },

      { id:"SU8-3", name:"Rowing landmine", icon:"landminerow", muscle:"Dos", sets:3, reps:"10", work:45, rest:75,
        desc:"Complément dos équilibré.",
        steps:["Hinge propre.","Tire vers le torse.","Pause 1s."],
        mistakes:["Élan","Dos rond","Trapèzes dominants"] },

      { id:"SU8-4", name:"Kettlebell swing", icon:"swing", muscle:"Puissance hanche", sets:3, reps:"15", work:45, rest:75,
        desc:"Transfert athlétique utile.",
        steps:["Hinge.","Explose les hanches.","Contrôle le retour."],
        mistakes:["Squat","Bras dominants","Dos rond"] },

      { id:"SU8-5", name:"Gainage latéral", icon:"sideplank", muscle:"Obliques", sets:3, reps:"30 s / côté", type:"time", seconds:30, work:30, rest:45,
        desc:"Stabilité latérale utile en course.",
        steps:["Coude sous épaule.","Hanches hautes.","Respire."],
        mistakes:["Hanches basses","Apnée","Épaule mal placée"] },

      { id:"SU8-6", name:"Hollow hold", icon:"hollow_hold", muscle:"Core", sets:3, reps:"30 s", type:"time", seconds:30, work:30, rest:45,
        desc:"Travail de verrouillage global du tronc.",
        steps:["Bas du dos collé.","Bras/jambes tendus selon niveau.","Respire court."],
        mistakes:["Dos creusé","Trop ambitieux","Blocage respiratoire"] }
    ]
  },



  RUN_WU: {
    name: "Échauffement course — 7 à 10 km",
    warmup: [
      { id:"WU-RUN-1", name:"Marche active / footing léger", icon:"wu_cardio_lowimpact", todo:"3 min", seconds:180, desc:"Démarre très facile, augmente progressivement la cadence." },
      { id:"WU-RUN-2", name:"Mobilité chevilles", icon:"wu_hip_mobility", todo:"1 min", seconds:60, desc:"Cercles de chevilles + flexions/ extensions (amplitude confortable)." },
      { id:"WU-RUN-3", name:"Mobilité hanches", icon:"wu_hip_mobility", todo:"1 min", seconds:60, desc:"Ouvertures de hanches, rotations, sans à-coups." },
      { id:"WU-RUN-4", name:"Fentes dynamiques", icon:"wu_lunge", todo:"1×10 / jambe", seconds:80, desc:"Pas contrôlé, buste haut, ouverture hanches." },
      { id:"WU-RUN-5", name:"Montées de genoux", icon:"wu_cardio_lowimpact", todo:"45 s", seconds:45, desc:"Rythme progressif, posture haute." },
      { id:"WU-RUN-6", name:"Talons-fesses", icon:"wu_cardio_lowimpact", todo:"45 s", seconds:45, desc:"Cadence légère, sans tirer sur le genou." },
      { id:"WU-RUN-7", name:"Skippings légers", icon:"wu_cardio_lowimpact", todo:"30 s", seconds:30, desc:"Petites foulées, coordination, sans forcer." },
      { id:"WU-RUN-8", name:"Accélérations progressives", icon:"wu_cardio_lowimpact", todo:"3×20 s", seconds:60, desc:"3 accélérations de 20s : 60% → 75% → 85%, récup marche entre." }
    ],
    items: []
  }

};

// Expose aussi la variable globale `SESSIONS` pour compatibilité
// (si une ancienne version d'index.html fait Object.keys(SESSIONS))
var SESSIONS = window.SESSIONS;