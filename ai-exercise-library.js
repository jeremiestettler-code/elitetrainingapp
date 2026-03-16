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
        ,
    {
      id: "wu_tspine_open",
      type: "warmup",
      name: "Ouverture thoracique",
      icon: "wu_tspine_open",
      seconds: 45,
      muscle: "Dos thoracique",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["warmup", "mobility", "tspine", "upper_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Mobilité thoracique utile avant les séances haut du corps.",
      todo: "Ouvre la cage thoracique lentement, respire profondément et garde le bassin stable."
    },
    {
      id: "wu_band_row",
      type: "warmup",
      name: "Tirage élastique léger",
      icon: "wu_band_row",
      seconds: 45,
      muscle: "Dos + scapulas",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["warmup", "back", "activation", "pull", "scapula"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Activation légère du dos avant tirages ou séances haut du corps.",
      todo: "Ramène les coudes doucement vers l’arrière et contrôle entièrement le retour."
    },
    {
      id: "wu_facepull",
      type: "warmup",
      name: "Face pull léger",
      icon: "wu_facepull",
      seconds: 40,
      muscle: "Arrière d’épaules + haut du dos",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["warmup", "rear_delts", "upper_back", "posture", "activation"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Préparation idéale avant les poussées et tirages du haut du corps.",
      todo: "Tire l’élastique vers le visage en gardant les épaules basses."
    },
    {
      id: "wu_external_rotation",
      type: "warmup",
      name: "Rotation externe élastique",
      icon: "wu_external_rotation",
      seconds: 40,
      muscle: "Épaules + coiffe",
      equipment: ["band"],
      difficulty: "beginner",
      pattern: "external_rotation",
      tags: ["warmup", "shoulders", "rotator_cuff", "activation", "upper_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Activation douce de la coiffe des rotateurs avant les séances du haut du corps.",
      todo: "Garde le coude fixe au corps et fais une rotation contrôlée sans compenser."
    },
    {
      id: "wu_glute_bridge_iso",
      type: "warmup",
      name: "Glute bridge isométrique",
      icon: "wu_glute_bridge_iso",
      seconds: 40,
      muscle: "Fessiers + core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["warmup", "glutes", "activation", "isometric", "lower_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Activation isométrique des fessiers avant le bas du corps.",
      todo: "Monte en pont, serre les fessiers et tiens la position sans cambrer."
    },
    {
      id: "wu_glute_kickback",
      type: "warmup",
      name: "Kickback fessier léger",
      icon: "wu_glute_kickback",
      seconds: 40,
      muscle: "Fessiers",
      equipment: ["bodyweight", "band"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["warmup", "glutes", "activation", "lower_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Activation ciblée des fessiers avant squat, hinge ou séance jambes.",
      todo: "Pousse la jambe vers l’arrière sans creuser le bas du dos."
    },
    {
      id: "wu_cardio_lowimpact",
      type: "warmup",
      name: "Cardio léger sans impact",
      icon: "wu_cardio_lowimpact",
      seconds: 60,
      muscle: "Cardio global",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "conditioning",
      tags: ["warmup", "cardio", "low_impact", "general"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Montée légère de température corporelle sans impact.",
      todo: "Bouge de façon fluide et progressive pour monter doucement le rythme."
    },
    {
      id: "wu_wrist_shoulder",
      type: "warmup",
      name: "Mobilité poignets + épaules",
      icon: "wu_wrist_shoulder",
      seconds: 40,
      muscle: "Poignets + épaules",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["warmup", "mobility", "wrists", "shoulders", "upper_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Préparation utile avant pompes, planches et exercices du haut du corps.",
      todo: "Mobilise doucement poignets et épaules sans aller dans la douleur."
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

        ,
    {
      id: "split_squat_bodyweight",
      type: "items",
      name: "Split squat poids du corps",
      icon: "split_squat_bodyweight",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "lunge",
      tags: ["legs", "glutes", "quads", "unilateral", "bodyweight", "home_workout"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–12 / côté",
      work: 40,
      rest: 60,
      desc: "Fente statique au poids du corps pour renforcer jambes et stabilité.",
      steps: [
        "Place-toi en fente stable.",
        "Descends verticalement avec contrôle.",
        "Remonte en poussant dans le pied avant."
      ],
      mistakes: [
        "Genou avant qui rentre",
        "Perte d’équilibre",
        "Buste trop penché"
      ]
    },
    {
      id: "box_squat",
      type: "items",
      name: "Box squat",
      icon: "box_squat",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "dumbbell", "box", "bench"],
      difficulty: "beginner",
      pattern: "squat",
      tags: ["legs", "glutes", "quads", "box", "knee_friendly", "strength"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–12",
      work: 40,
      rest: 60,
      desc: "Squat vers une box ou un banc pour apprendre un pattern stable et genou-friendly.",
      steps: [
        "Descends vers la box sous contrôle.",
        "Effleure ou assieds-toi brièvement sans te relâcher.",
        "Remonte en poussant fort dans le sol."
      ],
      mistakes: [
        "Tomber sur la box",
        "Buste qui s’effondre",
        "Genoux qui rentrent"
      ]
    },
    {
      id: "wall_sit",
      type: "items",
      name: "Wall sit",
      icon: "wall_sit",
      muscle: "Quadriceps + gainage",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "isometric_squat",
      tags: ["legs", "quads", "isometric", "bodyweight", "home_workout"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "30–45 s",
      work: 35,
      rest: 45,
      desc: "Exercice isométrique simple pour les quadriceps.",
      steps: [
        "Place ton dos contre le mur.",
        "Descends jusqu’à une position assise contrôlée.",
        "Tiens la position sans perdre l’alignement."
      ],
      mistakes: [
        "Position trop basse trop vite",
        "Pieds trop proches",
        "Dos qui quitte le mur"
      ]
    },
    {
      id: "single_leg_rdl",
      type: "items",
      name: "Soulevé de terre roumain une jambe",
      icon: "single_leg_rdl",
      muscle: "Ischios + fessiers + équilibre",
      equipment: ["bodyweight", "dumbbell"],
      difficulty: "intermediate",
      pattern: "hip_hinge",
      tags: ["hinge", "glutes", "hamstrings", "unilateral", "balance", "athletic"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–10 / côté",
      work: 40,
      rest: 60,
      desc: "Charnière unilatérale utile pour la chaîne postérieure et la stabilité.",
      steps: [
        "Garde le bassin aligné.",
        "Pousse les hanches en arrière.",
        "Reviens en gardant le contrôle de l’équilibre."
      ],
      mistakes: [
        "Rotation du bassin",
        "Dos arrondi",
        "Perte d’équilibre non contrôlée"
      ]
    },
    {
      id: "skater_squat_assist",
      type: "items",
      name: "Skater squat assisté",
      icon: "skater_squat_assist",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "bench"],
      difficulty: "intermediate",
      pattern: "single_leg_squat",
      tags: ["legs", "glutes", "quads", "unilateral", "athletic", "balance"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "6–8 / côté",
      work: 35,
      rest: 60,
      desc: "Variante unilatérale assistée pour contrôle, force et stabilité.",
      steps: [
        "Descends sur une jambe avec assistance légère si besoin.",
        "Garde le genou dans l’axe.",
        "Remonte sous contrôle."
      ],
      mistakes: [
        "Genou qui rentre",
        "Perte de contrôle en bas",
        "Aide excessive"
      ]
    },
    {
      id: "jump_squat",
      type: "items",
      name: "Jump squat",
      icon: "jump_squat",
      muscle: "Quadriceps + fessiers + puissance",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "jump",
      tags: ["legs", "power", "conditioning", "athletic", "plyometric"],
      kneeImpact: "high",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "6–10",
      work: 25,
      rest: 60,
      desc: "Exercice explosif pour développer la puissance du bas du corps.",
      steps: [
        "Précharge légèrement le squat.",
        "Saute de façon explosive.",
        "Atterris doucement et relance proprement."
      ],
      mistakes: [
        "Atterrissage bruyant",
        "Genoux qui rentrent",
        "Perte de contrôle à la réception"
      ]
    },
    {
      id: "broad_jump",
      type: "items",
      name: "Saut horizontal",
      icon: "broad_jump",
      muscle: "Bas du corps + puissance",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "jump",
      tags: ["legs", "power", "athletic", "plyometric", "hockey"],
      kneeImpact: "high",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "4–6",
      work: 20,
      rest: 60,
      desc: "Saut horizontal pour développer la projection et la puissance.",
      steps: [
        "Charge les hanches en arrière.",
        "Projette-toi loin vers l’avant.",
        "Atterris stable et équilibré."
      ],
      mistakes: [
        "Atterrissage instable",
        "Manque de gainage",
        "Réception trop raide"
      ]
    },
    {
      id: "lateral_bound",
      type: "items",
      name: "Bond latéral",
      icon: "lateral_bound",
      muscle: "Fessiers + stabilité latérale",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "lateral_jump",
      tags: ["legs", "glutes", "athletic", "plyometric", "lateral", "hockey"],
      kneeImpact: "high",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "5–8 / côté",
      work: 25,
      rest: 60,
      desc: "Travail latéral explosif très pertinent pour l’athlétique et le hockey.",
      steps: [
        "Pousse fort latéralement.",
        "Atterris sur une jambe avec contrôle.",
        "Stabilise avant la répétition suivante."
      ],
      mistakes: [
        "Genou instable à la réception",
        "Atterrissage trop dur",
        "Perte d’équilibre"
      ]
    },
    {
      id: "bear_crawl",
      type: "items",
      name: "Bear crawl",
      icon: "bear_crawl",
      muscle: "Core + épaules + full body",
      equipment: ["bodyweight"],
      difficulty: "intermediate",
      pattern: "crawl",
      tags: ["core", "conditioning", "shoulders", "full_body", "athletic"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "20–30 s",
      work: 30,
      rest: 45,
      desc: "Déplacement quadrupédique pour gainage dynamique et condition physique.",
      steps: [
        "Garde les genoux proches du sol.",
        "Déplace main et pied opposés.",
        "Reste gainé et avance avec contrôle."
      ],
      mistakes: [
        "Bassin trop haut",
        "Dos relâché",
        "Mouvement trop rapide"
      ]
    },
    {
      id: "mountain_climber_slow",
      type: "items",
      name: "Mountain climber lent",
      icon: "mountain_climber_slow",
      muscle: "Core + conditioning",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "dynamic_core",
      tags: ["core", "conditioning", "bodyweight", "home_workout"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "20–30 s",
      work: 25,
      rest: 40,
      desc: "Version contrôlée du mountain climber pour le gainage dynamique.",
      steps: [
        "Place-toi en position de planche.",
        "Ramène les genoux alternativement sous le buste.",
        "Garde les épaules stables."
      ],
      mistakes: [
        "Bassin qui monte trop",
        "Rythme désordonné",
        "Perte de gainage"
      ]
    },
    {
      id: "bird_dog",
      type: "items",
      name: "Bird dog",
      icon: "bird_dog",
      muscle: "Core + stabilité lombaire",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "anti_rotation",
      tags: ["core", "stability", "spine_friendly", "bodyweight"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "8–10 / côté",
      work: 35,
      rest: 40,
      desc: "Exercice de stabilité croisée pour le tronc.",
      steps: [
        "Allonge bras et jambe opposés.",
        "Garde le bassin stable.",
        "Reviens lentement sans bouger le tronc."
      ],
      mistakes: [
        "Rotation du bassin",
        "Dos qui se creuse",
        "Mouvement trop rapide"
      ]
    },
    {
      id: "glute_bridge_march",
      type: "items",
      name: "Glute bridge march",
      icon: "glute_bridge_march",
      muscle: "Fessiers + core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "hip_extension",
      tags: ["glutes", "core", "knee_friendly", "bodyweight", "stability"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "8–10 / côté",
      work: 35,
      rest: 40,
      desc: "Pont fessier dynamique avec alternance des jambes.",
      steps: [
        "Monte en pont fessier.",
        "Décolle un pied à la fois sans faire tomber le bassin.",
        "Reste gainé pendant toute la série."
      ],
      mistakes: [
        "Bassin qui se vrille",
        "Cambrure excessive",
        "Perte de contrôle"
      ]
    },
    {
      id: "reverse_lunge_bodyweight",
      type: "items",
      name: "Fente arrière poids du corps",
      icon: "reverse_lunge_bodyweight",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "lunge",
      tags: ["legs", "glutes", "quads", "bodyweight", "home_workout"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–10 / côté",
      work: 40,
      rest: 60,
      desc: "Variante de fente souvent plus contrôlable que la fente avant.",
      steps: [
        "Recule un pied loin derrière.",
        "Descends droit avec contrôle.",
        "Ramène-toi en poussant dans la jambe avant."
      ],
      mistakes: [
        "Pas trop court",
        "Genou qui rentre",
        "Perte d’équilibre"
      ]
    },
    {
      id: "sit_to_stand",
      type: "items",
      name: "Sit to stand",
      icon: "sit_to_stand",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "bench"],
      difficulty: "beginner",
      pattern: "squat",
      tags: ["legs", "glutes", "quads", "beginner", "knee_friendly", "home_workout"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 35,
      rest: 45,
      desc: "Mouvement simple et efficace pour apprendre à pousser avec les jambes.",
      steps: [
        "Assieds-toi contrôlé sur le banc ou la chaise.",
        "Penche légèrement le buste.",
        "Relève-toi en poussant fort dans les pieds."
      ],
      mistakes: [
        "Impulsion excessive",
        "Genoux qui rentrent",
        "Perte de contrôle à la descente"
      ]
    },
    {
      id: "tempo_squat",
      type: "items",
      name: "Squat tempo",
      icon: "tempo_squat",
      muscle: "Quadriceps + fessiers",
      equipment: ["bodyweight", "dumbbell"],
      difficulty: "beginner",
      pattern: "squat",
      tags: ["legs", "glutes", "quads", "tempo", "control", "home_workout"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–12",
      work: 40,
      rest: 60,
      desc: "Squat lent pour améliorer contrôle, temps sous tension et technique.",
      steps: [
        "Descends lentement en comptant.",
        "Marque un court arrêt en bas.",
        "Remonte avec contrôle."
      ],
      mistakes: [
        "Descente trop rapide",
        "Buste qui tombe",
        "Perte d’alignement"
      ]
    },
{
  id: "medball_slams",
  type: "items",
  name: "Med ball slam",
  icon: "medball_slams",
  muscle: "Full body",
  equipment: ["med ball"],
  difficulty: "beginner",
  pattern: "power",
  tags: ["conditioning","power","core","athletic"],
  kneeImpact: "medium",
  sets: 3,
  reps: "10–12",
  work: 30,
  rest: 60
},
{
  id: "medball_rotational_throw",
  type: "items",
  name: "Med ball rotation throw",
  icon: "medball_rotational_throw",
  muscle: "Core",
  equipment: ["med ball"],
  difficulty: "intermediate",
  pattern: "rotation",
  tags: ["core","power","athletic"],
  kneeImpact: "low",
  sets: 3,
  reps: "8 / side",
  work: 30,
  rest: 60
},

{
  id: "bike_sprint",
  type: "items",
  name: "Bike sprint",
  icon: "bike_sprint",
  muscle: "Cardio",
  equipment: ["bike"],
  difficulty: "beginner",
  pattern: "conditioning",
  tags: ["cardio","conditioning"],
  kneeImpact: "low",
  sets: 6,
  reps: "20s",
  work: 20,
  rest: 40
},

{
  id: "dip_bars_dips",
  type: "items",
  name: "Dips",
  icon: "dip_bars_dips",
  muscle: "Triceps + chest",
  equipment: ["dip bars"],
  difficulty: "intermediate",
  pattern: "push",
  tags: ["triceps","chest","bodyweight"],
  kneeImpact: "low",
  sets: 3,
  reps: "8–12",
  work: 40,
  rest: 60
},

{
  id: "parallettes_pushups",
  type: "items",
  name: "Push-ups parallettes",
  icon: "parallettes_pushups",
  muscle: "Chest",
  equipment: ["parallettes"],
  difficulty: "beginner",
  pattern: "push",
  tags: ["chest","bodyweight"],
  kneeImpact: "low",
  sets: 3,
  reps: "10–15",
  work: 35,
  rest: 50
},

{
  id: "step_ups",
  type: "items",
  name: "Step ups",
  icon: "step_ups",
  muscle: "Legs",
  equipment: ["step"],
  difficulty: "beginner",
  pattern: "step_up",
  tags: ["legs","glutes"],
  kneeImpact: "medium",
  sets: 3,
  reps: "10 / leg",
  work: 40,
  rest: 60
},

{
  id: "slider_lunges",
  type: "items",
  name: "Slider lunges",
  icon: "slider_lunges",
  muscle: "Legs",
  equipment: ["sliders"],
  difficulty: "beginner",
  pattern: "lunge",
  tags: ["legs","glutes"],
  kneeImpact: "low",
  sets: 3,
  reps: "10 / leg",
  work: 35,
  rest: 60
},

{
  id: "abwheel_rollout",
  type: "items",
  name: "Ab wheel rollout",
  icon: "abwheel_rollout",
  muscle: "Core",
  equipment: ["ab wheel"],
  difficulty: "intermediate",
  pattern: "anti_extension",
  tags: ["core","abs"],
  kneeImpact: "low",
  sets: 3,
  reps: "8–10",
  work: 30,
  rest: 60
},

{
  id: "battle_rope_waves",
  type: "items",
  name: "Battle rope waves",
  icon: "battle_rope_waves",
  muscle: "Full body",
  equipment: ["corde"],
  difficulty: "beginner",
  pattern: "conditioning",
  tags: ["conditioning","cardio"],
  kneeImpact: "low",
  sets: 4,
  reps: "30s",
  work: 30,
  rest: 45
},

{
  id: "trx_rows",
  type: "items",
  name: "TRX rows",
  icon: "trx_rows",
  muscle: "Back",
  equipment: ["trx"],
  difficulty: "beginner",
  pattern: "pull",
  tags: ["back","bodyweight"],
  kneeImpact: "low",
  sets: 3,
  reps: "10–12",
  work: 40,
  rest: 60
},

{
  id: "trx_pushups",
  type: "items",
  name: "TRX pushups",
  icon: "trx_pushups",
  muscle: "Chest",
  equipment: ["trx"],
  difficulty: "intermediate",
  pattern: "push",
  tags: ["chest","core"],
  kneeImpact: "low",
  sets: 3,
  reps: "10–12",
  work: 40,
  rest: 60
},

{
  id: "rowing_machine_intervals",
  type: "items",
  name: "Rowing intervals",
  icon: "rowing_machine_intervals",
  muscle: "Cardio",
  equipment: ["rameur"],
  difficulty: "beginner",
  pattern: "conditioning",
  tags: ["cardio","conditioning"],
  kneeImpact: "low",
  sets: 5,
  reps: "30s",
  work: 30,
  rest: 30
},

{
  id: "kettlebell_clean",
  type: "items",
  name: "Kettlebell clean",
  icon: "kettlebell_clean",
  muscle: "Full body",
  equipment: ["kettlebell"],
  difficulty: "intermediate",
  pattern: "hinge",
  tags: ["power","glutes"],
  kneeImpact: "low",
  sets: 3,
  reps: "8 / side",
  work: 35,
  rest: 60
},

{
  id: "barbell_back_squat",
  type: "items",
  name: "Back squat",
  icon: "barbell_back_squat",
  muscle: "Legs",
  equipment: ["barbell"],
  difficulty: "intermediate",
  pattern: "squat",
  tags: ["legs","strength"],
  kneeImpact: "medium",
  sets: 4,
  reps: "6–8",
  work: 45,
  rest: 90
}    ,
    {
      id: "medball_slams",
      type: "items",
      name: "Med ball slams",
      icon: "medball_slams",
      muscle: "Full body + core",
      equipment: ["med ball"],
      difficulty: "beginner",
      pattern: "power",
      tags: ["conditioning", "power", "core", "athletic", "med_ball"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "10–12",
      work: 30,
      rest: 45,
      desc: "Exercice explosif full body avec med ball.",
      steps: [
        "Monte la balle au-dessus de la tête.",
        "Slam au sol avec puissance.",
        "Récupère proprement et recommence."
      ],
      mistakes: [
        "Dos arrondi",
        "Perte de contrôle",
        "Rythme désordonné"
      ]
    },
    {
      id: "bike_sprint",
      type: "items",
      name: "Bike sprint",
      icon: "bike_sprint",
      muscle: "Conditioning",
      equipment: ["bike"],
      difficulty: "beginner",
      pattern: "conditioning",
      tags: ["cardio", "conditioning", "intervals", "bike"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 6,
      reps: "20 s",
      work: 20,
      rest: 40,
      desc: "Sprint court sur vélo pour le conditioning.",
      steps: [
        "Accélère progressivement.",
        "Sprint fort sur la durée prévue.",
        "Récupère activement entre les répétitions."
      ],
      mistakes: [
        "Partir trop fort dès la première série",
        "Résistance mal réglée",
        "Récupération insuffisante"
      ]
    },
    {
      id: "dip_bars_dips",
      type: "items",
      name: "Dips aux barres parallèles",
      icon: "dip_bars_dips",
      muscle: "Pectoraux + triceps",
      equipment: ["dip bars"],
      difficulty: "intermediate",
      pattern: "vertical_push",
      tags: ["push", "chest", "triceps", "bodyweight", "dip_bars"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "6–10",
      work: 35,
      rest: 60,
      desc: "Poussée poids du corps exigeante pour pectoraux et triceps.",
      steps: [
        "Descends sous contrôle.",
        "Garde les épaules stables.",
        "Pousse fort pour remonter."
      ],
      mistakes: [
        "Épaules trop en avant",
        "Amplitude forcée",
        "Perte de gainage"
      ]
    },
    {
      id: "parallettes_pushups",
      type: "items",
      name: "Pompes sur parallettes",
      icon: "parallettes_pushups",
      muscle: "Pectoraux + triceps + core",
      equipment: ["parallettes"],
      difficulty: "beginner",
      pattern: "horizontal_push",
      tags: ["push", "chest", "triceps", "bodyweight", "parallettes"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "8–15",
      work: 35,
      rest: 50,
      desc: "Pompes avec amplitude augmentée grâce aux parallettes.",
      steps: [
        "Garde une ligne corps-gainée.",
        "Descends plus bas que sur des pompes classiques.",
        "Repousse sous contrôle."
      ],
      mistakes: [
        "Bassin qui tombe",
        "Amplitude non contrôlée",
        "Épaules qui montent"
      ]
    },
    {
      id: "slider_body_saw",
      type: "items",
      name: "Body saw sliders",
      icon: "slider_body_saw",
      muscle: "Core",
      equipment: ["sliders"],
      difficulty: "intermediate",
      pattern: "anti_extension",
      tags: ["core", "abs", "sliders", "stability"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "8–12",
      work: 30,
      rest: 45,
      desc: "Exercice core avancé avec sliders.",
      steps: [
        "Pars en position de planche.",
        "Glisse doucement vers l’arrière.",
        "Reviens sans perdre le gainage."
      ],
      mistakes: [
        "Dos qui se creuse",
        "Amplitude trop grande",
        "Mouvement trop rapide"
      ]
    },
    {
      id: "abwheel_rollout",
      type: "items",
      name: "Ab wheel rollout",
      icon: "abwheel_rollout",
      muscle: "Core + anti-extension",
      equipment: ["ab wheel"],
      difficulty: "intermediate",
      pattern: "anti_extension",
      tags: ["core", "abs", "ab_wheel", "stability"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      sets: 3,
      reps: "6–10",
      work: 25,
      rest: 50,
      desc: "Exercice de gainage avancé à l’ab wheel.",
      steps: [
        "Garde les côtes rentrées.",
        "Roules vers l’avant sous contrôle.",
        "Reviens sans casser le bas du dos."
      ],
      mistakes: [
        "Dos qui s’écrase",
        "Amplitude trop ambitieuse",
        "Retour brusque"
      ]
    },
    {
      id: "battle_rope_waves",
      type: "items",
      name: "Battle rope waves",
      icon: "battle_rope_waves",
      muscle: "Full body + conditioning",
      equipment: ["corde"],
      difficulty: "beginner",
      pattern: "conditioning",
      tags: ["conditioning", "cardio", "power", "rope"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 5,
      reps: "20–30 s",
      work: 25,
      rest: 35,
      desc: "Travail cardio-musculaire avec corde ondulatoire.",
      steps: [
        "Position athlétique stable.",
        "Crée des vagues régulières.",
        "Reste gainé pendant toute la série."
      ],
      mistakes: [
        "Épaules crispées",
        "Rythme irrégulier",
        "Buste relâché"
      ]
    },
    {
      id: "trx_rows",
      type: "items",
      name: "TRX rows",
      icon: "trx_rows",
      muscle: "Dos + biceps",
      equipment: ["trx"],
      difficulty: "beginner",
      pattern: "horizontal_pull",
      tags: ["pull", "back", "trx", "bodyweight", "home_gym"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 3,
      reps: "10–15",
      work: 35,
      rest: 50,
      desc: "Tirage suspendu au TRX pour le dos.",
      steps: [
        "Garde le corps gainé.",
        "Tire le sternum vers les poignées.",
        "Redescends lentement."
      ],
      mistakes: [
        "Épaules hautes",
        "Bassin qui casse",
        "Amplitude partielle"
      ]
    },
    {
      id: "rowing_machine_intervals",
      type: "items",
      name: "Rameur intervalles",
      icon: "rowing_machine_intervals",
      muscle: "Conditioning full body",
      equipment: ["rameur"],
      difficulty: "beginner",
      pattern: "conditioning",
      tags: ["cardio", "conditioning", "rowing", "intervals"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 5,
      reps: "30 s",
      work: 30,
      rest: 30,
      desc: "Intervalles courts sur rameur.",
      steps: [
        "Pousse avec les jambes puis tire.",
        "Garde un rythme propre.",
        "Récupère activement entre les efforts."
      ],
      mistakes: [
        "Tirer trop tôt avec les bras",
        "Dos arrondi",
        "Cadence non maîtrisée"
      ]
    },
    {
      id: "barbell_back_squat",
      type: "items",
      name: "Back squat",
      icon: "barbell_back_squat",
      muscle: "Quadriceps + fessiers",
      equipment: ["barbell"],
      difficulty: "intermediate",
      pattern: "squat",
      tags: ["legs", "quads", "glutes", "barbell", "strength"],
      kneeImpact: "medium",
      overheadAllowed: true,
      floorAllowed: false,
      sets: 4,
      reps: "5–8",
      work: 45,
      rest: 90,
      desc: "Mouvement fondamental de force pour le bas du corps.",
      steps: [
        "Barre stable sur le dos.",
        "Descends sous contrôle avec poitrine haute.",
        "Repousse le sol pour remonter."
      ],
      mistakes: [
        "Genoux qui rentrent",
        "Buste qui s’effondre",
        "Amplitude instable"
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
    }    ,
    {
      id: "cd_hamstring_reset",
      type: "cooldown",
      name: "Relâchement ischios léger",
      icon: "wu_hip_hinge",
      seconds: 60,
      muscle: "Ischios",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "hamstrings", "recovery", "lower_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme doux après les exercices de hinge ou jambes.",
      todo: "Respire calmement et cherche une sensation d’allongement sans forcer."
    },
    {
      id: "cd_shoulder_reset",
      type: "cooldown",
      name: "Relâchement épaules",
      icon: "wu_shoulder_mob",
      seconds: 60,
      muscle: "Épaules",
      equipment: ["bodyweight", "band"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "shoulders", "mobility", "recovery", "upper_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: false,
      desc: "Retour au calme orienté épaules après séance haut du corps.",
      todo: "Relâche les épaules, ouvre doucement la poitrine et respire profondément."
    },
    {
      id: "cd_back_reset",
      type: "cooldown",
      name: "Relâchement dos léger",
      icon: "wu_tspine_open",
      seconds: 60,
      muscle: "Dos",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "back", "mobility", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme léger pour le dos et le haut du buste.",
      todo: "Bouge lentement, relâche le haut du dos et laisse la respiration redescendre."
    },
    {
      id: "cd_core_breathing",
      type: "cooldown",
      name: "Respiration diaphragmatique",
      icon: "wu_breath_core",
      seconds: 75,
      muscle: "Respiration + core",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "breathing",
      tags: ["cooldown", "breathing", "core", "recovery"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme respiratoire après séance intense ou core.",
      todo: "Inspire lentement par le nez, expire longuement et relâche progressivement la tension."
    },
    {
      id: "cd_glute_mobility",
      type: "cooldown",
      name: "Mobilité fessiers / hanches",
      icon: "wu_hip_mobility",
      seconds: 60,
      muscle: "Fessiers + hanches",
      equipment: ["bodyweight"],
      difficulty: "beginner",
      pattern: "mobility",
      tags: ["cooldown", "glutes", "hips", "recovery", "lower_body"],
      kneeImpact: "low",
      overheadAllowed: true,
      floorAllowed: true,
      desc: "Retour au calme léger pour les hanches et les fessiers.",
      todo: "Cherche de la fluidité et relâche progressivement les tensions."
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