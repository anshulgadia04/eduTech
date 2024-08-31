import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


import Courserouter from './routes/course.route.js'
import userRouter from './routes/user.route.js'

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



try {
    mongoose.connect("mongodb://127.0.0.1:27017/eduTech")
    console.log("DB COnnected Successfully");
} catch (error) {
    console.log("Error in connection , ",error)
}


app.get('/' , (req,res) => {
    res.send("Hello")
})

app.post('/test', (req, res) => {
    console.log(req.body);
    res.json({ received: req.body });
});


app.use('/course' , Courserouter);
app.use('/user' , userRouter);


app.listen(3000 , ()=>{
    console.log("Server is listening at port number 3000");
})