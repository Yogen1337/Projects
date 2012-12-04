var collision;

function Update_Physics()
{
    world.Step(timeStep, iteration);
    
    collision = world.m_contactList;
    
    player.canJump = false;
    if (collision != null)
    {
        if (collision.GetShape1().GetUserData() == 'player' || collision.GetShape2().GetUserData() == 'player')
        {
            var playerObj = (collision.GetShape1().GetUserData() == 'player' ? collision.GetShape1(): collision.GetShape2());
            checkGroundCollision(playerObj);
            checkWallCollision(playerObj);
            checkEnemyCollision(playerObj);
        }
        
        if (collision.GetShape1().GetUserData() == 'bullet' || collision.GetShape2().GetUserData() == 'bullet')
        {
            var bulletObj = (collision.GetShape1().GetUserData() == 'bullet' ? collision.GetShape1() : collision.GetShape2());
            checkEnemyCollision(bulletObj);
        }
    }
}

function checkGroundCollision(type)
{
    if ((collision.GetShape1().GetUserData() == 'ground' || collision.GetShape2().GetUserData() == 'ground'))
    {
        var groundObj = (collision.GetShape1().GetUserData() == 'ground' ? collision.GetShape1().GetPosition() : collision.GetShape2().GetPosition());
        if (type.GetPosition().y <= groundObj.y)
        {
            player.inAir = false;
            player.canJump = true;
        }
    }
}

function checkWallCollision(type)
{
    if ((collision.GetShape1().GetUserData() == 'wall' || collision.GetShape2().GetUserData() == 'wall'))
    {
        if(player.inAir && player.isWallJump == false)
        {
            player.isWallJump = true;
        }
    }
}

function checkEnemyCollision(type)
{
    //If player and enemy collided
    if ((collision.GetShape1().GetUserData() == 'enemy' || collision.GetShape2().GetUserData() == 'enemy'))
    {
        switch(type.GetUserData())
        {
            case 'player':
            {
                player.canJump = true;
                break;
            }
            case 'bullet':
            {
                
                break;
            }
        }
    }
}