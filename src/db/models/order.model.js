import { sequelize, DataTypes } from '../init'
import { User } from './user.model'
import { Currency } from './currency.model'

const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUID,
      allowNull: false
    },
    tableNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true
    },  
    createdOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    clientId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    currencyId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Currency,
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  })