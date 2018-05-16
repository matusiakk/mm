// wylogowanie

$('#log-off').click(function () {
  firebase.auth().signOut().then(function () {
    window.location.replace("./index.html");
  }).catch(function (error) {
  });
});
