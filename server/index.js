require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const modules = require("./modules/modules");
const cors = require("cors");
const fileUpload = require("express-fileupload");
// const router = require("./routes/index");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

// Настроим CORS
app.use(cors());

// Тестовый маршрут
app.get('/', (req, res) => {
  res.status(200).json({message: "YOOOOOO!"});
});

// // Ваши маршруты
// app.use("/api", router);

// Запуск сервера
const start = async () => {
  try {
    console.log(process.env.DATABASE_URL);  // Убедитесь, что переменные окружения правильные
    await sequelize.authenticate();
    await sequelize.sync();
    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
