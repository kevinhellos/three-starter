// App entry point
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {

} else {
	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById('container').appendChild( warning );
}