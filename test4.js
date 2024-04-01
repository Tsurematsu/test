
async function main() {
    const objeto = new function () {
        const config = {
            set: function (objeto, propiedad, valor) {
                
            },
            get: function (objeto, parámetro) {
    
            }
        }
        this.get = function (params) {
            this.params = params;
            return new Proxy(this, config);
        }
    }
    objeto.get({email: "prueba@gg.com"}).id
    // let resultado = await objeto.get;
    // console.log(resultado);
}

//  User.get({email: "prueba@gg.com"}).id = 4

(async ()=>{console.log("\n\n");await main();console.log("\n\n");})()