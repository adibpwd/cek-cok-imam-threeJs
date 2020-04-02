var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

var shape = new THREE.BoxGeometry( 2,2,2 );
var material = new THREE.MeshBasicMaterial( { color:0x00ff00 } );
var material1 = new THREE.MeshBasicMaterial( { color:0x8CD7F4 } );
var box = new THREE.Mesh( shape, material );
var box1 = new THREE.Mesh( shape, material1 );


scene.add( box );
scene.add( box1 );
camera.position.z = 5;


var animasi = () => {
    requestAnimationFrame( animasi );
    box.rotation.z += 0.05;
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    box1.rotation.z += 0.01;
    box1.rotation.x += 0.02;
    box1.rotation.y += 0.05;

    renderer.render( scene,camera );
}

animasi();