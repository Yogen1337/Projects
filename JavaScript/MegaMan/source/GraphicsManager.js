var playerImage = new Image();
playerImage.src = "assets/player.png";
var enemyImage = new Image();
enemyImage.src = "assets/enemy.png";
function Update_Graphics( )
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);  
    renderObjects(world, ctx);
    drawWorld(world, ctx);
}

function renderObjects(world, ctx)
{
    for(var i = 0; i < objectList.length; ++i)
    {
        if(objectList[i].userData == "player")
        {
            var position = player.object.GetCenterPosition();
            //position.x -= player.size;
            //position.y -= player.size;
            ctx.drawImage(playerImage, 0, 0, 32, 32, position.x, position.y, 32, 32);
        }
    }
}