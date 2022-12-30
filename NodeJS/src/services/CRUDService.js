import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models';
const salt = bcrypt.genSaltSync(10);

let createNewAdmin = async (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            let hashPasswordFromBcrypt = await hashAdminPassword(data.password);
            await db.Admin.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                role:data.role
            })

            resolve('successfully')
        } 
        catch(e){
            reject(e);
        }
    })


}

let hashAdminPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            var hashPassword = bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword)

        }catch(e) {
            reject(e);
        }
    })
}

let getAdminById = (adminId) =>  {
    return new Promise(async (resolve, reject) => {
        try {
            let admin = await db.Admin.findOne({
                where: { id: adminId }, 
                raw: false

                
            })
            if (admin) {
                resolve(admin);
            } else {
                resolve({})
            }

        } catch (e) {
            reject(e)
        }
    }
    )


}
 let getAllAdmin = () => {
    return new Promise(async (resolve, reject) => {
        try{
            let admins = db.Admin.findAll({
                raw: false
            

            })
            resolve(admins)
            ;

        }catch(e){
            reject(e)
        }
    }
    )

}
let updateAdminData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let admin_ =  db.Admin.findOne({
                where: {id: data.id}
            })
            if(admin_) {
                admin_.firstName = data.firstName;
                admin_.lastName = data.lastName;
                admin_.address = data.address;

                await admin_.save()
            } else {
                resolve();
            }


        } catch(e) {
            console.log(e);
        }
    }) 
   
}

module.exports ={
    createNewAdmin: createNewAdmin,
    getAllAdmin: getAllAdmin, 
    getAdminById: getAdminById,
    updateAdminData: updateAdminData

}