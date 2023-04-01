


// implements the creation and pagination of users

const {query} = require("express");
const bcrypt = require("bcrypt");
const ApiError = require('../error/apiErorr');
const {User,Basket}= require('../models/models');
const jwt = require("jsonwebtoken");
const {where} = require("sequelize");

function generateJVT(id,email,role){// generate token width time time parameters
    return jwt.sign(
        {id,email,role},
        process.env.SICRET_KEY,
        {expiresIn: "24h"}
    );
}

class UserController{
        async registration (req,res, next){
            const {email,password,role} = req.body;
            console.log(email,password,role)//
            // Валидируем данные
            if(!email || !password){
                return next(ApiError.bedRequest("не верный имайл или пароль !"))
            }
            const candidate = await User.findOne({where:{email}});
            if (candidate){
                return next(ApiError.bedRequest("Юзер с иаким email уже есть"));
            }
            //__________________________________________________________________

            const hashPasword = await bcrypt.hash(password,5);
            const user = await User.create({email,role,password:hashPasword});
            const basket  =  await Basket.create({userId:user.id})
            const token  = generateJVT(user.id,email,user.role)
            return res.json({token})
        }

        async login(req,res,next){
            const {email,password} = req.body;
            const user = await User.findOne({where:{email}})
            // Волидируем донные
           //_______________________________________________________
            if (!user){
                return next(ApiError.internal("пользователь не найден"));

            }
            let comparePassword = bcrypt.compareSync(password, user.password)// сравневаем введенный пвсворд с юсер пасвордом(ХЕШИРОВАНЫМ) из субд
            if (!comparePassword){
                return next(ApiError.internal("введен не верный пароль !"))
            }
            //__________________________________________________________

            return res.json({token:generateJVT(user.id,user.email,user.role)})//возвращаемм вновь сгенереный токен на клиент
        }


        async chekc(req,res,next){
            res.json({masege:"проскочили на чек  в юсер контроллере"});
        }
}



module.exports = new UserController()