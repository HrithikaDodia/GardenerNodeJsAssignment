const express = require('express');
const cors = require('cors');
const config = require('./config');
const { checkAuthStatus, checkAdmin } = require('./Middleware/authMiddleware');
const itemRoutes = require('./routes/items/Item');
const userRoutes = require('./routes/users/User');
const orderRoutes = require('./routes/orders/Order.js');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(config.port, () => console.log(`App is listening to port ${config.port}`));


app.use('/api/item', itemRoutes.routes);
app.use('/api/user', userRoutes.routes);
app.use('/api/order', orderRoutes.routes);