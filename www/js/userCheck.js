$('#google').click(

  function () {
    if (!firebase.auth().currentUser) {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithRedirect(provider);

    } else {

      firebase.auth().signOut();

    }

  });
