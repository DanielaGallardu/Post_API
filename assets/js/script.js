async function getPosts() {
  try {
    // Solicitud a la API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Convertir la respuesta a JSON
    let posts = await response.json();
    console.log(posts); 

    // Manejo DOM 
    const postList = document.getElementById('post-list');

    // Limpiar lista antes de agregar nuevos posts
    postList.innerHTML = '';

    // Recorrer los posts e imprimirlos en la lista
    posts.forEach(post => {
      postList.innerHTML += `
        <li>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </li>
      `;
    });
// Manejo de errores
  } catch (error) {
    console.error('Ocurrió un error:', error);
    document.getElementById('error-message').textContent = 'Ocurrió un error inesperado. Inténtelo más tarde.';
  }
}