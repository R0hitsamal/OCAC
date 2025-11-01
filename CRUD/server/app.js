import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/formdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address : String,
  pin : Number
});

const User = mongoose.model('User', UserSchema);

app.get("/api/formdata",async(req,res)=>{
     try {
    const data = await User.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
})
app.get("/api/formdata/:id",async(req,res)=>{
  const {id} = req.params;
     try {
    const data = await User.findById(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
})
app.post('/api/form', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json({ message: 'user created suceessfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});
app.patch('/api/:id/update', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error });
  }
});

app.delete('/api/:id/delete', async (req, res) => {
  try {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.status(201).json({ message: 'Delete successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
});
app.listen(3000,()=>{
    console.log("App is listining to port no. ",3000)
})