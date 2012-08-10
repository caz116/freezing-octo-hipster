#pragma strict

/*
	recreats the ship alfter it has exploded the scipt will also server as a respawn script for the player
*/
static var ifdead = false;

	function Start () 
	{
		ifdead = false;
	}

var ship : Transform;
function Update () 
	{
		create();
		ifdead=false;
		
	}
	
	function create ()
		{
			if(ifdead)
				{
					yield WaitForSeconds (5);
					Instantiate (ship, Vector3(Random.Range(0,20), Random.Range(0,20), Random.Range(0,20)), Quaternion.identity);
					ifdead = false;
				}
		}