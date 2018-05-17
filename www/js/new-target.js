//zapisywanie celu do bazy

$('#save').click(

function saveGoal(){
	
var user = firebase.auth().currentUser.uid;
var targetName = $('#target-name').val();
var targetDescription = $('#target-description').val();


var end = $('#date').val();
var agree =  $('#check').is(':checked');
var progress = 0;

var name = "user-" + user+"/"+targetName;
var dbRef = firebase.database().ref().child(name);


	if (targetName == ""){
	alert ("Nazwa twojego celu nie może być pusta");
	}
	
	else if (targetDescription == ""){
	alert ("Opis twojego celu nie może być pusty");
	}
	
	else if (end == ""){
	alert ("Data zakończenia nie może być pusta");
	}
	
	else {
	dbRef.set({
		targetName: targetName,
		targeDescription : targetDescription,
		endDate : end,
		agree : agree,
		progress : progress
	})
	console.log(name +"\n"+user+"\n"+targetName+"\n"+targetDescription+"\n"+end+"\n"+agree+"\n"+progress);
	alert("Zapisano cel o nazwie: "+ targetName +".")
	
		setTimeout(function(){ window.location.replace("./list-of-targets.html"); }, 3000);
	
	}
})