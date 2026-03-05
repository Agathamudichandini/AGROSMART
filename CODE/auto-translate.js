function setLanguage(lang) {
    localStorage.setItem("siteLang", lang);
    translatePage(lang);
}

async function translatePage(lang) {

    if(lang === "en"){
        location.reload();
        return;
    }

    const elements = document.querySelectorAll("body *:not(script):not(style)");

    for (let el of elements) {
        if (el.children.length === 0 && el.innerText.trim() !== "") {

            let text = el.innerText;

            try {
                const response = await fetch(
                    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`
                );

                const data = await response.json();
                el.innerText = data[0][0][0];

            } catch (error) {
                console.log("Translation error:", error);
            }
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLang");
    if(savedLang){
        translatePage(savedLang);
    }
});