const form = document.getElementById("loginform");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "wagner" && password === "12345") {
    localStorage.setItem("logado", "true");
    window.location.href = "../cardapio/index.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
});
