// some variables that we gonna use in this demo  
var initId = 0;  
 
var world;  
var ctx;  
var canvasWidth;  
var canvasHeight;  

var stepping = false;  
var timeStep = 1.0/60;  
var iteration = 1;


function initGame()
{  
    //Creates level
    createLevel(0);
}

function Update()
{   
    Update_Input();
    Update_Logic();
    Update_Physics();
    Update_Graphics();
    
    setTimeout('Update()', 10);  
}

// HTML5 onLoad event  
Event.observe(window, 'load', function() {  
    world = createWorld(); // box2DWorld  
    ctx = $('game').getContext('2d'); // 2
    var canvasElm = $('game');  
    canvasWidth = parseInt(canvasElm.width);  
    canvasHeight = parseInt(canvasElm.height);  
    initGame(); // 3  
    Update(); // 4  
// 5  
    window.addEventListener('keydown',handleKeyDown,true);  
    window.addEventListener('keyup',handleKeyUp,true);  
});  