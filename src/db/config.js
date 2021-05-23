import { User } from './models/user.model.js';
import { Menu } from './models/menu.model.js';
import { MenuPosition } from './models/menuposition.model.js';
import { MenuPosition } from './models/menuposition.model.js';
import { Order } from './models/order.model.js';
import { OrderPosition } from './models/orderposition.model.js';
import { Bill } from './models/bill.model.js';
import { BillPosition } from './models/billposition.model.js';
import { Currency } from './models/currency.model.js';

export const configDataBase = async () => {
    await User.sync();
    await Menu.sync();
    await MenuPosition.sync();
    await Order.sync();
    await OrderPosition.sync();
    await Bill.sync();
    await BillPosition.sync();
    await Currency.sync();
};

module.exports = configDataBase;
