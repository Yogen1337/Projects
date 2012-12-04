var keyBuffer = [];

var keyComboBuffer = [];

var keys = [];  

var currentKey = new Object();

var lastKey = new Object();

lastKey.time = 0;

var comboTimeThreshold = 100;

var keyPressed = false;

var potentialDouble = false
    
var movementMultiplier = 1;

var A = 65;

var D = 68;

var S = 83;

var W = 87;

var Space = 32;

var doubleTap = false;

function Update_Input( )
{
    if(keyPressed)
    {
        var dt = currentKey.time - lastKey.time;
        
        if(dt <= comboTimeThreshold && dt > 0 && potentialDouble)
        {
            doubleTap = true;
            movementMultiplier = 3;
        }
        else
        {
            doubleTap = false;
            movementMultiplier = 1;
        }
        
        playerMove();
    }
}

function playerMove()
{    
    var vel = player.object.GetLinearVelocity();
    
    if (keys[W])
    {
        if(player.canJump)
        {
            //Check if double jump active
            if(player.inAir == false)
            {
                vel.y = -300;
                player.inAir = true;
            }
            else if(doubleTap == true && player.inAir == true)
            {
                vel.y = -100;
                player.canJump = false;
            }
        }
    }
    
    if(keys[S])
    {
        if(player.inAir)
        {
            vel.y = 800;
        }
    }
    
    if (keys[A])
    {
        vel.x = -player.speed * movementMultiplier;
    }
    
    if (keys[D])
    {
        vel.x = player.speed * movementMultiplier;
    }
    
    /*
        if(keys[Space] && doFire)
        {
            fireWeapon(player.object);
            doFire = false;
        }
    */
    
    player.object.SetLinearVelocity(vel);
}

function checkKeyCode(key)
{
    switch(key)
    {
        case A:
            return A;
        case D:
            return D;
        case S:
            return S;
        case W:
            return W;
    }
}
            

function handleKeyDown(evt)
{
    if(lastKey.key == currentKey.key)
    {
        potentialDouble = true;
    }
    keyPressed = true;
    keys[evt.keyCode] = true;
    currentKey.key = checkKeyCode(evt.keyCode);
    currentKey.time = new Date().getTime();
}


function handleKeyUp(evt)
{
    potentialDouble = false; 
    keyPressed = false;
    keys[evt.keyCode] = false;
    lastKey.key = checkKeyCode(evt.keyCode);
    lastKey.time = new Date().getTime();
    doFire = true;
}