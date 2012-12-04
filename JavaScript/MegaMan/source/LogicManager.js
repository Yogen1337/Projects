function Update_Logic()
{
    for(var i = 0; i < objectList.length; ++i)
    {
        var obj = objectList[i];
        if(obj.userData == "bullet")
        {
          var vel = objectPropertyList[i].GetLinearVelocity();  
          vel.x = 100;
          objectPropertyList[i].SetLinearVelocity(vel);
        }
    }
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