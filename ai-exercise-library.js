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
      todo: "Respire profondément, garde les côtes basses et active légèrement les abdos."
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
      desc: "Mobilité douce des hanches pour préparer le bas du corps.",
      todo: "Cherche de l’amplitude sans douleur et garde un rythme fluide."
    },
    {
      id: "wu_band_pullapart",
      type: "warmup",
      name: "Band pull-apart",
      icon: "wu_band_pullapart",
      seconds: 45,
      muscle: "Haut du dos + épaules",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["warmup", "upper_back", "shoulders", "activation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Activation du haut du dos et des épaules avant les tirages et poussées.",
      todo: "Écarte l’élastique sans hausser les épaules et contrôle le retour."
    },
    {
      id: "wu_hip_hinge",
      type: "warmup",
      name: "Hip hinge patterning",
      icon: "wu_hip_hinge",
      seconds: 45,
      muscle: "Chaîne postérieure",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "hip_hinge",
      tags: ["warmup", "hinge", "patterning"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Préparation du pattern de charnière de hanches.",
      todo: "Pousse les hanches en arrière, garde le dos neutre et reviens sous contrôle."
    },
    {
      id: "wu_glute_bridge",
      type: "warmup",
      name: "Glute bridge léger",
      icon: "wu_glute_bridge",
      seconds: 45,
      muscle: "Fessiers",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["warmup", "glutes", "activation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Activation des fessiers avant les mouvements bas du corps.",
      todo: "Pousse dans les talons et serre les fessiers en haut sans cambrer."
    },
    {
      id: "wu_dead_bug_light",
      type: "warmup",
      name: "Dead bug léger",
      icon: "wu_dead_bug_light",
      seconds: 45,
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_extension",
      tags: ["warmup", "core", "activation", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Activation du tronc avant la séance.",
      todo: "Garde le bas du dos collé au sol et bouge lentement."
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
      id: "inclinedb",
      type: "items",
      name: "Développé incliné haltères",
      icon: "inclinedb",
      muscle: "Haut des pectoraux + épaules",
      equipment: ["dumbbell", "bench"],
      difficulty: "intermediate",
      pattern: "incline_horizontal_push",
      tags: ["push", "upper_chest", "chest", "shoulders", "upper_body", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 90,
      desc: "Variante inclinée pour cibler le haut des pectoraux.",
      steps: [
        "Règle le banc en légère inclinaison.",
        "Descends en contrôle vers le haut des pectoraux.",
        "Pousse sans perdre l’alignement des épaules."
      ],
      mistakes: [
        "Inclinaison trop forte",
        "Épaules haussées",
        "Trajectoire instable"
      ]
    },
    {
      id: "pushup",
      type: "items",
      name: "Pompes",
      icon: "pushup",
      muscle: "Pectoraux + triceps + core",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "upper_body", "bodyweight"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "8–15",
      work: 40,
      rest: 60,
      desc: "Exercice poids du corps pour le haut du corps et le gainage.",
      steps: [
        "Garde le corps gainé en ligne droite.",
        "Descends poitrine en avant avec contrôle.",
        "Pousse fort sans casser le bassin."
      ],
      mistakes: [
        "Bassin qui s’affaisse",
        "Amplitude partielle",
        "Coudes mal contrôlés"
      ]
    },
    {
      id: "incline_pushup_bench",
      type: "items",
      name: "Pompes inclinées sur banc",
      icon: "incline_pushup_bench",
      muscle: "Pectoraux + triceps",
      equipment: ["bodyweight", "bench"],
      difficulty: "beginner",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "bodyweight", "beginner"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 40,
      rest: 60,
      desc: "Variante plus accessible des pompes.",
      steps: [
        "Mains sur le banc, corps gainé.",
        "Descends poitrine vers le support.",
        "Repousse en gardant l’alignement."
      ],
      mistakes: [
        "Bassin cassé",
        "Épaules qui remontent",
        "Amplitude écourtée"
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
      id: "chest_supported_row",
      type: "items",
      name: "Row poitrine sur banc",
      icon: "chest_supported_row",
      muscle: "Dos + haut du dos",
      equipment: ["dumbbell", "bench"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_back", "lats", "upper_body", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "10–12",
      work: 45,
      rest: 75,
      desc: "Rowing guidé par le banc pour mieux isoler le dos.",
      steps: [
        "Poitrine bien calée sur le banc.",
        "Tire les coudes vers l’arrière.",
        "Redescends lentement sans relâcher d’un coup."
      ],
      mistakes: [
        "Épaules qui montent",
        "Élan avec le buste",
        "Amplitude trop courte"
      ]
    },
    {
      id: "landminerow",
      type: "items",
      name: "Rowing landmine",
      icon: "landminerow",
      muscle: "Dos + gainage",
      equipment: ["barbell", "landmine"],
      difficulty: "intermediate",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_back", "strength", "compound"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–10",
      work: 45,
      rest: 90,
      desc: "Tirage lourd pour l’épaisseur du dos.",
      steps: [
        "Place une charnière de hanches solide.",
        "Tire vers le bas du sternum.",
        "Marque un léger temps en haut puis redescends sous contrôle."
      ],
      mistakes: [
        "Dos arrondi",
        "Élan excessif",
        "Trapèzes dominants"
      ]
    },
    {
      id: "band_row_seated",
      type: "items",
      name: "Tirage assis élastique strict",
      icon: "band_row_seated",
      muscle: "Dos",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_body", "band", "beginner", "home_workout"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "15–20",
      work: 35,
      rest: 45,
      desc: "Variante accessible à l’élastique pour le dos à domicile.",
      steps: [
        "Assieds-toi grand et stable.",
        "Ramène les coudes vers l’arrière.",
        "Freine complètement le retour."
      ],
      mistakes: [
        "Dos arrondi",
        "Retour lâché",
        "Épaules qui montent"
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
        "Charge trop loin du corps",
        "Trop plier les genoux"
      ]
    },
    {
      id: "swing",
      type: "items",
      name: "Kettlebell swing",
      icon: "swing",
      muscle: "Chaîne postérieure + puissance",
      equipment: ["kettlebell"],
      difficulty: "intermediate",
      pattern: "hip_hinge",
      tags: ["hinge", "glutes", "hamstrings", "power", "conditioning", "athletic"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 5,
      reps: "12–15",
      work: 40,
      rest: 75,
      desc: "Exercice explosif de hanches pour puissance et conditioning.",
      steps: [
        "Charge les hanches en arrière.",
        "Projette les hanches vers l’avant avec explosivité.",
        "Laisse redescendre sous contrôle sans tirer avec les bras."
      ],
      mistakes: [
        "Squatter au lieu de hinger",
        "Monter avec les bras",
        "Dos arrondi"
      ]
    },
    {
      id: "goblet",
      type: "items",
      name: "Goblet squat",
      icon: "goblet",
      muscle: "Quadriceps + fessiers",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "squat",
      tags: ["legs", "quads", "glutes", "squat", "strength", "beginner"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 75,
      desc: "Squat stable et accessible avec charge devant.",
      steps: [
        "Tiens la charge proche du torse.",
        "Descends en gardant la poitrine haute.",
        "Repousse le sol pour remonter."
      ],
      mistakes: [
        "Talons qui décollent",
        "Genoux qui rentrent",
        "Buste qui s’effondre"
      ]
    },
    {
      id: "bulgarian",
      type: "items",
      name: "Bulgarian split squat",
      icon: "bulgarian",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "dumbbell", "bench"],
      difficulty: "intermediate",
      pattern: "lunge",
      tags: ["legs", "glutes", "quads", "unilateral", "strength", "hypertrophy"],
      kneeImpact: "high",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–10 / côté",
      work: 45,
      rest: 75,
      desc: "Exercice unilatéral très efficace pour jambes et fessiers.",
      steps: [
        "Place le pied arrière sur le support.",
        "Descends droit en gardant le genou avant dans l’axe.",
        "Remonte en poussant fort dans le sol."
      ],
      mistakes: [
        "Perte d’équilibre",
        "Genou qui rentre",
        "Buste trop incliné"
      ]
    },
    {
      id: "hip_thrust_db",
      type: "items",
      name: "Hip thrust haltère",
      icon: "hip_thrust_db",
      muscle: "Fessiers",
      equipment: ["dumbbell", "bench"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["glutes", "legs", "hinge", "strength", "mass"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 90,
      desc: "Extension de hanches avec accent fessiers.",
      steps: [
        "Haut du dos sur le banc.",
        "Pousse dans les talons.",
        "Verrouille en haut sans cambrer."
      ],
      mistakes: [
        "Cambrure excessive",
        "Pieds mal placés",
        "Descente trop rapide"
      ]
    },
    {
      id: "glute_bridge_db",
      type: "items",
      name: "Glute bridge haltère contrôlé",
      icon: "glute_bridge_db",
      muscle: "Fessiers",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["glutes", "legs", "hinge", "beginner", "knee_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "12–15",
      work: 35,
      rest: 50,
      desc: "Version contrôlée du glute bridge pour les fessiers.",
      steps: [
        "Place la charge stable sur le bassin.",
        "Pousse dans les talons.",
        "Serre les fessiers en haut sans cambrer."
      ],
      mistakes: [
        "Charge instable",
        "Amplitude partielle",
        "Descente trop rapide"
      ]
    },
    {
      id: "hip_thrust_pause",
      type: "items",
      name: "Hip thrust avec pause",
      icon: "hip_thrust_pause",
      muscle: "Fessiers",
      equipment: ["bodyweight", "dumbbell", "bench"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["glutes", "legs", "tempo", "hinge", "pause", "knee_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "10–12",
      work: 40,
      rest: 60,
      desc: "Hip thrust avec pause en haut pour accentuer le travail des fessiers.",
      steps: [
        "Monte en poussant dans les talons.",
        "Marque une pause nette en haut.",
        "Redescends lentement sous contrôle."
      ],
      mistakes: [
        "Pause absente",
        "Cambrure excessive",
        "Descente précipitée"
      ]
    },
    {
      id: "band_abduction_standing",
      type: "items",
      name: "Abduction debout élastique",
      icon: "band_abduction_standing",
      muscle: "Fessiers moyens",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "hip_abduction",
      tags: ["glutes", "abductors", "activation", "band", "knee_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "15–20 / côté",
      work: 35,
      rest: 40,
      desc: "Exercice ciblé pour le moyen fessier et la stabilité du bassin.",
      steps: [
        "Reste gainé et stable.",
        "Écarte la jambe contre la tension de l’élastique.",
        "Reviens lentement sans perdre le contrôle."
      ],
      mistakes: [
        "Buste qui se balance",
        "Amplitude forcée",
        "Retour trop rapide"
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
      id: "db_ohp_seated",
      type: "items",
      name: "Développé militaire assis haltères",
      icon: "db_ohp_seated",
      muscle: "Épaules + triceps",
      equipment: ["dumbbell", "bench"],
      difficulty: "beginner",
      pattern: "vertical_push",
      tags: ["push", "shoulders", "triceps", "upper_body", "overhead", "stable"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–12",
      work: 40,
      rest: 60,
      desc: "Variante assise plus stable pour développer les épaules.",
      steps: [
        "Dos bien calé sur le banc.",
        "Pousse verticalement en gardant le tronc gainé.",
        "Redescends sous contrôle complet."
      ],
      mistakes: [
        "Cambrure",
        "Amplitude incomplète",
        "Épaules haussées"
      ]
    },
    {
      id: "landmine_press",
      type: "items",
      name: "Landmine press",
      icon: "landmine_press",
      muscle: "Épaules + haut des pectoraux",
      equipment: ["barbell", "landmine"],
      difficulty: "beginner",
      pattern: "angled_push",
      tags: ["push", "shoulders", "upper_chest", "upper_body", "joint_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–12",
      work: 45,
      rest: 75,
      desc: "Poussée diagonale souvent plus confortable pour l’épaule.",
      steps: [
        "Gainage fort.",
        "Pousse en diagonale jusqu’à extension.",
        "Ramène sous contrôle sans hausser l’épaule."
      ],
      mistakes: [
        "Cambrure excessive",
        "Épaule qui monte",
        "Perte de stabilité"
      ]
    },
    {
      id: "lateral_raise",
      type: "items",
      name: "Élévations latérales",
      icon: "lateral_raise",
      muscle: "Épaules latérales",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "shoulder_abduction",
      tags: ["shoulders", "side_delts", "isolation", "upper_body", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 40,
      rest: 60,
      desc: "Isolation des deltoïdes latéraux.",
      steps: [
        "Lève les bras sur les côtés avec léger coude fléchi.",
        "Monte jusqu’à hauteur d’épaule.",
        "Redescends lentement."
      ],
      mistakes: [
        "Élan du buste",
        "Trapèzes dominants",
        "Charge trop lourde"
      ]
    },
    {
      id: "lateral",
      type: "items",
      name: "Élévations latérales strictes",
      icon: "lateral",
      muscle: "Épaules latérales",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "shoulder_abduction",
      tags: ["shoulders", "side_delts", "isolation", "upper_body", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–20",
      work: 35,
      rest: 50,
      desc: "Isolation stricte des deltoïdes latéraux avec charge légère à modérée.",
      steps: [
        "Lève les bras sur les côtés avec contrôle.",
        "Monte jusqu’à hauteur d’épaule.",
        "Redescends lentement sans relâcher d’un coup."
      ],
      mistakes: [
        "Élan du buste",
        "Trapèzes dominants",
        "Amplitude désordonnée"
      ]
    },
    {
      id: "reversefly",
      type: "items",
      name: "Reverse fly",
      icon: "reversefly",
      muscle: "Arrière d’épaules + haut du dos",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "horizontal_abduction",
      tags: ["pull", "rear_delts", "upper_back", "posture", "isolation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 40,
      rest: 60,
      desc: "Exercice utile pour l’arrière d’épaules et la posture.",
      steps: [
        "Penche légèrement le buste.",
        "Ouvre les bras sur les côtés.",
        "Contrôle complètement la descente."
      ],
      mistakes: [
        "Élan",
        "Épaules hautes",
        "Amplitude mal contrôlée"
      ]
    },
    {
      id: "dbcurl",
      type: "items",
      name: "Curl haltères",
      icon: "dbcurl",
      muscle: "Biceps",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "elbow_flexion",
      tags: ["arms", "biceps", "isolation", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 40,
      rest: 60,
      desc: "Curl classique pour cibler les biceps.",
      steps: [
        "Garde les coudes proches du corps.",
        "Monte sans élan.",
        "Redescends lentement."
      ],
      mistakes: [
        "Balancer le buste",
        "Coudes qui avancent trop",
        "Descente trop rapide"
      ]
    },
    {
      id: "hammer_curl",
      type: "items",
      name: "Curl marteau",
      icon: "hammer_curl",
      muscle: "Biceps + avant-bras",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "elbow_flexion",
      tags: ["arms", "biceps", "forearms", "brachialis", "grip", "isolation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 40,
      rest: 60,
      desc: "Variante neutre pour biceps et avant-bras.",
      steps: [
        "Prise neutre tout au long du mouvement.",
        "Monte sans élan.",
        "Contrôle la descente."
      ],
      mistakes: [
        "Élan du buste",
        "Charge trop lourde",
        "Amplitude partielle"
      ]
    },
    {
      id: "hammer",
      type: "items",
      name: "Curl marteau alterné",
      icon: "hammer",
      muscle: "Biceps + avant-bras",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "elbow_flexion",
      tags: ["arms", "biceps", "forearms", "brachialis", "grip", "isolation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–12 / côté",
      work: 40,
      rest: 60,
      desc: "Variante alternée du curl marteau pour biceps et avant-bras.",
      steps: [
        "Garde une prise neutre.",
        "Monte un bras à la fois sans élan.",
        "Contrôle la descente de chaque répétition."
      ],
      mistakes: [
        "Balancer le buste",
        "Descente trop rapide",
        "Charge trop lourde"
      ]
    },
    {
      id: "farmer",
      type: "items",
      name: "Farmer walk",
      icon: "farmer",
      muscle: "Grip + core + posture",
      equipment: ["dumbbell", "kettlebell"],
      difficulty: "beginner",
      pattern: "carry",
      tags: ["carry", "grip", "core", "conditioning", "posture", "full_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "40–60 s",
      work: 45,
      rest: 75,
      desc: "Marche chargée pour grip, posture et gainage.",
      steps: [
        "Grandis-toi et baisse les épaules.",
        "Marche lentement et sous contrôle.",
        "Respire sans te crisper."
      ],
      mistakes: [
        "Se pencher",
        "Trapèzes trop hauts",
        "Pas désordonnés"
      ]
    },
    {
      id: "farmer_hold",
      type: "items",
      name: "Farmer hold",
      icon: "farmer_hold",
      muscle: "Grip + core",
      equipment: ["dumbbell", "kettlebell"],
      difficulty: "beginner",
      pattern: "carry",
      tags: ["carry", "grip", "core", "static", "posture", "full_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "30–45 s",
      work: 35,
      rest: 60,
      desc: "Tenue statique chargée pour renforcer grip, posture et gainage.",
      steps: [
        "Tiens-toi grand et stable.",
        "Serre les poignées sans hausser les épaules.",
        "Respire en gardant le tronc verrouillé."
      ],
      mistakes: [
        "Trapèzes trop hauts",
        "Buste qui s’affaisse",
        "Apnée"
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
    },
    {
      id: "plank",
      type: "items",
      name: "Planche",
      icon: "plank",
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_extension",
      tags: ["core", "abs", "stability", "anti_extension", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "30–45 s",
      work: 35,
      rest: 45,
      desc: "Gainage de base pour le tronc.",
      steps: [
        "Garde le corps aligné.",
        "Serre les abdos et les fessiers.",
        "Respire sans laisser tomber le bassin."
      ],
      mistakes: [
        "Bassin trop bas",
        "Bassin trop haut",
        "Apnée"
      ]
    },
    {
      id: "side_plank",
      type: "items",
      name: "Side plank",
      icon: "side_plank",
      muscle: "Obliques + core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_lateral_flexion",
      tags: ["core", "obliques", "stability", "anti_lateral_flexion", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "20–30 s / côté",
      work: 30,
      rest: 45,
      desc: "Gainage latéral pour les obliques et la stabilité.",
      steps: [
        "Corps bien aligné de la tête aux pieds.",
        "Pousse le sol avec l’avant-bras.",
        "Garde le bassin haut."
      ],
      mistakes: [
        "Bassin qui chute",
        "Épaule écrasée",
        "Corps qui tourne"
      ]
    },
    {
      id: "facepull_band",
      type: "items",
      name: "Face pull élastique strict",
      icon: "facepull_band",
      muscle: "Arrière d’épaules + haut du dos",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "rear_delts", "upper_back", "posture", "band", "shoulder_health"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–20",
      work: 35,
      rest: 45,
      desc: "Excellent exercice postural pour le haut du dos.",
      steps: [
        "Tire l’élastique vers le visage.",
        "Ouvre les coudes et garde les épaules basses.",
        "Ramène lentement la tension."
      ],
      mistakes: [
        "Épaules trop hautes",
        "Élan",
        "Tension relâchée trop vite"
      ]
    },
    {
      id: "pallof_press_band",
      type: "items",
      name: "Pallof press debout élastique",
      icon: "pallof_press_band",
      muscle: "Core + obliques",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "anti_rotation",
      tags: ["core", "obliques", "stability", "anti_rotation", "band", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–12 / côté",
      work: 35,
      rest: 40,
      desc: "Gainage anti-rotation très utile pour stabiliser le tronc.",
      steps: [
        "Tiens l’élastique au niveau du sternum.",
        "Pousse devant toi sans laisser le buste pivoter.",
        "Ramène lentement sous contrôle."
      ],
      mistakes: [
        "Rotation du buste",
        "Épaules haussées",
        "Manque de tension"
      ]
    },
    {
      id: "hollow_hold",
      type: "items",
      name: "Hollow hold",
      icon: "hollow_hold",
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "anti_extension",
      tags: ["core", "abs", "anti_extension", "static"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "20–30 s",
      work: 25,
      rest: 45,
      desc: "Gainage anti-extension avancé.",
      steps: [
        "Bas du dos collé au sol.",
        "Rentre les côtes et tends le corps.",
        "Tiens la position sans perdre la tension."
      ],
      mistakes: [
        "Dos creusé",
        "Nuque crispée",
        "Position trop ambitieuse"
      ]
    }

    ,
    {
      id: "lat_pulldown",
      type: "items",
      name: "Tirage vertical poulie",
      icon: "lat_pulldown",
      muscle: "Grand dorsal + biceps",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "vertical_pull",
      tags: ["pull", "back", "lats", "upper_body", "cable", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 75,
      desc: "Exercice de tirage vertical pour cibler le grand dorsal.",
      steps: [
        "Garde le torse légèrement gainé.",
        "Tire les coudes vers le bas.",
        "Remonte sous contrôle complet."
      ],
      mistakes: [
        "Tirer derrière la nuque",
        "Élan du buste",
        "Amplitude incomplète"
      ]
    },
    {
      id: "seated_cable_row",
      type: "items",
      name: "Rowing assis poulie",
      icon: "seated_cable_row",
      muscle: "Dos + milieu du dos",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_back", "cable", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 75,
      desc: "Tirage horizontal guidé pour développer le dos.",
      steps: [
        "Tiens le torse stable.",
        "Ramène les mains vers le bas du buste.",
        "Contrôle complètement le retour."
      ],
      mistakes: [
        "Dos arrondi",
        "Élan excessif",
        "Épaules qui montent"
      ]
    },
    {
      id: "cable_chest_press",
      type: "items",
      name: "Développé poitrine poulie",
      icon: "cable_chest_press",
      muscle: "Pectoraux + triceps",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "upper_body", "cable"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–12",
      work: 40,
      rest: 60,
      desc: "Poussée guidée à la poulie pour les pectoraux.",
      steps: [
        "Place-toi stable en fente légère ou debout gainé.",
        "Pousse devant toi en gardant les épaules basses.",
        "Reviens lentement sous tension."
      ],
      mistakes: [
        "Épaules hautes",
        "Perte de contrôle",
        "Amplitude trop courte"
      ]
    },
    {
      id: "cable_fly",
      type: "items",
      name: "Écartés poulie",
      icon: "cable_fly",
      muscle: "Pectoraux",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "horizontal_adduction",
      tags: ["push", "chest", "isolation", "cable", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 40,
      rest: 60,
      desc: "Isolation des pectoraux à la poulie.",
      steps: [
        "Garde une légère flexion de coude.",
        "Referme les bras devant le buste.",
        "Contrôle l’ouverture sans perdre la tension."
      ],
      mistakes: [
        "Coudes trop tendus",
        "Amplitude brusque",
        "Épaules qui roulent vers l’avant"
      ]
    },
    {
      id: "triceps_pushdown",
      type: "items",
      name: "Extension triceps poulie",
      icon: "triceps_pushdown",
      muscle: "Triceps",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "elbow_extension",
      tags: ["arms", "triceps", "isolation", "cable", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 35,
      rest: 50,
      desc: "Isolation simple et efficace des triceps à la poulie.",
      steps: [
        "Garde les coudes serrés au corps.",
        "Pousse vers le bas sans bouger les épaules.",
        "Remonte lentement."
      ],
      mistakes: [
        "Coudes qui bougent trop",
        "Élan du buste",
        "Amplitude partielle"
      ]
    },
    {
      id: "cable_biceps_curl",
      type: "items",
      name: "Curl biceps poulie",
      icon: "cable_biceps_curl",
      muscle: "Biceps",
      equipment: ["cable"],
      difficulty: "beginner",
      pattern: "elbow_flexion",
      tags: ["arms", "biceps", "isolation", "cable", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 35,
      rest: 50,
      desc: "Curl guidé à la poulie pour une tension continue sur les biceps.",
      steps: [
        "Coudes proches du corps.",
        "Monte sans élan.",
        "Descends lentement en gardant la tension."
      ],
      mistakes: [
        "Balancer le buste",
        "Coudes qui avancent",
        "Retour trop rapide"
      ]
    },
    {
      id: "leg_press",
      type: "items",
      name: "Leg press",
      icon: "leg_press",
      muscle: "Quadriceps + fessiers",
      equipment: ["machine"],
      difficulty: "beginner",
      pattern: "squat",
      tags: ["legs", "quads", "glutes", "machine", "strength", "hypertrophy"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "10–15",
      work: 45,
      rest: 75,
      desc: "Exercice machine pour les jambes avec forte stabilité.",
      steps: [
        "Place bien les pieds sur la plateforme.",
        "Descends en gardant les genoux dans l’axe.",
        "Pousse fort sans verrouiller brutalement."
      ],
      mistakes: [
        "Bas du dos qui se décolle",
        "Genoux qui rentrent",
        "Amplitude mal contrôlée"
      ]
    },
    {
      id: "leg_extension",
      type: "items",
      name: "Leg extension",
      icon: "leg_extension",
      muscle: "Quadriceps",
      equipment: ["machine"],
      difficulty: "beginner",
      pattern: "knee_extension",
      tags: ["legs", "quads", "machine", "isolation", "hypertrophy"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 35,
      rest: 50,
      desc: "Isolation machine pour les quadriceps.",
      steps: [
        "Règle correctement la machine.",
        "Monte avec contrôle.",
        "Redescends lentement sans lâcher."
      ],
      mistakes: [
        "Charge trop lourde",
        "Élan",
        "Amplitude partielle"
      ]
    },
    {
      id: "leg_curl",
      type: "items",
      name: "Leg curl",
      icon: "leg_curl",
      muscle: "Ischios",
      equipment: ["machine"],
      difficulty: "beginner",
      pattern: "knee_flexion",
      tags: ["legs", "hamstrings", "machine", "isolation", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 35,
      rest: 50,
      desc: "Isolation machine pour les ischios.",
      steps: [
        "Règle bien le point d’appui.",
        "Ramène les talons vers les fessiers.",
        "Redescends lentement."
      ],
      mistakes: [
        "Élan",
        "Bassin qui bouge trop",
        "Retour non contrôlé"
      ]
    },
    {
      id: "calf_raise",
      type: "items",
      name: "Mollets debout",
      icon: "calf_raise",
      muscle: "Mollets",
      equipment: ["bodyweight", "machine", "dumbbell"],
      difficulty: "beginner",
      pattern: "ankle_extension",
      tags: ["legs", "calves", "isolation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "15–20",
      work: 30,
      rest: 40,
      desc: "Travail ciblé des mollets.",
      steps: [
        "Monte haut sur la pointe des pieds.",
        "Marque un léger temps en haut.",
        "Redescends lentement."
      ],
      mistakes: [
        "Amplitude trop courte",
        "Rebond",
        "Rythme trop rapide"
      ]
    },
    {
      id: "step_up",
      type: "items",
      name: "Step-up",
      icon: "step_up",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "dumbbell", "bench", "box"],
      difficulty: "beginner",
      pattern: "step_up",
      tags: ["legs", "glutes", "quads", "unilateral", "functional"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–10 / côté",
      work: 40,
      rest: 60,
      desc: "Exercice unilatéral fonctionnel pour jambes et stabilité.",
      steps: [
        "Pose tout le pied sur le support.",
        "Pousse fort dans la jambe avant.",
        "Redescends avec contrôle."
      ],
      mistakes: [
        "Impulsion excessive avec la jambe arrière",
        "Genou qui rentre",
        "Perte d’équilibre"
      ]
    },
    {
      id: "walking_lunge",
      type: "items",
      name: "Fentes marchées",
      icon: "walking_lunge",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "dumbbell"],
      difficulty: "intermediate",
      pattern: "lunge",
      tags: ["legs", "glutes", "quads", "unilateral", "conditioning"],
      kneeImpact: "high",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–12 / côté",
      work: 45,
      rest: 75,
      desc: "Fentes dynamiques pour le bas du corps.",
      steps: [
        "Fais un grand pas contrôlé.",
        "Descends en gardant le buste stable.",
        "Pousse pour avancer sur la répétition suivante."
      ],
      mistakes: [
        "Pas trop courts",
        "Genoux qui rentrent",
        "Perte d’alignement"
      ]
    },
    {
      id: "machine_chest_press",
      type: "items",
      name: "Chest press machine",
      icon: "machine_chest_press",
      muscle: "Pectoraux + triceps",
      equipment: ["machine"],
      difficulty: "beginner",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "machine", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 40,
      rest: 60,
      desc: "Poussée guidée machine pour les pectoraux.",
      steps: [
        "Règle bien le siège.",
        "Pousse sans hausser les épaules.",
        "Reviens sous contrôle."
      ],
      mistakes: [
        "Épaules trop hautes",
        "Amplitude partielle",
        "Charge trop lourde"
      ]
    },
    {
      id: "machine_row",
      type: "items",
      name: "Row machine",
      icon: "machine_row",
      muscle: "Dos + haut du dos",
      equipment: ["machine"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_back", "machine", "hypertrophy"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 40,
      rest: 60,
      desc: "Tirage guidé machine pour le dos.",
      steps: [
        "Garde le torse stable.",
        "Ramène les poignées vers toi.",
        "Contrôle complètement le retour."
      ],
      mistakes: [
        "Élan",
        "Épaules qui montent",
        "Retour trop rapide"
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
    },
    {
      id: "cd_hip_mobility",
      type: "cooldown",
      name: "Mobilité légère hanches",
      icon: "wu_hip_mobility",
      seconds: 60,
      muscle: "Hanches",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "mobility", "hips", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme orienté mobilité de hanches.",
      todo: "Respire calmement et cherche de la mobilité sans forcer."
    },
    {
      id: "cd_tspine_open",
      type: "cooldown",
      name: "Ouverture thoracique",
      icon: "wu_tspine_open",
      seconds: 60,
      muscle: "Dos thoracique",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "mobility", "tspine", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Mobilité thoracique légère après la séance.",
      todo: "Ouvre la cage thoracique doucement et respire profondément."
    },
    {
      id: "cd_glute_reset",
      type: "cooldown",
      name: "Relâchement fessiers léger",
      icon: "wu_glute_bridge",
      seconds: 60,
      muscle: "Fessiers",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "recovery",
      tags: ["cooldown", "glutes", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme doux après travail du bas du corps.",
      todo: "Bouge lentement, souffle et relâche la tension accumulée."
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