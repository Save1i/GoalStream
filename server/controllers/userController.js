const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../modules/modules');
const ApiError = require("../error/apiError")
require('dotenv').config(); 

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY
    );
};

class UserController {
    async registration(req, res, next) {
        try {
            console.log("✅ POST /api/user/registration", req.body);
            const { email, password, role, name } = req.body;

            if (!email || !password || !name) {
                console.warn("❌ Отсутствует email, password или name");
                return next(ApiError.badRequest("Некорректный email или password"));
            }

            console.log("🔍 Проверка существующего пользователя...");
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                console.warn("❌ Пользователь уже существует:", existingUser.email);
                return next(ApiError.badRequest("Пользователь с таким email уже зарегистрирован"));
            }

            console.log("🔐 Хеширование пароля...");
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            console.log("📦 Создание нового пользователя...");
            const user = await User.create({ email, role, name, password: hashPassword });
            console.log("✅ Пользователь создан:", user.id);

            if (!process.env.SECRET_KEY) {
                console.error("❌ SECRET_KEY не задан в .env");
                return next(ApiError.internal("SECRET_KEY не задан в .env"));
            }

            console.log("🔏 Генерация JWT...");
            const token = generateJwt(user.id, user.email, user.role);

            console.log("🎉 Регистрация завершена успешно");
            return res.json({ token, name });
        } catch (error) {
            console.error("🔥 Ошибка в регистрации:", error);
            return next(ApiError.internal("Произошла ошибка на сервере"));
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where:{email}})
        if(!user) {
            return next(ApiError.internal("Пользователь не найден"))
        } 
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal("Неверный пароль"))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role) 
        return res.json({token})
    }
}

module.exports = new UserController()