// Confirmación de que app.js está cargando
console.log("📦 app.js cargado correctamente");

// Función para iniciar sesión con Google
function login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("✅ Sesión iniciada como:", user.displayName);
      mostrarUsuario(user);
      ocultarBotonLogin();
    })
    .catch((error) => {
      console.error("❌ Error al iniciar sesión:", error);
    });
}

// Función para mostrar el nombre del usuario
function mostrarUsuario(user) {
  const userInfo = document.getElementById("user-info");
  if (userInfo) {
    userInfo.innerText = `Hola, ${user.displayName}`;
  } else {
    console.warn("⚠️ No se encontró el elemento #user-info");
  }
}

// Función para ocultar el botón de login
function ocultarBotonLogin() {
  const loginBtn = document.getElementById("btn-login");
  if (loginBtn) {
    loginBtn.style.display = "none";
    console.log("🔒 Botón de login ocultado");
  } else {
    console.warn("⚠️ No se encontró el botón #btn-login");
  }
}

// Detectar si ya hay un usuario logueado al cargar la página
firebase.auth().onAuthStateChanged((user) => {
  console.log("🔍 Estado de sesión verificado...");
  if (user) {
    console.log("👤 Usuario detectado:", user.displayName);
    mostrarUsuario(user);
    ocultarBotonLogin();
  } else {
    console.log("🔓 No hay sesión activa");
  }
});
