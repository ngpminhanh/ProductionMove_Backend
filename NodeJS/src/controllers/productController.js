import productService from '../services/productService';

let handleGetAllProduct = async (req, res) => {
    let id = req.body.id;
    let products = await productService.getAllProduct(id)

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        products

    })
}

module.exports = {
    handleGetAllProduct: handleGetAllProduct
}
