    const exp = require("express");
    const productApp = exp.Router();

    productApp.use(exp.json());

    productApp.get("/products", async (req, res) => {
    const productsCollectionObj = req.app.get("productsCollectionObj");
    const productsList = await productsCollectionObj.find().toArray();
    res.send({ message: "products", payload: productsList });
    });

    productApp.get("/products/:id", async (req, res) => {
    const productsCollectionObj = req.app.get("productsCollectionObj");
    const productId = Number(req.params.id);
    const productObj = await productsCollectionObj.findOne({ id: productId });
    res.send({ message: "product", payload: productObj });
    });

    productApp.post("/products", async (req, res) => {
    const productsCollectionObj = req.app.get("productsCollectionObj");
    const newProduct = req.body;
    await productsCollectionObj.insertOne(newProduct);
    res.send({ message: "product created" });
    });

    productApp.put("/products", async (req, res) => {
    const productsCollectionObj = req.app.get("productsCollectionObj");
    const modifiedProduct = req.body;
    let dbRes = await productsCollectionObj.updateOne(
        { id: modifiedProduct.id },
        { $set: { ...modifiedProduct } }
    );
    if (dbRes.modifiedCount == 1) {
        res.send({ messsage: "product updated" });
    } else {
        res.send({ message: "product not updated" });
    }
    });

    productApp.delete("/products/:id", async (req, res) => {
    const productsCollectionObj = req.app.get("productsCollectionObj");
    const productId = Number(req.params.id);
    let dbRes = await productsCollectionObj.deleteOne({ id: productId });
    if (dbRes.deletedCount == 1) {
        res.send({ message: "product deleted" });
    } else {
        res.send({ message: "product not deleted" });
    }
    });

    module.exports = productApp;
