const main = function() {
    this.hola = "hola"
    console.log(this);
}

console.log(new main());