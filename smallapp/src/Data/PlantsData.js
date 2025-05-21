const plantsData = [
  {
    id: 1,
    common_name: "Snake Plant",
    scientific_name: "Sansevieria trifasciata",
    image: "https://images.unsplash.com/photo-1616961065849-edf307a08bcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    description: "A hardy, air-purifying plant known for its upright, sword-like leaves with green and yellow stripes.",
    watering: "Every 2–3 weeks",
    light: "Low to bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 2,
    common_name: "Spider Plant",
    scientific_name: "Chlorophytum comosum",
    image: "https://images.unsplash.com/photo-1610551724444-5fb527b5ad20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    description: "Fast-growing plant with long, arching leaves and baby plant offshoots that resemble spiders.",
    watering: "Once a week",
    light: "Bright indirect",
    toxicity: "Non-toxic to pets",
    difficulty: "Very Easy"
  },
  {
    id: 3,
    common_name: "Peace Lily",
    scientific_name: "Spathiphyllum wallisii",
    image: "https://images.unsplash.com/photo-1652731706545-901f1026da4d?w=600&auto=format&fit=crop&q=60",
    description: "Elegant white flowers and dark green foliage that purify indoor air.",
    watering: "Keep soil consistently moist",
    light: "Low to medium indirect",
    toxicity: "Toxic to pets",
    difficulty: "Medium"
  },
  {
    id: 4,
    common_name: "Aloe Vera",
    scientific_name: "Aloe barbadensis miller",
    image: "https://images.unsplash.com/photo-1671166739837-b175ef95cb48?w=500&auto=format&fit=crop&q=60",
    description: "Succulent known for its medicinal properties and thick, fleshy leaves.",
    watering: "Every 3 weeks",
    light: "Bright indirect to direct",
    toxicity: "Toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 5,
    common_name: "Fiddle Leaf Fig",
    scientific_name: "Ficus lyrata",
    image: "https://images.unsplash.com/photo-1652047032006-c24e51f31267?w=500&auto=format&fit=crop&q=60",
    description: "Trendy indoor plant with large, violin-shaped leaves and dramatic appearance.",
    watering: "Weekly",
    light: "Bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Medium"
  },
  {
    id: 6,
    common_name: "Rubber Plant",
    scientific_name: "Ficus elastica",
    image: "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=500&auto=format&fit=crop&q=60",
    description: "Glossy, dark green leaves and an upright growth habit make it a great statement plant.",
    watering: "Once a week",
    light: "Bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 7,
    common_name: "Monstera",
    scientific_name: "Monstera deliciosa",
    image: "https://images.unsplash.com/photo-1604866830513-d54766457f45?w=500&auto=format&fit=crop&q=60",
    description: "Popular for its split leaves and tropical vibe; also known as the Swiss cheese plant.",
    watering: "Every 1–2 weeks",
    light: "Bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 8,
    common_name: "Boston Fern",
    scientific_name: "Nephrolepis exaltata",
    image: "https://images.unsplash.com/photo-1520716278696-8af47de5da00?w=500&auto=format&fit=crop&q=60",
    description: "Lush and feathery foliage ideal for hanging baskets or bathrooms.",
    watering: "Keep soil moist",
    light: "Indirect to low",
    toxicity: "Non-toxic to pets",
    difficulty: "Medium"
  },
  {
    id: 9,
    common_name: "Jade Plant",
    scientific_name: "Crassula ovata",
    image: "https://images.unsplash.com/photo-1616189597001-9046fce2594d?w=500&auto=format&fit=crop&q=60",
    description: "Succulent with thick, glossy leaves that resemble jade coins. Symbol of good luck.",
    watering: "Every 2–3 weeks",
    light: "Bright indirect",
    toxicity: "Mildly toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 10,
    common_name: "ZZ Plant",
    scientific_name: "Zamioculcas zamiifolia",
    image: "https://images.unsplash.com/photo-1606256419855-d72ce8675863?w=500&auto=format&fit=crop&q=60",
    description: "Tolerant of low light and neglect, ZZ is the perfect low-maintenance indoor plant.",
    watering: "Every 2–3 weeks",
    light: "Low to bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Very Easy"
  },
  {
    id: 11,
    common_name: "English Ivy",
    scientific_name: "Hedera helix",
    image: "https://images.unsplash.com/photo-1676131969304-27b006427503?w=500&auto=format&fit=crop&q=60",
    description: "Fast-growing trailing plant great for walls and hanging pots.",
    watering: "Once a week",
    light: "Bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Medium"
  },
  {
    id: 12,
    common_name: "Calathea",
    scientific_name: "Calathea orbifolia",
    image: "https://images.unsplash.com/photo-1687166752260-c423a780289b?w=500&auto=format&fit=crop&q=60",
    description: "Known for its patterned leaves that move with light changes; also called 'prayer plants'.",
    watering: "Keep soil moist",
    light: "Low to medium indirect",
    toxicity: "Non-toxic to pets",
    difficulty: "Hard"
  },
  {
    id: 13,
    common_name: "Dracaena",
    scientific_name: "Dracaena fragrans",
    image: "https://images.unsplash.com/photo-1648403971659-cdf40a631327?w=500&auto=format&fit=crop&q=60",
    description: "Easy-going plant with long, sword-like leaves; excellent for offices and homes.",
    watering: "Every 1–2 weeks",
    light: "Low to bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Easy"
  },
  {
    id: 14,
    common_name: "Pothos",
    scientific_name: "Epipremnum aureum",
    image: "https://images.unsplash.com/photo-1646932569232-fd2ee17e54bc?w=500&auto=format&fit=crop&q=60",
    description: "Trailing vine that's incredibly easy to grow and propagate. Great for beginners.",
    watering: "Every 1–2 weeks",
    light: "Low to bright indirect",
    toxicity: "Toxic to pets",
    difficulty: "Very Easy"
  },
  {
    id: 15,
    common_name: "Succulent",
    scientific_name: "Echeveria elegans",
    image: "https://images.unsplash.com/photo-1611699411562-bce37c8c0db4?w=500&auto=format&fit=crop&q=60",
    description: "Rosette-forming succulent that thrives in dry conditions and bright light.",
    watering: "Every 2–3 weeks",
    light: "Direct sunlight",
    toxicity: "Non-toxic to pets",
    difficulty: "Easy"
  }
];

export default plantsData;
