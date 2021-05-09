import { sequelize, DataTypes } from '../init'

export const Currency = sequelize.define('Currency', {
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
    symbol: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    exchangeRate: {
      type: DataTypes.DECIMAL,
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
    }
  })