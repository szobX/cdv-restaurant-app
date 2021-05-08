import { sequelize, DataTypes } from '../init'
import { Currency } from './currency.model'
import { Order } from './order.model'

export const OrderPosition = sequelize.define('OrderPosition', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },  
    createdOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currencyId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Currency,
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Order,
        key: 'id'
      }
    }
  })