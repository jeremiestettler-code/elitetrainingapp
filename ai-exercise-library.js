/* =========================
   AI Exercise Library
   Source dédiée à la génération IA
   - indépendante des Trending Workouts
   - éditable progressivement depuis le fichier Excel de référence
========================= */

window.AI_EXERCISE_LIBRARY = {
  warmup: [
    {
      id: "wu_breath_core",
      type: "warmup",
      name: "Respiration + gainage léger",
      icon: "wu_breath_core",
      seconds: 60,
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "breathing",
      tags: ["warmup", "core", "breathing", "activation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Respiration contrôlée pour engager le tronc avant la séance.",
      todo: "Respire profondément, verrouille légèrement les abdos et garde les côtes basses."
    },
    {
      id: "wu_hip_mobility",
      type: "warmup",
      name: "Mobilité hanches",
      icon: "wu_hip_mobility",
      seconds: 60,
      muscle: "Hanches",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["warmup", "mobility", "hips"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Mobilité douce des hanches pour préparer les mouvements bas du corps.",
      todo: "Cherche de l’amplitude sans douleur et garde un rythme fluide."
    }
  ],

  items: [
    {
      id: "dbbench",
      type: "items",
      name: "Développé couché haltères",
      icon: "dbbench",
      muscle: "Pectoraux + triceps",
      equipment: ["dumbbell", "bench"],
      difficulty: "intermediate",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "upper_body", "strength", "mass"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "6–10",
      work: 45,
      rest: 120,
      desc: "Mouvement de poussée principal pour développer les pectoraux et les triceps.",
      steps: [
        "Pieds bien ancrés au sol.",
        "Omoplates serrées et abaissées sur le banc.",
        "Descends les haltères avec contrôle puis pousse fort vers le haut."
      ],
      mistakes: [
        "Épaules qui remontent",
        "Amplitude trop courte",
        "Perte de contrôle en bas"
      ]
    },
    {
      id: "onearmrow",
      type: "items",
      name: "Rowing unilatéral haltère",
      icon: "onearmrow",
      muscle: "Dos + grand dorsal",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "lats", "upper_body", "unilateral", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10 / côté",
      work: 45,
      rest: 75,
      desc: "Tirage unilatéral pour développer le dos et améliorer le contrôle scapulaire.",
      steps: [
        "Garde le buste stable.",
        "Tire le coude vers la hanche.",
        "Redescends lentement sans tourner le torse."
      ],
      mistakes: [
        "Rotation du buste",
        "Élan excessif",
        "Tirer trop vers l’épaule"
      ]
    },
    {
      id: "rdl",
      type: "items",
      name: "Soulevé de terre roumain haltères",
      icon: "rdl",
      muscle: "Ischios + fessiers",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "hip_hinge",
      tags: ["hinge", "glutes", "hamstrings", "posterior_chain", "strength", "mass"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–10",
      work: 45,
      rest: 90,
      desc: "Charnière de hanches pour cibler la chaîne postérieure.",
      steps: [
        "Hanches vers l’arrière.",
        "Dos neutre pendant toute la descente.",
        "Remonte en poussant les hanches vers l’avant."
      ],
      mistakes: [
        "Dos arrondi",
        "Barre/haltères trop loin du corps",
        "Trop plier les genoux"
      ]
    },
    {
      id: "ohp",
      type: "items",
      name: "Développé militaire haltères",
      icon: "ohp",
      muscle: "Épaules + triceps",
      equipment: ["dumbbell"],
      difficulty: "intermediate",
      pattern: "vertical_push",
      tags: ["push", "shoulders", "triceps", "upper_body", "overhead", "strength"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "6–10",
      work: 45,
      rest: 90,
      desc: "Poussée verticale pour développer les épaules et les triceps.",
      steps: [
        "Gainage fort.",
        "Pousse au-dessus de la tête sans cambrer.",
        "Redescends sous contrôle."
      ],
      mistakes: [
        "Cambrure excessive",
        "Épaules haussées",
        "Perte de trajectoire"
      ]
    },
    {
      id: "deadbug",
      type: "items",
      name: "Dead bug",
      icon: "deadbug",
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_extension",
      tags: ["core", "abs", "deep_core", "anti_extension", "coordination", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "10 / côté",
      work: 40,
      rest: 45,
      desc: "Exercice de gainage profond pour stabiliser le tronc.",
      steps: [
        "Plaque le bas du dos au sol.",
        "Allonge bras et jambe opposés.",
        "Reviens sans perdre la tension abdominale."
      ],
      mistakes: [
        "Dos creusé",
        "Mouvement trop rapide",
        "Perte de contrôle respiratoire"
      ]
    }
  ],

  cooldown: [
    {
      id: "cd_breathing_reset",
      type: "cooldown",
      name: "Retour au calme respiratoire",
      icon: "wu_breath_core",
      seconds: 90,
      muscle: "Respiration",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "breathing",
      tags: ["cooldown", "breathing", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme pour faire redescendre le rythme.",
      todo: "Respire lentement par le nez, relâche les épaules et calme le rythme."
    }
  ],

  byId: {}
};

/* index rapide */
(function buildAIExerciseLibraryIndex(){
  const lib = window.AI_EXERCISE_LIBRARY;
  const all = [
    ...(lib.warmup || []),
    ...(lib.items || []),
    ...(lib.cooldown || [])
  ];

  lib.byId = {};
  all.forEach(e => {
    if(e && e.id) lib.byId[e.id] = e;
  });
})();