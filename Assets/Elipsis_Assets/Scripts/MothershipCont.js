#pragma strict

function Start () {

}
function Update () {
 if(Input.GetKeyDown("p")) {
 	gameObject.GetComponent(Detonator).Explode(); 
 	Destroy(gameObject, 0.5);
 }
}