#pragma strict
/*
	This script creats an explotion this is currently a test script
	a variaion of this script could be used for other detonaton scripts later in the development
*/
var namem = 1;
static var toggled = false;
function Start () {
toggled = false;
renderer.enabled = true;
name = name + namem +"1";
	Recreateship.ifdead = false;

}
function Update () {
 if(Input.GetKeyDown("p")) {
 	gameObject.GetComponent(Detonator).Explode(); 
	toggled = true;
	Recreateship.ifdead = true;
 	Destroy(gameObject, 3);
 }
}