import Sequelize from 'sequelize';
import User from './models/user.model.js';
import Menu from './models/menu.model.js';
import MenuPosition from './models/menuposition.model.js';
import Order from './models/order.model.js';
import OrderPosition from './models/orderposition.model.js';
import Bill from './models/bill.model.js';
import BillPosition from './models/billposition.model.js';
import Currency from './models/currency.model.js';
const sequelize = new Sequelize('restaurant-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Currency = Currency(sequelize, Sequelize);

db.users = User(sequelize, Sequelize);
db.menus = Menu(sequelize, Sequelize);
db.menuPositions = MenuPosition(sequelize, Sequelize);
db.Order = Order(sequelize, Sequelize);
db.OrderPosition = OrderPosition(sequelize, Sequelize);
db.Bill = Bill(sequelize, Sequelize);
db.BillPosition = BillPosition(sequelize, Sequelize);

export default db;
// module.exports = db;
