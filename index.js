/**
 * Prepare the WebGL context
 * The main() function is called when our script is loaded.
 * It set up the WebGL context and start rendering content
 */

function main() {
  // Get the <canvas> element
  const canvas = document.getElementById('glCanvas');

  // Initialize the GL context
  // If the browser does not support WebGL getContext will return null
  const gl = canvas.getContext('webgl');
  // console.log(gl)

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      'Unable to initialize WebGL. Your browser or machine may not support it.'
    );
    return;
  }

  // TODO: Find more infor about the bottom lines 
  // Set clear color to blue, full opaque
  gl.clearColor(0.0, 0.0, 1.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main();
