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

const Fild = sequelize.define("fild",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    sqear:{type:DataTypes.INTEGER,allowNull:false},
    color:{type:DataTypes.STRING}
})




