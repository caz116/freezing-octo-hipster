#pragma strict
var Mspd = 1.0;
var spd = 0.0;
function Start () {

}

function Update () {
 if(Input.GetKeyDown("w")) {
 	if(spd < Mspd) {
 		spd+=0.1;
 	}
 }
 if(Input.GetKeyDown("s")) {
 	if(spd > 0.0) {
 		spd-=0.1;
 	}
 }
 transform.Translate(0,0,spd, Space.Self);
}
var la = spd;
function OnGUI (){
		 GUI.Label (Rect (10, 10, 100, 20), "Speed : " + spd);
	}