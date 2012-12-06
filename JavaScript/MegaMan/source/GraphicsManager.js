var playerImage = new Image();
playerImage.src = "assets/player.png";

var enemyImage = new Image();
enemyImage.src = "assets/enemy.png";

var wallImage = new Image();
wallImage.src = "assets/wall.png";

function Update_Graphics( )
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);  
    renderObjects(world, ctx);
    drawWorld(world, ctx);
}

function renderObjects(world, ctx)
{
    for(var i = 0; i < objectPropertyList.length; ++i)
    {
        var curObject = objectPropertyList[i];
        var position = curObject.object.GetCenterPosition();
        var curImage = new Image();
        var curSize = new Object();
        
        switch(curObject.type)
        {
            case "player":
            {
                curImage = playerImage;
                curSize.x = 32;
                curSize.y = 32;
                ctx.drawImage(curImage, 0, 0, curSize.x, curSize.y, position.x - curSize.x/2, position.y - curSize.y/2, curSize.x, curSize.y);
                break;
            }
            case "enemy":
            {
                curImage = enemyImage;
                curSize.x = 64;
                curSize.y = 64;
                ctx.drawImage(curImage, 0, 0, curSize.x, curSize.y, position.x - curSize.x/2, position.y - curSize.y/2, curSize.x, curSize.y);
                break;   
            }
            case "wall":
            {
                curImage = wallImage;
                //curSize.x = 785;
                //curSize.y = 10;
                ctx.drawImage(curImage, 0, 0, 256, 256, position.x - 10, position.y - 10, 20, 390);
                break;
            }
            case "ground":
            {
                curImage = wallImage;
                //curSize.x = 256;
                //curSize.y = 256;
                ctx.drawImage(curImage, 0, 0, 256, 256, position.x - 10, position.y - 10, 785, 20);
                break;
            }
        }
        
    }
}