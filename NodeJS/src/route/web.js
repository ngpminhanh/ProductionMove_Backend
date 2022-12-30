import express from 'express';
import homeController from '../controllers/homeController.';
import productController from '../controllers/productController';
let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/getcrud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/display-crud', homeController.displayGetCRUD )

    router.get('/edit-crud', homeController.getEditCRUD)
    router.post('/put-crud', homeController.putCRUD)

    router.get('/get-all-product', productController.handleGetAllProduct)


    return app.use("/", router)

}

module.exports = initWebRoutes;