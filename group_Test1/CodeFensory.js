// no tocar, este es mi lado >:(

const db = {
  users: [
    {
      id: 1,
      email: "prueba@gg.com",
      name: "codefensory",
      tienda: "cara",
    },
    {
      id: 2,
      email: "prueba@gg.com",
      name: "codefensory",
      tienda: "maestra",
    },
    {
      id: 3,
      email: "prueba_diff@gg.com",
      name: "codefensory_diff",
      tienda: "maestra",
    },
  ],
};

// orm

function verifyQuery(query, data) {
  const q_keys = Object.keys(query);

  let all = true;

  for (let key of q_keys) {
    if (query[key] !== data[key]) {
      all = false;
      break;
    }
  }

  return all;
}

const dbQueryMutations = {
  get(obj, prop) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          db[obj.table]?.find((d) => verifyQuery(obj.query, d))?.[prop] ?? null
        );
      }, 1000);
    });
  },
  set(obj, prop, value) {
    return true;
  },
};

const entity = function (table) {
  this.table = table;
};

entity.prototype.where = function (query) {
  this.query = query;

  this.mutations = [];

  return new Proxy(this, dbQueryMutations);
};

// main.js

const user = new entity("users");

async function main() {
  console.log("fetching");

  const data = user.where({ email: "prueba_diff@gg.com", tienda: "maestra" }).id = 4; //fetch

  const data = user.where({ email: "prueba_diff@gg.com", tienda: "maestra" }).name = "otro"; //fetch

  user.

//   await data.query();
  console.log("data:", data);
}

// https://orm.drizzle.team/

main();