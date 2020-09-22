var alphabet = "abcdefghijklnopqrstuvwxy";
var numsUsed = [];
var rand = 0;
for(var j=0; j<189; j++){
    //var domain = "https://bhuby.github.io/mvbingo/index.html?";
    var domain = "file:///Users/bhuvanb.balagar/bingo/index.html?";
    for(var i=0; i<alphabet.length; i++){
    	//console.log(numsUsed.includes(rand));
    	while(numsUsed.includes(rand))
    		rand = Math.floor(Math.random() * Math.floor(50)); 
    	numsUsed.push(rand);
        domain += alphabet[i] + "=" + rand;
        if(i != alphabet.length-1){
            domain += "&";
        }
    }
    console.log(domain);
    numsUsed = [];
}
