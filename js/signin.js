var provider = new firebase.auth.GoogleAuthProvider();

var config = {
    apiKey: "AIzaSyDFuzbP725qXoImrSmo6nov90OiPBtHnmw",
    authDomain: "comedy-app.firebaseapp.com",
    databaseURL: "https://comedy-app.firebaseio.com",
    projectId: "comedy-app",
    storageBucket: "comedy-app.appspot.com",
    messagingSenderId: "710197328215"
};
firebase.initializeApp(config);

// Se obtiene la data del usuario al aceptar
$('#login').click(function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            $('#login').attr('style', 'display: none');
            

        })
});

document.getElementById('logout').addEventListener('click', function(){
    console.log('click');
    firebase.auth().signOut();
    
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('make-me').style.display='block';
        document.getElementById('user-menu').style.display='block';
        var email = result.user.email;
            var name = result.user.displayName;
            var img = result.user.photoURL;
            /*$('#exampleModal').modal("hide");
            $('#exampleModal').attr("style", "display: none");
            console.log(email, name, img);*/
            
        
    // User is signed in.
    } else{
        console.log('no existe usuario');
        document.getElementById('user-menu').style.display='none';
        document.getElementById('login').style.display='block';
        document.getElementById('make-me').style.display='none';   
    }
});


