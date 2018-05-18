var picturesArr = [];
var index = 0;
var requestUrl = "http://munk.pl/"

$(document).ready(function(){

	var category = getCategoryFromUrl();
	
	var request = $.ajax({
		method: 'GET',
		url: requestUrl, 
		data: { 
		    'category': category
		},
		dataType: 'json',
		async: true
	}).done(function( obj ) {
		picturesArr = obj.data;
		if(obj.data.length > 0){
			index = Math.floor(Math.random() * 100) % obj.data.length;
			loadImage(obj.data[index]['image']['original']['url']);
		}else{
			loadImage('img/' + category + '.jpg');
		}
		
	});
}); 

function loadImage(url){
	if(url != ""){
		$('#motivation').attr('src',url);
		$('#motivation-container').removeClass('hidden');
	}
			
}

function nextImage(){
	++index;
	if(index > (picturesArr.length - 1))
		index = 0;
	if(picturesArr.length > 0 && ( typeof picturesArr[index]['image']['original']['url'] !== undefined ))
		loadImage(picturesArr[index]['image']['original']['url']);
}

function prevImage(){
	--index;
	if(index < 0)
		index = picturesArr.length - 1;
	if(picturesArr.length > 0 && ( typeof picturesArr[index]['image']['original']['url'] !== undefined ))
		loadImage(picturesArr[index]['image']['original']['url']);
}

function getCategoryFromUrl() {
	var category = $(location).attr('href').split('inspiration-')[1].replace(".html","");
	//alert("cat:" + category);

	if (category != undefined)
    	return category;
    else
    	return "motivation";
}