let title=document.querySelector(".title");
let beginning=document.querySelector(".story-opening");
let leftGateScreen=document.querySelector(".left-gate-screen");
let leftGateButton=document.querySelector(".left-gate-button")
let rightGateButton=document.querySelector(".right-gate-button");
let rightGateScreen=document.querySelector(".right-gate-screen");
let goBack=document.querySelector(".go-back");
let speedUp=document.querySelector(".speed-up");
let slowDown=document.querySelector(".slow-down");
let intersection=document.querySelector(".intersection");
let deviate=document.querySelector(".deviate");
let stayWithGPS=document.querySelector(".stayWithGPS");
let waitJam=document.querySelector(".waitJam");
let stayFood=document.querySelector(".stayFood");
let food=document.querySelector(".food");
let goHome=document.querySelector(".goHome");
let foodScreen=document.querySelector(".foodScreen");
let chickfila=document.querySelector(".chickfila");
let burgerKing=document.querySelector(".burgerKing");
let mcdonalds=document.querySelector(".mcdonalds");
let chicagos=document.querySelector(".Chicagos-Pizza");
let home=document.querySelector(".home");
let homeFood=document.querySelector(".homeFood");
let intersectionJam=document.querySelector(".intersectionJam");
let chicagosPizza=document.querySelector(".chicagosPizza");


rightGateButton.addEventListener('click', function(){
    beginning.style.display = 'none';
    rightGateScreen.style.display='block';
});

leftGateButton.addEventListener('click', function(){
    beginning.style.display = 'none';
    leftGateScreen.style.display='block';
});

speedUp.addEventListener('click', function(){
    leftGateScreen.style.display='none';
    intersection.style.display='block';
});

deviate.addEventListener('click', function(){
    intersection.style.display='none';
    waitJam.style.display='block';
})

slowDown.addEventListener('click', function(){
    leftGateScreen.style.display='none';
    intersectionJam.style.display='block';
})

goHome.addEventListener('click', function(){
    stayFood.style.display='none';
    home.style.display='block';
})

food.addEventListener('click', function(){
    stayFood.style.display='none';
    foodScreen.style.display='block';
})

stayWithGPS.addEventListener('click', function(){
    intersection.style.display='none';
    stayFood.style.display='block';
})

chicagos.addEventListener('click', function(){
    chicagosPizza.style.display='block';
    stayFood.style.display='none';
})

chickfila.addEventListener('click', function(){
    stayFood.style.display='none';
    homeFood.style.display='block'
})




