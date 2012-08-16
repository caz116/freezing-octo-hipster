var movetime = false;
var legMoving = 0; //0 = right leg is moving 1 = left leg, decided not to go for a bool as the switch didn't seem to like it.
var shakeDeg = 1.5;

function Update () {
	if(Input.GetKeyDown("w")){
		movetime = true; // Stop: movin time...
		   while(movetime){
			Shakeit();
   }
	}
	if(Input.GetKeyDown("x")){
		movetime = false;
		Shakeit();
	}
	}


function Shakeit(){
	switch(legMoving){
		case 1 :
			transform.Rotate(0,0,shakeDeg, Space.Self);
			yield WaitForSeconds(1);
			transform.Rotate(0,0,-shakeDeg,Space.Self);
			break;
		default :
			transform.Rotate(0,0,-shakeDeg, Space.Self);
			yield WaitForSeconds(1);
			transform.Rotate(0,0,shakeDeg, Space.Self);
			break;
	}
}