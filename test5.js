const db = {
    'test1': {
        id: 1,
        email: 'prueba@gg.com'
    }
}
async function main() {
    const usuario = new function () {
        let THIS_Resolve=null;
        let _Proxy = {
            set: (objeto, propiedad, valor) => {
                this.propiedad = propiedad;
                this.valor = valor;
                return objeto.main();
            }
        }
        this.get = function (params) {
            this.params = params;
            return new Proxy(this, _Proxy);
        }
        this.main = function () {
            Number.prototype.wait = async function () {
                return await new Promise((resolve, reject)=>{
                    THIS_Resolve = resolve;
                    Number.prototype.wait = undefined;
                });
            }
            db[this.params.email][this.propiedad] = this.valor;
            setTimeout(()=>{THIS_Resolve(db)}, 1000);
        } 
    }


    console.log("request");
    let request = usuario.get({"email":"test1"}).id = 7;
    console.log("response: ", await request.wait());


    try {
        Database1.users.email['user1@gmail.com'].name = "Viola the Magnificent"
    } catch (error) {}

    try {    
        const updateUser = await prisma.user.update({
            where: {
                email: 'viola@prisma.io',
            },
            data: {
                name: 'Viola the Magnificent',
            },
        })
    } catch (error) {}

    // console.log("latter: ", request);
    // // usuario.get({"user":"usuario1"}).id = 4;
}




(async ()=>{console.log("\n\n"); await main();console.log("\n\n");})()