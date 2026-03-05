const plantData = {
  rose: {
    title: "Rose - Flower",
    images: [
      "images/rose-blackspot.jpg",
      "images/rose-flower.jpg",
      "images/rose-flower3.jpg",
      "images/rose-flowerr.jpg"
    ],
    content: getPlantContent(
      "Roses are highly sensitive to fungal infections, especially in warm, humid climates. Overhead watering and poor air circulation encourage diseases like black spot and powdery mildew. Soil quality and proper pruning play a key role in prevention.",
      [
        "Black Spot",
        "Powdery Mildew",
        "Rust Disease"
      ],
      [
        "Provide 6+ hours sunlight",
        "Maintain spacing for airflow",
        "Avoid watering leaves",
        "Prune infected stems"
      ],
      [
        "Apply neem oil weekly",
        "Use systemic fungicide early stage",
        "Remove fallen infected leaves"
      ],
      [
        "Stage 1: Small black/purple spots on leaves",
        "Stage 2: Yellowing leaves and premature drop",
        "Stage 3: Defoliation and weak flowering",
        "Stage 4: Stem cankers and dieback"
      ]
    )
  },

  tomato: {
    title: "Tomato - Vegetable",
    images: [
      "images/tomato1.jpg",
      "images/tomato2.jpg",
      "images/tomato3.jpg",
      "images/tomato4.jpg"
    ],
    content: getPlantContent(
      "Tomato crops suffer mostly from fungal and viral infections due to excess moisture. Early blight, late blight, and leaf curl virus are common. Crop rotation and proper watering are essential.",
      [
        "Early Blight",
        "Late Blight",
        "Leaf Curl Virus"
      ],
      [
        "Use drip irrigation",
        "Practice crop rotation",
        "Use well-drained soil",
        "Control whiteflies"
      ],
      [
        "Copper fungicide spray",
        "Neem oil for pests",
        "Remove infected plants"
      ],
      [
        "Stage 1: Brown leaf spots",
        "Stage 2: Leaf drying",
        "Stage 3: Fruit rot"
      ]
    )
  },
cabbage: {
    title: "Cabbage - Vegetable",
    images: [
      "images/cabbage1.jpg",
      "images/cabbage2.jpg",
       "images/cabbage3.jpg",
      "images/cabbage4.jpg"
    ],
    content: getPlantContent(
      "Cabbage is susceptible to bacterial and physiological diseases that affect leaf quality and head formation. Black rot is a serious bacterial disease that spreads through water and contaminated seed, while oedema occurs due to environmental stress when water uptake exceeds transpiration [citation:1][citation:7].",
      [
        "Black Rot",
        "Oedema (Edema)",
        "Downy Mildew"
      ],
      [
        "Use pathogen-free seed from reliable sources",
        "Practice 2-3 year crop rotation out of crucifers",
        "Control cruciferous weeds and insect pests",
        "Ensure proper spacing for air circulation"
      ],
      [
        "Hot water seed treatment at 122°F for 30 minutes",
        "Apply copper-based fungicides preventively",
        "Remove infected plant debris immediately",
        "For oedema, control aphids and thrips that cause injury"
      ],
      [
        "Stage 1: V-shaped yellow lesions at leaf margins",
        "Stage 2: Blackened veins visible when leaf held to light",
        "Stage 3: Systemic infection with vascular discoloration",
        "Stage 4: Complete head rot and plant collapse"
      ]
    )
  },
  
  carrot: {
    title: "Carrot - Root Vegetable",
    images: [
      "images/carrot1.jpg",
      "images/carrot2.jpg",
      "images/carrot3.jpg",
      "images/carrot4.jpg"
    ],
    content: getPlantContent(
      "Carrots face fungal leaf diseases that weaken plants and bacterial soft rot that destroys roots during storage. Alternaria leaf blight and Cercospora leaf spot are common fungal diseases, while bacterial soft rot enters through wounds and causes complete root decay under humid conditions [citation:2][citation:8].",
      [
        "Alternaria Leaf Blight",
        "Cercospora Leaf Spot",
        "Bacterial Soft Rot"
      ],
      [
        "Plant disease-free seed and resistant varieties",
        "Maintain 3-4 year crop rotation",
        "Avoid overhead irrigation to reduce leaf wetness",
        "Harvest carefully to prevent bruising and wounds"
      ],
      [
        "Apply fungicides when 1-2% leaf area shows infection",
        "Use chlorinated water for washing post-harvest",
        "Store at 30-32°F with 85-90% humidity",
        "Disinfect bins and equipment between seasons"
      ],
      [
        "Stage 1: Small brown spots with yellow halos on leaves",
        "Stage 2: Lesions coalesce, leaflets shrivel and die",
        "Stage 3: Petioles weaken, leaves detach from crown",
        "Stage 4: Root soft rot with watery, slimy consistency"
      ]
    )
  },
  
  grapes: {
    title: "Grapes - Fruit",
    images: [
      "images/grapes1.jpg",
      "images/grapes2.jpg",
      "images/grapes3.jpg", 
      "images/grapes4.jpg"
    ],
    content: getPlantContent(
      "Grapevines suffer from three main fungal diseases that affect leaves and fruit quality. Downy mildew causes yellowish leaf patches with white mould underneath, powdery mildew covers leaves and fruit with white fungal growth, and grey mould leads to fruit rot especially as grapes ripen [citation:3].",
      [
        "Downy Mildew",
        "Powdery Mildew",
        "Grey Mould (Botrytis)"
      ],
      [
        "Clean up and destroy fallen leaves in autumn",
        "Avoid overhead watering to reduce humidity",
        "Prune overcrowded shoots for better air circulation",
        "Maintain adequate watering to prevent drought stress"
      ],
      [
        "Apply sulfur-based fungicides for powdery mildew",
        "Use copper products for downy mildew control",
        "Remove and dispose of infected fruit immediately",
        "Improve greenhouse ventilation for indoor vines"
      ],
      [
        "Stage 1: Yellowish patches on upper leaf surface",
        "Stage 2: White mould growth on lower leaf surface",
        "Stage 3: Fruit infection with splitting and rot",
        "Stage 4: Premature fruit drop and mummification"
      ]
    )
  },
  
  papaya: {
    title: "Papaya - Tropical Fruit",
    images: [
      "images/papaya1.jpg",
      "images/papaya2.jpg",
      "images/papaya3.jpg",
      "images/papaya4.jpg"
    ],
    content: getPlantContent(
      "Papaya faces serious viral and fungal diseases that affect fruit quality and tree health. Papaya ringspot virus causes mottled leaves and ring-spotted fruit, while anthracnose and Phytophthora collar rot lead to fruit decay and plant death under wet conditions [citation:4][citation:10].",
      [
        "Papaya Ringspot Virus",
        "Anthracnose",
        "Phytophthora Collar Rot"
      ],
      [
        "Use virus-free planting material",
        "Control aphid vectors that spread ringspot virus",
        "Plant on mounds to improve drainage",
        "Remove infected trees immediately to prevent spread"
      ],
      [
        "Sterilize pruning and harvesting knives",
        "Apply mancozeb or prochloraz for anthracnose",
        "Hot water treatment for post-harvest fruit",
        "Remove fallen fruit from orchard floor"
      ],
      [
        "Stage 1: Leaf mottling and distortion with oily stem streaks",
        "Stage 2: Ringspot symptoms on fruit surface",
        "Stage 3: Stunted growth and reduced fruit production",
        "Stage 4: Tree death in severe viral infection"
      ]
    )
  },
  
  barley: {
    title: "Barley - Cereal Crop",
    images: [
      "images/barley1.jpg",
      "images/barley2.jpg",
      "images/barley3.jpg",
      "images/barley4.jpg"
    ],
    content: getPlantContent(
      "Barley crops face several fungal diseases that reduce yield and grain quality. Ramularia causes leaf spotting especially in stressed crops, powdery mildew is widespread in dry conditions, and net blotch can develop resistance to fungicides. Lower leaves are critical for photosynthesis in barley [citation:5].",
      [
        "Ramularia",
        "Powdery Mildew",
        "Net Blotch"
      ],
      [
        "Monitor crops regularly from mid-June onwards",
        "Use resistant varieties where available",
        "Maintain balanced fertility to reduce plant stress",
        "Avoid consecutive use of same fungicide modes"
      ],
      [
        "Apply pydiflumetofen for confirmed ramularia",
        "Use cyflufenamid for mildew, avoid consecutive sprays",
        "Combine SDHI and azole products for broad control",
        "Consider folpet or biostimulants for consistent protection"
      ],
      [
        "Stage 1: Early leaf spots and chlorotic lesions",
        "Stage 2: Symptoms spread on lower leaves",
        "Stage 3: Reduced green leaf area index",
        "Stage 4: Premature leaf death and yield loss"
      ]
    )
  },
  
  bajra: {
    title: "Pearl Millet (Bajra) - Cereal Crop",
    images: [
      "images/bajra1.jpg",
      "images/bajra2.jpg",
      "images/bajra3.jpg",
       "images/bajra4.jpg"
    ],
    content: getPlantContent(
      "Pearl millet (bajra) is severely affected by downy mildew (green ear disease) caused by Sclerospora graminicola. The disease causes chlorotic leaf stripes, stunting, and transformation of earheads into leafy structures. The pathogen can survive in soil for up to three years [citation:6].",
      [
        "Downy Mildew (Green Ear Disease)",
        "Rust",
        "Smut"
      ],
      [
        "Use approved resistant varieties like MB 87, Sargodha Bajra 2011",
        "Sow multiple varieties in the same field",
        "Avoid heavy irrigation in low-lying areas",
        "Remove diseased crop residues and infected plants"
      ],
      [
        "Apply Fosetyl-aluminium @ 250g/100L water",
        "Use Mefenoxam + chlorothalonil @ 1000ml/100L water",
        "Metiram + pyraclostrobin @ 400g/100L water",
        "Avoid sowing millet in infected fields for 3 years"
      ],
      [
        "Stage 1: Chlorotic stripes on leaves 25 days after sowing",
        "Stage 2: Stripes turn brown, plants show stunting",
        "Stage 3: Leafy structures appear on ears (green ear)",
        "Stage 4: Complete ear deformation and yield loss"
      ]
    )
  },

  jasmine: {
    title: "Jasmine - Flower",
    images: [
      "images/jasmine1.jpg",
      "images/jasmine2.jpg",
      "images/jasmine3.jpg",
      "images/jasmine.jpg"
    ],
    content: getPlantContent(
      "Jasmine plants require balanced watering and good sunlight to prevent fungal growth. They are prone to leaf spot, root rot, and powdery mildew. Regular inspection and well‑draining soil are crucial.",
      [
        "Leaf Spot",
        "Root Rot",
        "Powdery Mildew"
      ],
      [
        "Ensure proper drainage",
        "Avoid overwatering",
        "Provide sunlight daily",
        "Regular plant inspection"
      ],
      [
        "Remove infected leaves",
        "Apply organic fungicide",
        "Improve soil aeration"
      ],
      [
        "Stage 1: Yellow spots",
        "Stage 2: Leaf curling",
        "Stage 3: Bud drop"
      ]
    )
  },

  hibiscus: {
    title: "Hibiscus - Flower",
    images: [
      "images/hibiscus1.jpg",
      "images/hibiscus2.jpg",
      "images/hibiscus3.jpg",
      "images/hibiscus4.jpg"
    ],
    content: getPlantContent(
      "Hibiscus is prone to pest attacks and fungal issues in humid weather. Aphids, whiteflies, and powdery mildew are common. Proper airflow and weekly monitoring keep plants healthy.",
      [
        "Leaf Curl",
        "Aphid Attack",
        "Powdery Mildew"
      ],
      [
        "Check leaves weekly",
        "Improve airflow",
        "Avoid overcrowding"
      ],
      [
        "Spray neem oil",
        "Use insecticidal soap",
        "Trim infected parts"
      ],
      [
        "Stage 1: Leaf twisting",
        "Stage 2: Yellow patches",
        "Stage 3: Flower drop"
      ]
    )
  },

  marigold: {
    title: "Marigold - Flower",
    images: [
      "images/marigold1.jpg",
      "images/marigold2.jpg",
      "images/marigold3.jpg",
      "images/marigold4.jpg"
    ],
    content: getPlantContent(
      "Marigolds are hardy but can be affected by fungal diseases in wet conditions. They are also susceptible to aster yellows and root rot. Good air circulation and well‑drained soil are key.",
      [
        "Aster Yellows",
        "Root Rot",
        "Powdery Mildew",
        "Leaf Spot"
      ],
      [
        "Plant in well‑drained soil",
        "Avoid overhead watering",
        "Space plants for airflow",
        "Remove weeds regularly",
        "Rotate planting location"
      ],
      [
        "Apply copper fungicide",
        "Remove infected plants",
        "Use insecticidal soap for leafhoppers",
        "Neem oil spray"
      ],
      [
        "Stage 1: Yellowing or distorted leaves",
        "Stage 2: Stunted growth",
        "Stage 3: Wilting and flower deformation",
        "Stage 4: Plant death"
      ]
    )
  },

  sunflower: {
    title: "Sunflower - Flower",
    images: [
      "images/sunflower1.jpg",
      "images/sunflower2.jpg",
      "images/sunflower3.jpg",
      "images/sunflower4.jpg"
    ],
    content: getPlantContent(
      "Sunflowers are generally robust but can suffer from downy mildew, rust, and sclerotinia stem rot. Wet conditions and poor soil drainage increase risk. Proper spacing and resistant varieties help.",
      [
        "Downy Mildew",
        "Rust",
        "Sclerotinia Stem Rot",
        "Powdery Mildew"
      ],
      [
        "Ensure good soil drainage",
        "Avoid dense planting",
        "Water at base, not leaves",
        "Rotate crops",
        "Choose resistant cultivars"
      ],
      [
        "Apply fungicide (metalaxyl for mildew)",
        "Remove infected stems",
        "Use sulfur for rust",
        "Improve air circulation"
      ],
      [
        "Stage 1: White down on leaves",
        "Stage 2: Brown pustules (rust)",
        "Stage 3: Stem lesions and wilting",
        "Stage 4: Head rot and seed loss"
      ]
    )
  },

  potato: {
    title: "Potato - Vegetable",
    images: [
      "images/potato1.jpg",
      "images/potato2.jpg",
      "images/potato3.jpg",
      "images/potato4.jpg"
    ],
    content: getPlantContent(
      "Potatoes are highly susceptible to late blight, early blight, and scab. Humid conditions and poor crop rotation exacerbate problems. Seed quality and soil health are critical.",
      [
        "Late Blight",
        "Early Blight",
        "Common Scab",
        "Black Scurf"
      ],
      [
        "Use certified disease‑free seed",
        "Practice 3‑year crop rotation",
        "Hill soil around plants",
        "Avoid overhead irrigation",
        "Ensure good drainage"
      ],
      [
        "Apply copper‑based fungicides",
        "Remove and destroy infected plants",
        "Adjust soil pH for scab (slightly acidic)",
        "Use resistant varieties"
      ],
      [
        "Stage 1: Dark lesions on leaves",
        "Stage 2: White fungal growth (late blight)",
        "Stage 3: Tuber rot",
        "Stage 4: Complete crop loss"
      ]
    )
  },

  brinjal: {
    title: "Brinjal (Eggplant) - Vegetable",
    images: [
      "images/brinjal1.jpg",
      "images/brinjal2.jpg",
      "images/brinjal3.jpg",
      "images/brinjal4.jpg"
    ],
    content: getPlantContent(
      "Brinjal is prone to bacterial wilt, fruit borer, and little leaf disease. Warm, humid weather favours pests and diseases. Proper spacing and pest monitoring are essential.",
      [
        "Bacterial Wilt",
        "Fruit and Shoot Borer",
        "Little Leaf",
        "Powdery Mildew"
      ],
      [
        "Use resistant varieties",
        "Practice crop rotation",
        "Remove and destroy infected plants",
        "Install pheromone traps for borers",
        "Avoid waterlogging"
      ],
      [
        "Spray neem oil or Bt for borer",
        "Apply streptocycline for bacterial wilt",
        "Remove little leaf affected plants",
        "Copper fungicide for fungal issues"
      ],
      [
        "Stage 1: Wilting of young leaves",
        "Stage 2: Bore holes in shoots/fruits",
        "Stage 3: Stunted growth with tiny leaves",
        "Stage 4: Plant death"
      ]
    )
  },

  chilli: {
    title: "Chilli - Vegetable",
    images: [
      "images/chilli1.jpg",
      "images/chilli2.jpg",
      "images/chilli3.jpg",
      "images/chilli4.jpg"
    ],
    content: getPlantContent(
      "Chilli plants are affected by anthracnose, leaf curl virus, and powdery mildew. Thrips and mites are major vectors. Good nursery management and pest control are vital.",
      [
        "Anthracnose (Fruit Rot)",
        "Leaf Curl Virus",
        "Powdery Mildew",
        "Die Back"
      ],
      [
        "Use virus‑free seeds",
        "Control thrips and mites",
        "Avoid overcrowding",
        "Mulch to reduce soil splash",
        "Remove infected plants"
      ],
      [
        "Apply neem oil or insecticidal soap",
        "Spray mancozeb for anthracnose",
        "Use yellow sticky traps",
        "Sulfur spray for mildew"
      ],
      [
        "Stage 1: Circular spots on fruits",
        "Stage 2: Leaf curling and yellowing",
        "Stage 3: Fruit rot and drop",
        "Stage 4: Plant defoliation"
      ]
    )
  },

  mango: {
    title: "Mango - Fruit",
    images: [
      "images/mango1.jpg",
      "images/mango2.jpg",
      "images/mango3.jpg",
      "images/mango4.jpg"
    ],
    content: getPlantContent(
      "Mango trees suffer from anthracnose, powdery mildew, and sooty mould. Humid conditions during flowering promote disease. Pruning and sanitation reduce inoculum.",
      [
        "Anthracnose",
        "Powdery Mildew",
        "Sooty Mould",
        "Mango Malformation"
      ],
      [
        "Prune to improve airflow",
        "Remove fallen leaves and mummies",
        "Avoid overhead irrigation",
        "Spray prophylactic fungicides at flowering",
        "Control insect vectors (hoppers, scales)"
      ],
      [
        "Apply copper oxychloride",
        "Use wettable sulfur for mildew",
        "Oil sprays for sooty mould",
        "Remove malformed panicles"
      ],
      [
        "Stage 1: Black spots on leaves and fruits",
        "Stage 2: White powdery coating on panicles",
        "Stage 3: Fruit drop with lesions",
        "Stage 4: Branch dieback"
      ]
    )
  },

  sapota: {
    title: "Sapota (Chikoo) - Fruit",
    images: [
      "images/sapota1.jpg",
      "images/sapota2.jpg",
      "images/sapota3.jpg",
      "images/sapota4.jpg"
    ],
    content: getPlantContent(
      "Sapota is prone to leaf spot, fruit rot, and pests like bud borer. Humid conditions and poor orchard hygiene increase disease pressure. Regular inspection helps early control.",
      [
        "Leaf Spot (Pestalotia)",
        "Fruit Rot",
        "Sooty Mould",
        "Bud Borer"
      ],
      [
        "Maintain orchard cleanliness",
        "Prune dead branches",
        "Avoid waterlogging",
        "Monitor for scale insects",
        "Use balanced fertilisers"
      ],
      [
        "Spray carbendazim for leaf spot",
        "Remove and destroy infected fruits",
        "Apply neem oil for pests",
        "Copper fungicide for fruit rot"
      ],
      [
        "Stage 1: Small brown spots on leaves",
        "Stage 2: Fruit softening with lesions",
        "Stage 3: Premature fruit drop",
        "Stage 4: Tree defoliation"
      ]
    )
  },

  guava: {
    title: "Guava - Fruit",
    images: [
      "images/guava1.jpg",
      "images/guava2.jpg",
      "images/guava3.jpg",
      "images/guava4.jpg"
    ],
    content: getPlantContent(
      "Guava is affected by wilt, anthracnose, and fruit fly. Wilt is a soil‑borne disease that can devastate orchards. Proper soil management and pest control are essential.",
      [
        "Guava Wilt",
        "Anthracnose",
        "Fruit Fly",
        "Algal Leaf Spot"
      ],
      [
        "Use resistant rootstocks",
        "Avoid planting in infected soil",
        "Bag fruits to prevent fruit fly",
        "Prune for sunlight penetration",
        "Maintain tree vigour"
      ],
      [
        "Apply Trichoderma for wilt control",
        "Spray copper fungicide",
        "Use protein bait for fruit fly",
        "Remove and destroy affected fruits"
      ],
      [
        "Stage 1: Yellowing and wilting of branches",
        "Stage 2: Dark, sunken spots on fruits",
        "Stage 3: Fruit maggots",
        "Stage 4: Tree death (wilt)"
      ]
    )
  },

  wheat: {
    title: "Wheat - Grain",
    images: [
      "images/wheat1.jpg",
      "images/wheat2.jpg",
      "images/wheat3.jpg",
      "images/wheat4.jpg"
    ],
    content: getPlantContent(
      "Wheat is susceptible to rusts, smuts, and powdery mildew. Cool, moist conditions favour rust development. Resistant varieties and timely fungicide application are key.",
      [
        "Stem Rust",
        "Leaf Rust",
        "Loose Smut",
        "Powdery Mildew"
      ],
      [
        "Use certified, treated seed",
        "Plant resistant varieties",
        "Avoid excessive nitrogen",
        "Rotate with non‑cereals",
        "Monitor field regularly"
      ],
      [
        "Apply fungicide (propiconazole) at early signs",
        "Remove and destroy infected plants",
        "Seed treatment with carboxin",
        "Use sulfur for mildew"
      ],
      [
        "Stage 1: Reddish‑brown pustules on stems/leaves",
        "Stage 2: Powdery spots on leaves",
        "Stage 3: Black heads (smut)",
        "Stage 4: Grain shrivelling and yield loss"
      ]
    )
  },

// Finger Millet (Ragi)
fingerMillet: {
  title: "Finger Millet (Ragi) - Grain",
  images: [
    "images/ragi1.jpg",
    "images/ragi2.jpg",
    "images/ragi3.jpg",
    "images/ragi4.jpg"
  ],
  content: getPlantContent(
    "Finger Millet (Ragi) is a highly nutritious and drought-resistant grain crop. However, it is commonly affected by blast disease, leaf spot and smut infections. Excess humidity, poor drainage and infected seeds increase disease risk. Proper spacing, resistant varieties and seed treatment significantly reduce disease incidence.",
    
    [
      "Blast Disease (Leaf, Neck & Finger Blast)",
      "Leaf Spot",
      "Smut",
      "Root Rot"
    ],
    
    [
      "Use certified and disease-free seeds",
      "Treat seeds with fungicide before sowing",
      "Maintain proper plant spacing",
      "Avoid excess nitrogen fertilizer",
      "Ensure good field drainage",
      "Practice crop rotation"
    ],
    
    [
      "Spray Carbendazim for blast control",
      "Use Mancozeb for leaf spot management",
      "Remove and destroy infected ear heads (smut)",
      "Apply Trichoderma in soil to prevent root rot"
    ],
    
    [
      "Stage 1: Small brown spots appear on leaves",
      "Stage 2: Diamond-shaped lesions enlarge (blast symptom)",
      "Stage 3: Infection spreads to neck and fingers",
      "Stage 4: Grain shriveling and reduced yield"
    ]
  )
},

  maize: {
    title: "Maize (Corn) - Grain",
    images: [
      "images/maize1.jpg",
      "images/maize2.jpg",
      "images/maize3.jpg",
      "images/maize4.jpg"
    ],
    content: getPlantContent(
      "Maize is affected by downy mildew, rust, and stem borer. Warm, humid weather favours fungal diseases. Integrated pest management and resistant hybrids are recommended.",
      [
        "Downy Mildew",
        "Common Rust",
        "Stem Borer",
        "Leaf Blight"
      ],
      [
        "Use resistant hybrids",
        "Treat seeds with fungicide",
        "Practice crop rotation",
        "Avoid water stress",
        "Monitor for borer eggs"
      ],
      [
        "Spray metalaxyl for downy mildew",
        "Apply carbofuran granules for borer",
        "Use mancozeb for leaf blight",
        "Remove infected plants"
      ],
      [
        "Stage 1: Chlorotic streaks on leaves",
        "Stage 2: Pustules on leaves (rust)",
        "Stage 3: Bore holes in stem",
        "Stage 4: Lodging and poor cob development"
      ]
    )
  }
};

//  COMMON TEMPLATE FUNCTION

function getPlantContent(about, diseases, precautions, solutions, stages){

let diseaseList = diseases.map(d => `<span>🌿 ${d}</span>`).join("");
let precautionList = precautions.map(p => `<span>🛡 ${p}</span>`).join("");
let solutionList = solutions.map(s => `<span>💊 ${s}</span>`).join("");
let stageList = stages.map(st => `<p>${st}</p>`).join("");

return `

<div class="info-box cause">
<h3>🌧 Why Diseases Occur</h3>
<p>${about}</p>
</div>

<div class="info-box precaution">
<h3>🛡 Common Diseases</h3>
<div class="points">${diseaseList}</div>
</div>

<div class="info-box precaution">
<h3>🛡 Prevention Strategy</h3>
<div class="points">${precautionList}</div>
</div>

<div class="info-box solution">
<h3>💊 Treatment Plan</h3>
<div class="points">${solutionList}</div>
</div>

<div class="info-box stage">
<h3>📅 Disease Progression</h3>
${stageList}
</div>

`;
}


// URL PARAM LOGIC SAME

const params = new URLSearchParams(window.location.search);
const plant = params.get("plant");

if (plantData[plant]) {

document.getElementById("plantTitle").innerText = plantData[plant].title;
document.getElementById("plantContent").innerHTML = plantData[plant].content;

const imageContainer = document.getElementById("plantImages");
imageContainer.innerHTML = "";

plantData[plant].images.forEach(function(img){
let image = document.createElement("img");
image.src = img;
imageContainer.appendChild(image);
});

}