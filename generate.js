var alphabet = "abcdefghijklnopqrstuvwxy";
var numsUsed = [];
var rand = 0;
for(var j=0; j<189; j++){
    var domain = "https://bhuby.github.io/mvbingo/index.html?seed=" + j;

    //var domain = "https://github.com/Bhuby/mvbingo/";
    // for(var i=0; i<alphabet.length; i++){
    // 	//console.log(numsUsed.includes(rand));

    // 	while(numsUsed.includes(rand))
    // 		rand = Math.floor(Math.random() * Math.floor(50)); 
    // 	numsUsed.push(rand);
    //     domain += i;
    //     if(i != alphabet.length-1){
    //         domain += "&";
    //     }
    // }

    console.log(domain);
    numsUsed = [];
}
