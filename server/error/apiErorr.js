

//создаем свой клас для ошибки на базе стандартного класса Error
//статическими метадами проедоставляем внешний интерфес для раюоты вo  внешних обработчиках


class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
      static bedRequest(message){
        return new ApiError(404,message)
       }
      static internal(message){
        return new ApiError(500,message)
      }
      static forbidden(message){
        return new ApiError(403,message)//не найдено соответствий
      }

}
module.exports = ApiError



