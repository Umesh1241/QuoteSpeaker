const qut=$(".quote");
const aut=$(".author");
const category=$(".category");
const btn=$(".btn");
const spk=$(".spk");

async function generateQuote(){
    try{
    let quote=await fetch("https://api.quotable.io/quotes/random");
    let data=await quote.json();
    qut.text(data[0].content);
    aut.text("AUTHOR: "+data[0].author);
    category.text(" "+"CATEGORY: "+data[0].tags);
    }
    catch(err){
        console.error(err);
    }
}

function speakText(){
    let msg=qut.text()+","+aut.text()+","+category.text();
    const utter=new SpeechSynthesisUtterance(msg);
    let voice=window.speechSynthesis.getVoices();
    utter.voice=voice[0];
    window.speechSynthesis.speak(utter);
}

btn.on('click',generateQuote);
spk.on('click',speakText);



