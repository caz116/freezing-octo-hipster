#pragma strict
var Mspd = 1.0;
var spd = 0.0;
function Start () {

}

function Update () {
 if(Input.GetKeyDown("e")) {
 	if(spd < Mspd) {
 		spd+=0.1;
 	}
 }
 if(Input.GetKeyDown("q")) {
 	if(spd > 0.0) {
 		spd-=0.1;
 	}
 }
 transform.Translate(0,0,spd, Space.Self);
}