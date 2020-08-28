const Modules = sequelize.define('Modules', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    description: {
        type: Sequelize.STRING(400),
        allowNull: false
    }
},{
    timestamps:true
});



module.exports = Modules;
