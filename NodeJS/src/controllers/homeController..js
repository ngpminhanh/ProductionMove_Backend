import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async(req, res) => {
    try{
        let data = await db.Admin.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }
    
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
   let message = await CRUDService.createNewAdmin(req.body);
    console.log(message)
    return res.send('post crud from server');
}
let displayGetCRUD = async(req, res) => {
    let data = await CRUDService.getAllAdmin();
    console.log('----------')
    console.log(data)
    console.log('----------')
    return res.render('displayCRUD.ejs', {
         dataTable: data
    })

}
let getEditCRUD = async (req, res) => {
    let adminId = req.query.id;
    if (adminId) {
        let adminData = await CRUDService.getAdminById(adminId);   
 
        return res.render('editCRUD.ejs', {
            admin:    adminData

        });

    }
    else {return res.send('can not found admin')} ;

    
}
let putCRUD =  async(req, res) => {
    let data = req.body;
   await CRUDService.updateAdminData(data);
   return res.send('update done!');

}
module.exports = {
    getHomePage: getHomePage, 
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD
}