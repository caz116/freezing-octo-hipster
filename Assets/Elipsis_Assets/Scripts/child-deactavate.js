#pragma strict
/*
This Script Is Used for deatavatung the childern alfter the expltion has be started
The Script De-renders the object leaving the collition box and the explotion prefabs intack
This also helps with the blast radious that will be incoporated
*/
function Start () {

}

function Update () {

	if(MothershipCont.toggled)
		{
			renderer.enabled = false;
		}
}