// Lógica de inicio de sesión con Google
function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      mostrarUsuario(user); // ✅ Mostramos usuario después de login
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error);
    });
}

// Función para mostrar el nombre del usuario
function mostrarUsuario(user) {
  const userInfo = document.getElementById("user-info");
  if (userInfo) {
    userInfo.innerText = `Hola, ${user.displayName}`;
  } else {
    console.error("Elemento #user-info no encontrado");
  }
}

// Detectar si ya hay un usuario logueado al cargar la página
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    mostrarUsuario(user);
  }
});
