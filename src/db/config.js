import { User } from './models/user.model'
import { Menu } from './models/menu.model'
import { MenuPosition } from './models/menuposition.model'
import { Order } from './models/order.model'
import { OrderPosition } from './models/orderposition.model'
import { Bill } from './models/bill.model'
import { BillPosition } from './models/billposition.model'
import { Currency } from './models/currency.model'

export const configure_db = async () => {
  await User.sync()
  await Menu.sync()
  await MenuPosition.sync()
  await Order.sync()
  await OrderPosition.sync()
  await Bill.sync()
  await BillPosition.sync()
  await Currency.sync()
}