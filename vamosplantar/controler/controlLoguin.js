
var firebaseConfig = {
    apiKey: "AIzaSyBnbJCAeXJAenguZw6ydh5J4cCNRIYnL5k",
    authDomain: "agriculturaoros-5e3fb.firebaseapp.com",
    projectId: "agriculturaoros-5e3fb",
    storageBucket: "agriculturaoros-5e3fb.appspot.com",
    messagingSenderId: "482937014415",
    appId: "1:482937014415:web:7a180896512167536b88fa"
  };

firebase.initializeApp(firebaseConfig);

function cadastrar() {

    var auth = null;

    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value).then(function (user) {
        alert("Cadastrado com sucesso");
        auth = user;
    }).catch(function (error) {
        alert("Falha ao cadastrar");
    });
}


function login() {

    var auth = null;


    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("Logado com sucesso");
            auth = user;
            localStorage.setItem("auth",true);
            localStorage.setItem("user",document.getElementById("email").value);
            window.location.href = "index.html";
        }).catch(function (error) {
            alert("Falha ao logar");


        });
}