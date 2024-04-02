async function parent() {
    const db = {
        'prueba@gg.com': {
          id: 1,
          email: 'prueba@gg.com'
        }
      }
      
      class User {
        static get(params) {
          return new User(params)
        }
      
        get id() {
          return new Promise(resolve => {
            setTimeout(() => resolve(db[this.where.email]?.id), 1000)
          })
        }
      
        constructor (data) {
          this.where  = data
        }
        
      }
      
      async function main () {
        const response = await User.get({email: "prueba@gg.com"}).id
      
        console.log("codefensory res1", response)
      
        const response2 = await User.get({email: "prueba@gg.com"}).id
      
        console.log("codefensory res2", response2)
      
        const response3 = await User.get({email: "prueba_different@gg.com"}).id
      
        console.log("codefensory res3", response3)
      }
      
      await main()
      
      
      async function main2() {
          const  User = new function () {
                this.get = (params)=>{
                  this.params = params; 
                  return this
                }
                this.id = ()=>new Promise(resolve => {
                  setTimeout(() => resolve(db[this.params.email]?.id), 1000);
                })
          }
          
          const response = await User.get({email: "prueba@gg.com"}).id()
          console.log("main2 res1 -> ", response)
          const response2 = await User.get({email: "prueba@gg.com"}).id()
          console.log("main2 res2 -> ", response2)
          const response3 = await User.get({email: "prueba_diferent@gg.com"}).id()
          console.log("main2 res3 -> ", response3)
      
      }
      await main2()
}

parent()