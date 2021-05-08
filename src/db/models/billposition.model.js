import { sequelize, DataTypes } from '../init'
import { Bill } from './bill.model'
import { Currency } from './currency.model'

export const BillPosition = sequelize.define('BillPosition', {
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
    billId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Bill,
        key: 'id'
      }
    }
  })