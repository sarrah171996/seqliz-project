import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js'



const productModel = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true

    },
    pName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pDescription: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});



export default productModel