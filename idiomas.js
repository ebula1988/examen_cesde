console.log("Escribe tu nombre");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("welcome sir: " + 
        d.toString().trim());

    console.log("bienvenue monsieur: " + 
        d.toString().trim());


    console.log("bem vindo senhor: " + 
        d.toString().trim());

    console.log("Willkommen, Sir: " + 
        d.toString().trim());

    console.log("先生，欢迎您: " + 
        d.toString().trim());
  });