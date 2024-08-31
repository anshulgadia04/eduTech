import express from 'express'
import { addCourse, getAllCourses } from "../controller/course.controller.js";


const router = express.Router();

router.post('/addcourse' , addCourse);


router.get('/getallcourses' , getAllCourses);


export default router;
