let plants = JSON.parse(localStorage.getItem("plants")) || [];

function addPlant(){
    const name = document.getElementById("plantName").value;
    const waterDays = parseInt(document.getElementById("waterDays").value);
    const fertilizerDays = parseInt(document.getElementById("fertilizerDays").value);

    if(!name || !waterDays || !fertilizerDays){
        alert("Fill all fields");
        return;
    }

    plants.push({
        name,
        waterDays,
        fertilizerDays,
        lastWatered: new Date(),
        addedDate: new Date()
    });

    localStorage.setItem("plants", JSON.stringify(plants));

    document.getElementById("plantName").value="";
    document.getElementById("waterDays").value="";
    document.getElementById("fertilizerDays").value="";

    displayPlants();
}

function displayPlants(){
    const list = document.getElementById("plantList");
    list.innerHTML="";

    plants.forEach((plant,index)=>{

        const today = new Date();
        const lastWatered = new Date(plant.lastWatered);

        const diff = Math.floor((today - lastWatered)/(1000*60*60*24));
        const remaining = plant.waterDays - diff;
        const fertilizerRemaining = plant.fertilizerDays - diff;

        let statusClass="";
        let statusText="";

        if(remaining > 2){
            statusClass="green";
            statusText="Healthy";
        }else if(remaining > 0){
            statusClass="orange";
            statusText="Water Soon";
        }else{
            statusClass="red";
            statusText="Overdue";
        }

        const progress = Math.min((diff/plant.waterDays)*100,100);

        list.innerHTML += `
        <div class="card">
            <span class="status ${statusClass}">${statusText}</span>
            <h2>${plant.name}</h2>

            <p><b>💧 Next Watering:</b> ${
                remaining>0 ? remaining+" days left" :
                "Overdue by "+Math.abs(remaining)+" days"
            }</p>

            <p><b>🌅 Suggested Time:</b> Water early morning (6AM-8AM) or evening (5PM-7PM)</p>

            <p><b>🌱 Fertilizer:</b> ${
                fertilizerRemaining>0 ?
                fertilizerRemaining+" days left" :
                "Apply fertilizer now"
            }</p>

            <div class="progress">
                <div class="progress-fill" style="width:${progress}%"></div>
            </div>
            <p>${Math.floor(progress)}% of watering cycle completed</p>

            <button onclick="resetWater(${index})">Mark as Watered</button>
        </div>
        `;
    });
}

function resetWater(index){
    plants[index].lastWatered = new Date();
    localStorage.setItem("plants", JSON.stringify(plants));
    displayPlants();
}

function clearAll(){
    localStorage.removeItem("plants");
    plants=[];
    displayPlants();
}

displayPlants();