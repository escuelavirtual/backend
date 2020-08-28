const {DataTypes} = require("sequelize");
const {sequelize} = require("../../config/db/mysql");
const Professor = sequelize.define("professors", {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    activity_name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    instructions:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    grade:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    comments:{
        type:DataTypes.STRING(200),
        allowNull:false
    }

},{
    timestamps:true
});



module.exports = Professor;