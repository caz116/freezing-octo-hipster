
function Update () {
	if(Input.GetKeyDown("w")){
		animation.Play("WalkShake");
	}
	if(Input.GetKeyDown("x"))
	{
	animation.Play("MechVReset", PlayMode.StopAll);
	}
}