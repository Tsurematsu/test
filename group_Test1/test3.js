

// Mi lado


class User {
  static get(params) {
    return new User(params)
  }
      
  get id() {
    return new Promise(resolve => {
      setTimeout(() => resolve(db[this.where.email]?.id), 1000)
    })
  }

  set id(_id) {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = db[this.where.email]

        if (!data) {
          return resolve(null)
        }

        data.id = _id

        resolve(data.id)
      }, 1000)
    })
  }
      
  constructor (data) {
    this.where  = data
  }
}

async function main() {
  const result = await (User.get({email: "prueba."}).id = 4)

  console.log("codefensory", result)
}

// main()


  // let Prueba = function() {
  //   this.variare = null;
  //   this.response = async ()=>new Promise((resolve, reject)=>{
  //     this.Resolve = resolve;
  //   })
  //   let scan = setInterval(async () => {
  //     if (this.variare != null) {
  //       clearInterval(scan);
  //       let Temp = this.variare
  //       this.variare = null
  //       db['prueba@gg.com'].email = Temp;
  //       await new Promise(r => setTimeout(r, 1000))
  //       this.Resolve(db['prueba@gg.com'])
  //     }
  //   }, 10);
  // }


  // let cosa = new Prueba()
  

  // await new Promise(r => setTimeout(r, 2000))
  // cosa.variare = "adios"
  // let res = await cosa.response();
  // console.log(res);


async function main2() {

  const db = {
    'prueba@gg.com': {
      id: 1,
      user: 'tsurematsu'
    }
  }

  const User = new function() {
    this.id=null;
    this.response = async ()=>new Promise((resolve, reject)=>{
      this.Resolve = resolve;
    })
    this.get = function(params) {
      let scan = setInterval(async () => {
        if (this.id != null) { clearInterval(scan);
          db[params.email].id = this.id;
          
          await new Promise(r => setTimeout(r, 1000))
          this.Resolve(db[params.email])
          this.id = null;
        }
      }, 1);
      return this;
    }
  }







  User.get({email: "prueba@gg.com"}).id = 4
  console.log(await User.response());
  
  User.get({email: "prueba@gg.com"}).id = 6
  console.log(await User.response());

}

// const result = await (User.get({email: "prueba."}).id = 4)

main2()



async function main3() {
  console.log("Hola");

  String.prototype.get = function() {
    const stringLiteral = this.toString(); // Obtenemos el string literal
    
    return new Promise(resolve => {
      setTimeout(() => resolve(`${stringLiteral} Mundo`), 1000)
    })
    // return `${stringLiteral}, Mundo`; // Utilizamos el string literal
  }

  console.log( await "Hola".get()); // Imprime: "Hola, palabra"
}

// main3();


async function main4() {

  const db = {
    'prueba@gg.com': {
      id: 1,
      user: 'tsurematsu'
    }
  }

  const ParamProxy = {
    set: function (target, prop) {
      if (!target[prop]) {
        return target.main(prop);
      }
      return target[prop];
    }
  }
  const Function_Object = new function () {
    this.get = function (select) {
      String.prototype.set = function () {
        return `Hola ${this.toString()}`
      };
      this.select = select;
      return this;
    }
    this.main = function (propertied) {
      console.log("Objeto de selección, ", this.select, "  Propiedad", propertied);

    }
  }
  const User = new Proxy(Function_Object, ParamProxy)
  User.get({email:"prueba@gg.com"}).id



}
// main4();



    // await new Promise(r => setTimeout(r, 1000))
    // return db[this.where.email]?.id
