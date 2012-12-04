var level0Src = 'assets/background.png';
var curLevel;

function createLevel(level)
{
    curLevel = level;
    
    var imageObj = new Image();
          
    switch(level)
    {
        case 0:
            {
                loadLevel_0();
                break;
            }
    }
            
    var levelToLoad = new Kinetic.Image({
                      x: 0,
                      y: 0,
                      image: imageObj,
                      width: 1280,
                      height: 555
                    });
    
    return levelToLoad;
}
            
                    
function loadLevel_0()
{
    createBox(world, 5, 400, 775, 10, true, 'ground');
    createBox(world, 785, 10, 10, 380, true, 'wall');
    createBox(world, 10, 10, 10, 380, true, 'wall');
    // create player
    var position = new Object();
    position.x = 20;
    position.y = 0;
            
    player.object = createObject('player', position);
    player.speed = 100;
    player.inAir = true;
    
    position.x += 600;
    var enemy = createObject('enemy',position);
}