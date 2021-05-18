// import { sequelize, Sequelize } from '../init.js';

export default (sequelize, Sequelize) => {
    return sequelize.define('Menu', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
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
};
