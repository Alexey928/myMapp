const ApiError = require('../error/apiErorr');
//
module.exports = function (err,req,res,next){// next обьявляем обязательно, иначе хендлер не отработает
    if (err instanceof ApiError){
      return  res.status(err.status).json({message:err.message})
    }

    return res.status(500).json({message:"unexpected error!!"});
}