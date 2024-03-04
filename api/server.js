const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const BodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());

mongoose.connect("mongodb+srv://macumog:Sbuda.211@cluster0.1c7zp1s.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const Todo = require('./models/todo');

app.post('/todos', async (req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});




app.listen(5200, () => console.log("server started on port 5200"));