function Update_Logic()
{
    
}

function fireWeapon(obj)
{
    var spawnPos = new Object();
    spawnPos.x = obj.m_position.x + 20;
    spawnPos.y = obj.m_position.y;
    
    var bullet = createObject('bullet',spawnPos);  
    var vel = bullet.GetLinearVelocity();
    vel.x = 100;
    bullet.SetLinearVelocity(vel);
}