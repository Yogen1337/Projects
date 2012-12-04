var player = function(){  
    this.object = null;  
    this.canJump = false;
    this.inAir = true;
    this.isWallJump = false;
    this.size = 12;
}; 

var objectList = [];
var objectPropertyList = [];

function createObject(type, position) 
{
    var newObj;
    var ballSd;
    var ballBd;
    
    if(type == "player")
    {
        ballSd = new b2CircleDef();  
        ballSd.density = 0.2;  
        ballSd.radius = 12;  
        ballSd.restitution = 0.2;  
        ballSd.friction = 1;  
        ballSd.userData = type;
        
        ballBd = new b2BodyDef();  
        ballBd.linearDamping = .02;  
        ballBd.allowSleep = false;  
        ballBd.AddShape(ballSd);  
        ballBd.position.Set(position.x,position.y);
        newObj = world.CreateBody(ballBd);
    }
    else if(type == "enemy")
    {
        ballSd = new b2CircleDef();  
        ballSd.density = 0.4;  
        ballSd.radius = 24;  
        ballSd.restitution = 0.2;  
        ballSd.friction = 1;  
        ballSd.userData = type;
        
        ballBd = new b2BodyDef();  
        ballBd.linearDamping = .02;  
        ballBd.allowSleep = false;  
        ballBd.AddShape(ballSd);  
        ballBd.position.Set(position.x,position.y);
        newObj = world.CreateBody(ballBd);
    }
    else if(type == "bullet")
    {
        ballSd = new b2CircleDef();  
        ballSd.density = 0.1;  
        ballSd.radius = 6;  
        ballSd.restitution = 1.0;  
        ballSd.friction = 1;  
        ballSd.userData = type;
        
        ballBd = new b2BodyDef();  
        ballBd.linearDamping = 1.0;  
        ballBd.allowSleep = false;  
        ballBd.AddShape(ballSd);  
        ballBd.position.Set(position.x,position.y);
        newObj = world.CreateBody(ballBd);
    }
    
    objectList.push(ballSd);
    objectPropertyList.push(newObj);
    return newObj;
}