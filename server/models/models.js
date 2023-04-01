const sequelize = require("../db");
const{DataTypes} = require("sequelize"); // импортируем только класс DataTypes

// описываем таблицы для базы данных _____________________________


const User = sequelize.define("user",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role: {type:DataTypes.STRING,defaultValue:"USER"},
});

const Organization =  sequelize.define(
    "organization",{
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,allowNull:false},
        numberOfEmployees:{type:DataTypes.INTEGER},
        location:{type:DataTypes.STRING,unique:true,},
    }
)
const Season = sequelize.define("seasons", {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,allowNull:false},
    });
const SeasonField = sequelize.define("fild",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    sqear:{type:DataTypes.INTEGER,allowNull:false},
    color:{type:DataTypes.STRING,},
    culture:{type:DataTypes.STRING},
    traectory:{type:DataTypes.STRING}
});
const SeasonImages = sequelize.define("imagess", {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    description:{type:DataTypes.STRING},
    imgName:{type:DataTypes.STRING},
})
const  SeasonFertilizers = sequelize.define("Fertilizers",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    value:{type:DataTypes.STRING,defaultValue:0},
})

const  Seasonchemistry= sequelize.define("chemistry",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    value:{type:DataTypes.STRING},
})

const Chemistry = sequelize.define("chemistry" ,{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    manufacturerName:{type:DataTypes.STRING},
});

const Fertilizers = sequelize.define("chemistry" ,{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    manufacturerName:{type:DataTypes.STRING},
});

User.hasMany(Organization);
Organization.belongsTo(User);

Organization.hasMany(Season);
Season.belongsTo(Organization);

Season.hasMany(SeasonField);
SeasonField.belongsTo(Season);

SeasonField.hasMany(SeasonImages);
SeasonImages.belongsTo(SeasonField);

SeasonField.hasMany(SeasonFertilizers);
SeasonFertilizers.belongsTo(SeasonField);

SeasonField.hasMany(Seasonchemistry);
Seasonchemistry.belongsTo(SeasonField);

Seasonchemistry.hasOne(Chemistry);
Chemistry.belongsTo(Seasonchemistry);

SeasonFertilizers.hasOne(Fertilizers);
Fertilizers.belongsTo(Seasonchemistry);

module.exports = {
    User,
    Organization,
    Season,
    SeasonField,
    SeasonImages,
    SeasonFertilizers,
    Seasonchemistry,
    Chemistry,
    Fertilizers,
}















