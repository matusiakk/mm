// wylogowanie

$("#logout").click(function () {
  firebase.auth().signOut().then(function () {
    alert("Wylogowano");
    window.location.replace("index.html");
  }).catch(function (error) {
  });
});
