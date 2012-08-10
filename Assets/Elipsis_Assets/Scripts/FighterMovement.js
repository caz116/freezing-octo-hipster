#pragma strict
var Mspd = 1.0;
var spd = 0.0;
var calcspeed = 0;
var Speed = 255;
function Start () {
	Speed = 260;

}

function Update () {
	calcspeed = spd * 10;
	calcspeed = calcspeed * 25;
	print(calcspeed);
	
 if(Input.GetKeyDown("w")) {
 	if(spd < Mspd) {
		//Speed = Speed - 25;
 		spd+=0.1;
 	}
 }
 if(Input.GetKeyDown("s")) {
 	if(spd > 0.1) {
		//Speed = Speed + 25;
 		spd-=0.1;
 	}

 }
 Speed = 260 -	 calcspeed;
 transform.Translate(0,0,spd, Space.Self);
}

//Display Of Speed Nice GUI Ver
var Pointer : Texture2D;
var Scale : Texture2D;
var pd = 100;
function OnGUI () {
    GUI.Label (Rect (50, Speed, Pointer.width, Pointer.height),Pointer);//Pointer
	GUI.Label (Rect (20, 40, Scale.width, Scale.height),Scale);//Scale
}