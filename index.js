var searchParams = new URLSearchParams(window.location.search);
var alphabet = "abcdefghijklmnopqrstuvwxy";
var monty = "MONTY";
var c = searchParams.get("seed");
var myrng = new Math.seedrandom(c); 

for(var i = 0; i < alphabet.length; i++)
{
	if(i == 12)
		continue;
	document.getElementById(alphabet[i]).textContent = alphabet[i].toUpperCase() + Math.abs(myrng.int32() % 50);
	//monty.charAt(i%5)
}

/*document.getElementById("a").textContent = searchParams.get("a");
document.getElementById("b").textContent = searchParams.get("b");
document.getElementById("c").textContent = searchParams.get("c");
document.getElementById("d").textContent = searchParams.get("d");
document.getElementById("e").textContent = searchParams.get("e");
document.getElementById("f").textContent = searchParams.get("f");
document.getElementById("g").textContent = searchParams.get("g");
document.getElementById("h").textContent = searchParams.get("h");
document.getElementById("i").textContent = searchParams.get("i");
document.getElementById("j").textContent = searchParams.get("j");
document.getElementById("k").textContent = searchParams.get("k");
document.getElementById("l").textContent = searchParams.get("l");
document.getElementById("m").textContent = searchParams.get("m");
document.getElementById("n").textContent = searchParams.get("n");
document.getElementById("o").textContent = searchParams.get("o");*/
