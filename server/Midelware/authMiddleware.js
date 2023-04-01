
const jwt = require("jsonwebtoken")

module.exports = function(req,res,next){// миделвер проверяет запрос в роуте на авторизацию
    if(req.method === "OPTIONS"){// если запрос OPTIONS  то пропускаем и идем к следушему по древу роутера
        next();
    }try {
        let token  = req.headers.authorization // Bearer  kjdnjnckjsdniwewocdn<-- token
        if (!token){
            return res.status(401).json({massege:"не авторизован!"});
        }
        token = token.split(" ")[1];
        console.log(token)

        const decoded  = jwt.verify(token, process.env.SICRET_KEY);//проверяет на валидность если не валиден падает ошибка
        console.log(decoded);


        req.user = decoded

        next();

    }catch (e){
        return res.status(401).json({massege:"ваш токен не валиден"});
    }




}