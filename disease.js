function searchDisease() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
// Open file chooser
function triggerUpload(){
    document.getElementById("imageUpload").click();
}

// When image selected → detect & redirect
document.getElementById("imageUpload").addEventListener("change", function(event){

    const file = event.target.files[0];

    if(!file){
        alert("Please upload an image.");
        return;
    }

    // Simulated AI Detection (you can improve later)
    const diseases = [
        { name:"powdery", keywords:["white","powder"] },
        { name:"leafspot", keywords:["spot","dot","brown"] },
        { name:"downy", keywords:["yellow","patch"] },
        { name:"blight", keywords:["dry","burn"] },
        { name:"rust", keywords:["orange","rust"] }
    ];

    // For now random detection simulation
    const random = diseases[Math.floor(Math.random()*diseases.length)];

    // Redirect directly to details page
    window.location.href = "details.html?disease=" + random.name;
});