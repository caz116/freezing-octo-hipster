var thrusterThrust = 1000;
var explosionPrefab : Transform;
var primed = 0;
var burnrate = 1; // 1 = Ideal burn rate of fuel, 2 = Fuel burnrate is more rapid, 0 = No ignition xD missile becomes a explosive brick.
var spawner : Transform ;
var change = 0;
var t : Transform;

function Update () {
	var direction : Vector3 = rigidbody.transform.position - t.position ;
	rigidbody.AddForceAtPosition(direction.normalized, transform.position);
	burnrate = Random.Range(0,2);
	
	if(burnrate > 1){
		transform.Rotate(Vector3(4,0,0) * Time.deltaTime);
	}
	 if(burnrate < 1){
	  transform.Rotate(Vector3(-4,0,0) * Time.deltaTime);
	 }
    if(burnrate > 0){
		if(burnrate < 2){
			//transform.Rotate
		}
	}
}

function OnCollisionEnter(collision : Collision) {
		// Rotate the object so that the y-axis faces along the normal of the surface
		var contact = collision.contacts[0];
		var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
		var pos = contact.point;
		Instantiate(explosionPrefab, pos, rot);
		// Destroy the projectile
		Destroy (gameObject);
}