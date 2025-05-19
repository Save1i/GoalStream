require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const modules = require("./modules/modules");
const cors = require("cors");
const router = require("./routes/index");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message: "YOOOOOO!"});
});

app.use("/api", router);

const start = async () => {
  try {
    console.log(process.env.DATABASE_URL);  // Убедитесь, что переменные окружения правильные
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    await sequelize.sync();
// 
    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
