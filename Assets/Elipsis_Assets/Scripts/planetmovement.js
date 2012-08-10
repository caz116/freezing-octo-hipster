#pragma strict

function Start () {

}
var object : Transform;

function Update () {
  transform.RotateAround (Vector3.zero, Vector3.up, 20 * Time.deltaTime);

}