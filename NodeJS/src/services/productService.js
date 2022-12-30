import db from "../models"
let getAllProduct = (productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = '';
            if(productID == 'ALL') {
                 products = await db.Product.findAll({
                })
            }
            if(productID && productID != 'ALL') {
                 products = await db.Product.findOne({
                    where: {id: productID}
                })
            }
            resolve(products)

        }catch(e) {
            reject(e);
        }

    })

}

module.exports = {
    getAllProduct: getAllProduct
}