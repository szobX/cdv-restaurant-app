import Menu from './menu.model.js';

export default (sequelize, Sequelize) => {
    const MenuPosition = sequelize.define('MenuPosition', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        menuId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: sequelize.models.Menu,
                key: 'id',
            },
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        createdOn: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: true,
        },
    });
    return MenuPosition;
};
