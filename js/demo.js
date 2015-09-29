$("#initDemo").tapend(function(){
	var product;
	console.log("Sending Demo Request");
	$.post('http://'+IP+':'+PORT+'/appriz/demo',{"idSecretClient": idScretClient},function(data){
		if (data["status"]== 200){
			showInfoD("Send demo","You will recive some demo messages",function(){
				setTimeout(function(){ 
					callMSGback();
					console.log("bring");
				}, 1000);
			});
			
		}
	});
});