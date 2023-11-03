module.exports = (sequelize, DataTypes) => {
    const Cabinet = sequelize.define('Cabinet', {
        Name: DataTypes.STRING,
        Size: DataTypes.STRING,
        Material: DataTypes.STRING,
        Type: DataTypes.STRING,
        Color: DataTypes.STRING,
        Manufacturer: DataTypes.STRING,
        Weight: DataTypes.INTEGER,  
        Price: DataTypes.INTEGER
    })
    return Cabinet
}