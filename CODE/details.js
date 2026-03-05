const data = {
  powdery: {
    title: "Powdery Mildew",
    image: "images/powderymildew.png",
    content: `
<h3>Why It Occurs</h3>
<p>Caused by fungal infection due to high humidity and poor air circulation.</p>

<h3>0–15 Days</h3>
<p>White powder-like coating appears on leaves and stems.</p>

<h3>15–30 Days</h3>
<p>Leaves start yellowing and curling.</p>

<h3>30+ Days</h3>
<p>Severe leaf drop and reduced plant growth.</p>

<h3>Precautions</h3>
<ul>
<li>Provide good air circulation</li>
<li>Avoid overcrowding plants</li>
<li>Do not overwater</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Spray neem oil weekly</li>
<li>Use sulfur-based fungicide</li>
</ul>

<h3>Good Measures</h3>
<p>Regular inspection and early treatment prevents spread.</p>
`
  },

  leafspot: {
    title: "Leaf Spot",
    image: "images/black spot.png",
    content: `
<h3>Why It Occurs</h3>
<p>Fungal or bacterial infection due to wet leaves.</p>

<h3>0–15 Days</h3>
<p>Small dark or brown spots appear.</p>

<h3>15–30 Days</h3>
<p>Spots enlarge and spread.</p>

<h3>30+ Days</h3>
<p>Leaves dry and fall off.</p>

<h3>Precautions</h3>
<ul>
<li>Avoid water staying on leaves</li>
<li>Remove infected leaves</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Apply fungicide spray</li>
<li>Improve drainage</li>
</ul>

<h3>Good Measures</h3>
<p>Water plants at soil level instead of overhead watering.</p>
`
  },

  blight: {
    title: "Blight",
    image: "images/tomatoblight.png",
   content: `
<h3>Why It Occurs</h3>
<p>Caused by fungal infection, especially in wet weather.</p>

<h3>0–15 Days</h3>
<p>Brown patches appear on leaves.</p>

<h3>15–30 Days</h3>
<p>Stem infection begins.</p>

<h3>30+ Days</h3>
<p>Plant may die if untreated.</p>

<h3>Precautions</h3>
<ul>
<li>Ensure proper plant spacing</li>
<li>Remove infected parts quickly</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Use copper fungicide</li>
<li>Improve soil drainage</li>
</ul>

<h3>Good Measures</h3>
<p>Use resistant plant varieties.</p>
`
  },

  botrytis: {
    title: "Botrytis Blight",
    image: "images/Botrytis blight.png",
    content: `
<h3>Why It Occurs</h3>
<p>Gray mold fungus spreads in cool, moist conditions.</p>

<h3>0–15 Days</h3>
<p>Gray mold appears on flowers.</p>

<h3>15–30 Days</h3>
<p>Soft rot spreads rapidly.</p>

<h3>30+ Days</h3>
<p>Severe damage to plant tissues.</p>

<h3>Precautions</h3>
<ul>
<li>Avoid overcrowding</li>
<li>Keep leaves dry</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Remove infected areas</li>
<li>Apply organic fungicide</li>
</ul>

<h3>Good Measures</h3>
<p>Ensure sunlight exposure.</p>
`
  },

  verticillium: {
    title: "Verticillium Wilt",
    image: "images/Verticillium wilt.png",
  content: `
<h3>Why It Occurs</h3>
<p>Soil-borne fungal infection affecting roots.</p>

<h3>0–15 Days</h3>
<p>Lower leaves turn yellow.</p>

<h3>15–30 Days</h3>
<p>Wilting spreads upward.</p>

<h3>30+ Days</h3>
<p>Plant becomes weak and may die.</p>

<h3>Precautions</h3>
<ul>
<li>Crop rotation</li>
<li>Use disease-resistant plants</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Improve soil health</li>
<li>Remove infected plants</li>
</ul>

<h3>Good Measures</h3>
<p>Maintain healthy soil microorganisms.</p>
`
  },

  fusarium: {
    title: "Fusarium Wilt",
    image: "images/Fusarium Wilt.png",
content: `
<h3>Why It Occurs</h3>
<p>Soil fungus infects plant roots.</p>

<h3>0–15 Days</h3>
<p>Leaves show yellowing.</p>

<h3>15–30 Days</h3>
<p>Wilting becomes noticeable.</p>

<h3>30+ Days</h3>
<p>Plant collapses.</p>

<h3>Precautions</h3>
<ul>
<li>Avoid overwatering</li>
<li>Use clean gardening tools</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Improve drainage</li>
<li>Use resistant varieties</li>
</ul>

<h3>Good Measures</h3>
<p>Solarize soil before planting.</p>
`
  },

  rust: {
    title: "Rust Disease",
    image: "images/rust.png",
    content: `
<h3>Why It Occurs</h3>
<p>Fungal spores spread in humid weather.</p>

<h3>0–15 Days</h3>
<p>Orange or yellow spots appear.</p>

<h3>15–30 Days</h3>
<p>Spots spread under leaves.</p>

<h3>30+ Days</h3>
<p>Leaves dry and fall.</p>

<h3>Precautions</h3>
<ul>
<li>Provide good sunlight</li>
<li>Avoid wet leaves</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Apply sulfur spray</li>
<li>Remove affected leaves</li>
</ul>

<h3>Good Measures</h3>
<p>Maintain plant hygiene.</p>
`
  },

  downy: {
    title: "Downy Mildew",
    image: "images/downymildew.png",
    content: `
<h3>Why It Occurs</h3>
<p>Caused by fungus-like organism in humid conditions.</p>

<h3>0–15 Days</h3>
<p>Yellow patches appear.</p>

<h3>15–30 Days</h3>
<p>Gray fuzz develops under leaves.</p>

<h3>30+ Days</h3>
<p>Severe leaf drop occurs.</p>


<h3>Precautions</h3>
<ul>
<li>Improve air flow</li>
<li>Avoid excess moisture</li>
</ul>

<h3>Solutions</h3>
<ul>
<li>Use fungicide treatment</li>
<li>Prune infected areas</li>
</ul>

<h3>Good Measures</h3>
<p>Water plants early morning.</p>
`
  }
};

const params = new URLSearchParams(window.location.search);
const disease = params.get("disease");

if (data[disease]) {
  document.getElementById("diseaseTitle").innerText = data[disease].title;
  document.getElementById("diseaseImage").src = data[disease].image;
  document.getElementById("diseaseContent").innerHTML = data[disease].content;
}
