import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import Course from "../models/course.model.js";

export const signUp = async (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;


    try {
        const user = await User.findOne({email:email});
    if(user){
        return res.status(400).json({message : "User Already Exists"});
    }

    const newUser = new User({
        email,
        username,
        password
    });

    await newUser.save();
    res.status(200).json({message : "Signup Successfully" , user : {
        username : newUser.username
    }})
    } catch (error) {
        res.status(500).json({message : "Internel Server Error"})
    }
}


export const login = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email:email});
        if(!user)
        {
            res.status(400).json({message : "No user exists"})
        }
        if(password == user.password){

            const token = jwt.sign({userId : user._id , isAdmin : user.isAdmin} , "anshulgadia" , { expiresIn : "1h"});

            res.status(200).json({
                message:"Logged In Successfully" , 
                username : user.username,
                token            
            })
        }
        else{
            res.status(400).json({message : "Incorrect Password"})
        }

    } catch (error) {
        
    }
}

export const addCoursetoCart = async (req,res) => {
    const courseId = req.body.courseId;
    const userid = req.body.userid;
    // console.log("User id is" , userid);
    // console.log("course id " ,courseId);
    

    try {
        const user = await User.findByIdAndUpdate({_id : userid} , 

            {   $push : {coursesInCart : courseId} },

            {   new : true}
        )

        if(!user)
        {
            res.status(404).json({message : "User not found"})
        }

        res.status(200).json({message : "Book added to cart" , user});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        console.log("Error in addCoursetoCart : " , error);
        
    }

}

export const getAllCartCourses = async (req, res) => {


    const userid  = req.body.userid;
    console.log(userid);
    

    try {
        const user = await User.findOne({ _id: userid });

        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }

        const coursePromises = user.coursesInCart.map(courseId => Course.findById(courseId));

        const courses = await Promise.all(coursePromises);

        res.status(200).json({ message: "Courses Fetched", courses, username: user.username });


    } catch (error) {


        res.status(500).json({ message: "Internal Server Error" });
        console.error("Error in getAllCartCourses: ", error);
    }
};


export const removeCourseFromCart = async (req,res) => {
    const courseId = req.body.courseId ;
    const userid = req.body.userid;

    try {

        const user = await User.findById(userid);
        if(!user)
        {
            res.status(404).json({message : "User Not Found"});
        }

        user.coursesInCart = user.coursesInCart.filter((cid) => {
            return (
                cid.toString() !== courseId.toString()
            )
        });
        await user.save();

        const coursePromises = user.coursesInCart.map(courseId => Course.findById(courseId));
        const courses = await Promise.all(coursePromises);



        return res.status(200).json({message : "Course removed successfully" , courses , username:user.username})

        
    } catch (error) {
        console.log("Error in removebookfromcart : ", error);
        
    }

}