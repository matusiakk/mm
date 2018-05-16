//wyświetlanie szczegółów wybranego celu

document.getElementById("tar-details").onload = function() {showList()};

function showList() {
	
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	
	let tarList = document.getElementById("select-target");
	let user = firebase.auth().currentUser.uid;
	//let user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	let userName = "user-" + user;
	let dbRefList = firebase.database().ref().child(userName);

dbRefList.on('child_added', snap =>  {
	
	let para = document.createElement("OPTION");
	para.innerText = snap.key+" ";
	para.value = snap.key;
	tarList.appendChild(para);
})
  } else {
    // No user is signed in.
  }
});
	
	
}

$('#show').click(

function showDetails() {	
	
	let user = firebase.auth().currentUser.uid;
	//let user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	let dTargetName = $('#select-target').val();
	let name = "user-" + user+"/"+dTargetName;
	let dbRef = firebase.database().ref().child(name);
	
	dbRef.on('value', snap => console.log(snap.val()));
			
	dbRef.on('value', function(snapshot) {
		$('#target-description').val(snapshot.child('targeDescription').val());
		$('#date').val(snapshot.child('endDate').val());
		$('#check').val(snapshot.child('agree').val());
		$('#tar-progr').val(snapshot.child('progress').val());
	})
	
	let slider = document.getElementById("tar-progr");
	let output = document.getElementById("demo");
	output.innerHTML = slider.value;

	slider.oninput = function() {
	output.innerHTML = this.value;
}
})