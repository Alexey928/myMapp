

// Created general router of our application
const Router = require('express');
const router = new Router();// по сути генератор сторок пути запроса



const fertilizeRouter = require('./FertilizeRouter');//подрубаем подроутеры с ендпоинтами get post
const chemicalRouter = require('./chemicalRouter');
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');



router.use('/user', userRouter);// формируем основной роутер
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/divice', deviceRouter);


module.exports = router;
