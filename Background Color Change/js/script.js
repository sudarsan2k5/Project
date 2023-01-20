
function changeColor(){
    const r = parseInt(Math.random() * 256);
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256);
    const a = Math.random();
    document.body.style.background = "rgb(" + r + "," + g + "," + b + "," + a +")";
    
}