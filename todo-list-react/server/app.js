const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const todoSchema = new mongoose.Schema({
  task: String,
});

const Todo = mongoose.model('Todo', todoSchema);

app.get("/",async(req,res)=>{
     try {
    const todoTask = await Todo.find();
    res.status(201).json(todoTask);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
})
app.post('/addTask', async (req, res) => {
  try {
    const task = new Todo(req.body)
    await task.save()
    res.status(201).json({ message: 'task created suceessfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

app.listen(5000,()=>{
    console.log("App is listining to port no. ",5000)
})