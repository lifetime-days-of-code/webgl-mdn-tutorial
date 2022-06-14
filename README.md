### Notes:

- Page 2:
  [Reference MDN:Adding 2D content to a WebGL context](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - This project uses the [glMatrix](https://glmatrix.net/) library to perform its matrix operation, so you will need to include it in the project. We're loading a copy from a CDN in our HTML's <head>
  ```js
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
    integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
    crossorigin="anonymous"
    defer
  ></script>
  ```
- A shader is a program, written using the [OpenGL ES Shading Language (PDF download)](https://www.khronos.org/registry/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.pdf)

### Other resources:

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/)
- [WebGL fundamentals](https://webglfundamentals.org/)
  - [WebGL 3D Perspective](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html)
- [Intro to modern OpenGL](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents)
- [Matrix](https://mathworld.wolfram.com/Matrix.html)
