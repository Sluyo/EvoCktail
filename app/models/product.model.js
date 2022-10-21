module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.NUMBER
      },
      description: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      }
    });
  
    return Product;
  };