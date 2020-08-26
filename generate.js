var alphabet = "abcdefghijklnopqrstuvwxy";
for(var j=0; j<200; j++){
    var domain = "file:///Users/bhuvanb.balagar/temp/index.html?";
    for(var i=0; i<alphabet.length; i++){
    	if(i != 13)
        	domain += alphabet[i]+"="+Math.floor(Math.random() * Math.floor(25));
        if(i != alphabet.length-1){
            domain += "&";
        }
    }
    console.log(domain);
}