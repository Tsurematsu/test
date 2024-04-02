// import sqlite3 from "sqlite3";
import { PrismaClient } from "@prisma/client";
async function main() {
    const instancia = new PrismaClient();
    
    // const newUser = await instancia.user.create({
    //     data: {
    //         email: "test1",
    //         password:"123",
    //         name: "test",
    //     }
    // })

    
    // const users = await instancia.user.findMany()
    // console.log(users);
    const user = await instancia.user.findUnique({
        where: {
            email: "test1",
        }
    })
    console.log(user);
}
main();