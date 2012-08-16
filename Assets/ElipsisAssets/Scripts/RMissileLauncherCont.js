var projectile : Transform;
var L1point : Transform;

function Update () {
	if(Input.GetButtonDown("Fire1")){
		LPoint = Instantiate(projectile,transform.position, transform.rotation);
		 LPoint.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
}