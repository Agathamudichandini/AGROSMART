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
"Roses are highly sensitive to fungal infections especially in humid climates.",
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
"Stage 1: Small black spots",
"Stage 2: Yellowing leaves",
"Stage 3: Leaf drop & weak flowering"
]
)
},

tomato: {
title: "Tomato - Vegetable",
images: [
"images/tomato1.jpg",
"images/tomato2.jpg",
"images/tomato3.jpg"
],
content: getPlantContent(
"Tomato crops suffer mostly from fungal and viral infections due to excess moisture.",
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

jasmine: {
title: "Jasmine - Flower",
images: [
"images/jasmine1.jpg",
"images/jasmine2jpg.jpg",
"images/jasmine.jpg",
"images/jasmine3.jpg"
],
content: getPlantContent(
"Jasmine plants require balanced watering and good sunlight to prevent fungal growth.",
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
"images/hibiscus2.jpg"
],
content: getPlantContent(
"Hibiscus is prone to pest attacks and fungal issues in humid weather.",
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
}

};

// 🔥 COMMON TEMPLATE FUNCTION

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