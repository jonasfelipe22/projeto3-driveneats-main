function seleciona(rec){
    const box = document.querySelector(".prato").children;
    box[rec-1].classList.add('margem');
    let bot = box[rec-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
            q=1;
        }
    }
    baotaoVerde(q,v,t);
    return rec;
}
function seleciona1(rec1){
    const box = document.querySelector(".prato1").children;
    box[rec1-1].classList.add('margem');
    let bot = box[rec1-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec1-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
            v=1;
        }
    }
    return rec1;
}

function seleciona2(rec2){
    const box = document.querySelector(".prato2").children;
    box[rec2-1].classList.add('margem');
    let bot = box[rec2-1].querySelector(".botve");
    bot.classList.remove('a');
    for (let i = 0; i < 4; i++) {
        if(i!==rec2-1){
            box[i].classList.remove('margem');
            let bo = box[i].querySelector(".botve");
            bo.classList.add('a');
        }
        t=1;
    }
    baotaoVerde(q,v,t);
    return rec2;
}
var j= document.getElementById("Final");
function baotaoVerde(q,v,t){
    if(q==1 && v==1 && t==1){
            console.log("peidei")
            j.classList.toggle("margem");
    }
}    

function Obrigado(){
 alert("!!Obrigado por comprar com agente!!");
}    