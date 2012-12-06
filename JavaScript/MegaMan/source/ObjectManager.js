var player = function(){
        this.type = "none";
        this.object = null;
        this.canJump = false;
        this.inAir = false;
        this.isWallJump = false;
        this.size = 12;
    }
var objectList = [];
var objectPropertyList = [];

function createObject(type, position) 
{
    var gameObject = function(){
        this.type = "none";
        this.object = null;
        this.canJump = false;
        this.inAir = false;
        this.isWallJump = false;
        this.size = new Object();
    }
    var ballSd;
    var ballBd;
    
    gameObject.type = type;
    
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
        
        gameObject.object = world.CreateBody(ballBd);
    }
    else if(type == "enemy")
    {
        ballSd = new b2CircleDef();  
        ballSd.density = 0.4;  
        ballSd.radius = 28;  
        ballSd.restitution = 0.2;  
        ballSd.friction = 1;  
        ballSd.userData = type;
        
        ballBd = new b2BodyDef();  
        ballBd.linearDamping = .02;  
        ballBd.allowSleep = false;  
        ballBd.AddShape(ballSd);  
        ballBd.position.Set(position.x,position.y);
        
        gameObject.object = world.CreateBody(ballBd);
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
        
        gameObject.object = world.CreateBody(ballBd);
    }
    else
    {
        var size = new Object();
        
        if(type == 'ground')
        {
            size.x = 775;
            size.y = 10;
        }
        else if(type == 'wall')
        {
            size.x = 10;
            size.y = 380;
        }
        
        gameObject.object = createBox(world, position.x, position.y, size.x, size.y, true, type);
        gameObject.size = size;
    }
    
    objectList.push(ballSd);
    objectPropertyList.push(gameObject);
    
    return gameObject;
}