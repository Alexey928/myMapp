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
        location:{type:DataTypes.STRING,unique:true,}
    }
)

const Season = sequelize.define("seasons",
    {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
        name:{type:DataTypes.STRING,allowNull:false},
    }
);

const SeasonField = sequelize.define("fild",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    sqear:{type:DataTypes.INTEGER,allowNull:false},
    color:{type:DataTypes.STRING},
    AmounOfFertilizers:{type:DataTypes.INTEGER},
});



const  SeasonFertilizers = sequelize.define("Fertilizers",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    value:{type:DataTypes.STRING,defaultValue:0},
    Fertilizers:{}

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










