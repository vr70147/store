const express = require('express');
const UsersRouter = require('./routes/users-route');
const CartsRouter = require('./routes/carts-route');
const ProductsRouter = require('./routes/products-route');
const CategoriesRouter = require('./routes/categories-route');
const OrdersRouter = require('./routes/orders-route');
const morgan = require('morgan');

module.exports = () => {
  const app = express();
  app.use(morgan('combined'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
  });
  app.use('/products', ProductsRouter);
  app.use('/carts', CartsRouter);
  app.use('/users', UsersRouter);
  app.use('/category', CategoriesRouter);
  app.use('/orders', OrdersRouter);
  return app;
};
