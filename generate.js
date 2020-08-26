var alphabet = "abcdefghijklnopqrstuvwxy";
for(var j=0; j<200; j++){
    //var domain = "https://bhuby.github.io/mvbingo/index.html?";
    var domain = "file:///Users/bhuvanb.balagar/bingo/index.html?";
    for(var i=0; i<alphabet.length; i++){
        domain += alphabet[i]+"="+Math.floor(Math.random() * Math.floor(25));
        if(i != alphabet.length-1){
            domain += "&";
        }
    }
    console.log(domain);
}
