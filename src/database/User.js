import { Model, DataTypes } from "sequelize";
import sequelize from "./connection.js";

class User extends Model {}


User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull:false
    },
    latitude: {
        type: DataTypes.GEOGRAPHY
    },
    longitude: {
        type: DataTypes.GEOGRAPHY
    }

    }, {
        sequelize,
        modelName: 'User'        
    });

export default User;