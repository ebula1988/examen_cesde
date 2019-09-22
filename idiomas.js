console.log("Escribe tu nombre");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("welcome sir: " + 
        d.toString().trim());

    console.log("bienvenue monsieur: " + 
        d.toString().trim());

    console.log("bienvenido señor: " + 
        d.toString().trim());
  });