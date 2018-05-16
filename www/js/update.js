//edycja pól formularza

$('#update').click(

function update(){	

	let mTargetName = $('#select-target').val();
	let mTargetDescription = $('#target-description').val();
	let mEnd = $('#date').val();
	let mAgree =  $('#check').is(':checked');
	let mProgress = $('#tar-progr').val();

	let user = firebase.auth().currentUser.uid;
	//let user = "GSrjFTKIaHdr9zgpYLx5p3z9YUL2"
	let name = "user-" + user+"/"+mTargetName;
	let dbRef = firebase.database().ref().child(name);
	
	dbRef.set({
		targetName: mTargetName,
		targeDescription : mTargetDescription,
		endDate : mEnd,
		agree : mAgree,
		progress : mProgress
	});
	alert ;
		if (confirm("Zmiany zostały zapisane")) {
		window.location.replace("./list-of-targets.html");
    } else {      
    }
});
