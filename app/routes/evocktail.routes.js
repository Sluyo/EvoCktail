module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all products
    router.get("/", products.findAll);
  
    // Update a Tutorial with id
    router.put("/:id", products.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", products.delete);
  
    // Delete all Tutorials
    router.delete("/", products.deleteAll);
  
    app.use('/api/products', router);
  };