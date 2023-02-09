import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js'
import productModel from './poduct.model.js';

const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true

    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },


});

userModel.hasMany(productModel , {
    onDelete :'CASCADE',
    onUpdate :'CASCADE',
})

productModel.belongsTo(userModel)

export default userModel