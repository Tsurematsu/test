const db = new function () {
    this.intern = {
        'users': {
            'id_1':{tienda:"Carla", algo: 'user1@gmail.com', name: 'tsurematsu'},
            'id_2':{tienda:"Lopez", algo: 'user2@gmail.com', name: 'juanCama'},
            'id_3':{tienda:"Lopez", algo: 'user3@gmail.com', name: 'LopezPerez'}
        }
    }

    this.get = ()=>{return {...this.intern};}
    this.update = async (_object)=>{
        await new Promise((r)=>setTimeout(r, 1000));
        this.intern = _object;
        return this.intern; 
    }
}





const Database1 = new Proxy(new function() {
    this.dataRequest = {
        table: null,
        where: null,
        where_value: null,
        data_key: null,
        data_value: null
    };
    this.Select_table = (table) => {
        this.dataRequest.table = table;
        return new Proxy(this, {
            get: (obj, prop) => {
                this.dataRequest.where = prop;
                return (data_value) => {
                    this.dataRequest.where_value = data_value;
                    return obj.Search_query();
                }
            }
        });
    }

    this.Search_query = () => {
        return new Proxy(this, {
            set: (obj, prop, value) => {
                this.dataRequest.data_key = prop;
                this.dataRequest.data_value = value;
                return obj.Update_query();
            }
        });
    }

    this.Update_query = async () => {
        let this_Resolve = ()=>{};
        String.prototype.wait = async ()=> {
            return await new Promise((resolve, reject) => {
                this_Resolve = resolve;
                String.prototype.wait = undefined;
            });
        };
        
        let temp_data = db.get();
        let table = temp_data[this.dataRequest.table];
        
        let element = Object(table).entries().filter(([key, value]) => {
            return value[this.dataRequest.where] === this.dataRequest.where_value;
        });

        // let this_keys;
        // Object.entries(table).forEach(([key, value]) => {
        //     if (value[this.dataRequest.where] === this.dataRequest.where_value) {
        //         this_keys = key;
        //         return;
        //     }
        // });

        // temp_data[this.dataRequest.table][this_keys][this.dataRequest.data_key] = this.dataRequest.data_value;
        // let result = await db.update(temp_data);
        // this_Resolve(result);
    }
}, {
    get : (obj, prop) => {
        return obj.Select_table(prop);
    }
});
(async ()=>{console.log("\n\n"); await main();console.log("\n\n");})()



// usar filter para buscar el id

async function main(){
    let query = Database1.users.name('tsurematsu').algo = "algo--->@gmail.com";    
    await query.wait();
}



