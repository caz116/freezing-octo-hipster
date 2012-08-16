var throttle = 0.0; // Current throttle level... Duh!
var Tinc = 0.1;      //mech (standard) throttle increase
var mechmaxs = 1; //mech max speed
var mechRotMax = 0.6; //Mech's speed of turning


function Update (){
	if(Input.GetKeyDown("w")){
		if(throttle < mechmaxs){
			throttle+=Tinc;
		}
	}
	if(throttle > 0){
		transform.Translate(0,0,throttle, Space.Self);
	}
	if(Input.GetKeyDown("x")){
		throttle = 0;
	}
	if(Input.GetKey("a")){
		transform.Rotate(0,-mechRotMax,0,Space.Self);
	}
	if (Input.GetKey("d")){
		transform.Rotate(0,mechRotMax,0,Space.Self);
	}
 }
