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
      name: "Row assis à l’élastique",
      icon: "band_row_seated",
      muscle: "Dos",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "upper_body", "band", "beginner"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "12–15",
      work: 40,
      rest: 60,
      desc: "Tirage simple et accessible avec élastique.",
      steps: [
        "Assieds-toi bien droit.",
        "Ramène les coudes vers l’arrière.",
        "Contrôle complètement le retour."
      ],
      mistakes: [
        "Épaules hautes",
        "Dos qui s’arrondit",
        "Retour non contrôlé"
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
      name: "Glute bridge haltère",
      icon: "glute_bridge_db",
      muscle: "Fessiers",
      equipment: ["dumbbell"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["glutes", "legs", "hinge", "beginner"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "10–15",
      work: 40,
      rest: 60,
      desc: "Variante simple pour renforcer les fessiers.",
      steps: [
        "Garde le bas du dos neutre.",
        "Pousse dans les talons.",
        "Serre les fessiers en haut."
      ],
      mistakes: [
        "Cambrure excessive",
        "Amplitude partielle",
        "Pieds mal placés"
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
      tags: ["push", "shoulders", "triceps", "upper_body", "overhead", "joint_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "8–12",
      work: 45,
      rest: 75,
      desc: "Variante assise plus stable pour les épaules.",
      steps: [
        "Dos bien calé sur le banc.",
        "Pousse verticalement sans hausser les épaules.",
        "Descends sous contrôle."
      ],
      mistakes: [
        "Cambrure",
        "Trajectoire désordonnée",
        "Amplitude incomplète"
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
      tags: ["core", "obliques", "stability", "anti_lateral_flexion"],
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
      id: "pallof_press_band",
      type: "items",
      name: "Pallof press élastique",
      icon: "pallof_press_band",
      muscle: "Core + obliques",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "anti_rotation",
      tags: ["core", "obliques", "stability", "anti_rotation", "band"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–12 / côté",
      work: 40,
      rest: 45,
      desc: "Exercice anti-rotation utile pour le gainage fonctionnel.",
      steps: [
        "Tiens l’élastique devant le sternum.",
        "Pousse devant toi sans tourner le buste.",
        "Ramène lentement."
      ],
      mistakes: [
        "Buste qui pivote",
        "Épaules haussées",
        "Tension relâchée"
      ]
    },
    {
      id: "facepull_band",
      type: "items",
      name: "Face pull élastique",
      icon: "facepull_band",
      muscle: "Arrière d’épaules + haut du dos",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "rear_delts", "upper_back", "posture", "band"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–15",
      work: 40,
      rest: 60,
      desc: "Exercice postural pour le haut du dos et l’arrière d’épaules.",
      steps: [
        "Tire l’élastique vers le visage.",
        "Ouvre les coudes sur les côtés.",
        "Contrôle le retour."
      ],
      mistakes: [
        "Épaules hautes",
        "Dos relâché",
        "Trop d’élan"
      ]
    },
    {
      id: "band_abduction_standing",
      type: "items",
      name: "Abduction debout à l’élastique",
      icon: "band_abduction_standing",
      muscle: "Fessiers moyens",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "hip_abduction",
      tags: ["glutes", "abductors", "activation", "band"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "12–20 / côté",
      work: 35,
      rest: 45,
      desc: "Travail ciblé des abducteurs et du moyen fessier.",
      steps: [
        "Reste gainé et stable.",
        "Écarte la jambe contre la résistance.",
        "Reviens lentement sans perdre le contrôle."
      ],
      mistakes: [
        "Buste qui se balance",
        "Amplitude forcée",
        "Retour trop rapide"
      ]
    },
        ,
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
      id: "dead_bug",
      type: "items",
      name: "Dead bug contrôlé",
      icon: "dead_bug",
      muscle: "Core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_extension",
      tags: ["core", "abs", "deep_core", "anti_extension", "coordination", "spine_friendly"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "8–10 / côté",
      work: 35,
      rest: 40,
      desc: "Version lente et contrôlée pour stabiliser le tronc.",
      steps: [
        "Plaque le bas du dos au sol.",
        "Allonge lentement bras et jambe opposés.",
        "Reviens sans perdre la tension abdominale."
      ],
      mistakes: [
        "Dos qui se creuse",
        "Mouvement trop rapide",
        "Perte de respiration"
      ]
    },
    {
      id: "sideplank",
      type: "items",
      name: "Planche latérale",
      icon: "sideplank",
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
      rest: 40,
      desc: "Gainage latéral pour renforcer les obliques et stabiliser le bassin.",
      steps: [
        "Aligne épaules, bassin et chevilles.",
        "Pousse fort dans l’avant-bras.",
        "Garde le bassin haut pendant toute la série."
      ],
      mistakes: [
        "Bassin qui chute",
        "Épaule écrasée",
        "Corps qui tourne"
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
      id: "landminepress",
      type: "items",
      name: "Landmine press unilatéral",
      icon: "landminepress",
      muscle: "Épaules + haut des pectoraux",
      equipment: ["barbell", "landmine"],
      difficulty: "beginner",
      pattern: "angled_push",
      tags: ["push", "shoulders", "upper_chest", "upper_body", "joint_friendly", "unilateral"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–10 / côté",
      work: 40,
      rest: 60,
      desc: "Poussée diagonale unilatérale, souvent plus confortable pour l’épaule.",
      steps: [
        "Gainage fort dès le départ.",
        "Pousse en diagonale sans hausser l’épaule.",
        "Ramène sous contrôle vers le point de départ."
      ],
      mistakes: [
        "Cambrure excessive",
        "Épaule qui monte",
        "Perte de stabilité"
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
      id: "side_plank",
      type: "items",
      name: "Side plank contrôlé",
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
      rest: 40,
      desc: "Version stable et contrôlée du gainage latéral.",
      steps: [
        "Empile correctement épaules et bassin.",
        "Pousse le sol avec l’avant-bras.",
        "Tiens la ligne sans laisser tomber le bassin."
      ],
      mistakes: [
        "Bassin trop bas",
        "Corps qui tourne",
        "Épaule écrasée"
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