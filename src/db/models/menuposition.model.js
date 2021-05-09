import { sequelize, DataTypes } from '../dbinit'
import { Menu } from './menu.model'

export const MenuPosition = sequelize.define('MenuPosition', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUID,
      allowNull: false
    },
    menuId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Menu,
        key: 'id'
      }
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
    }
  })