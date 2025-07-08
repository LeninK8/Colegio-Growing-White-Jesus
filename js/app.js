function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.getElementById("user-info").innerText =
        `Bienvenido, ${user.displayName} (${user.email})`;
    })
    .catch(error => console.error("Error al iniciar sesión:", error));
}
