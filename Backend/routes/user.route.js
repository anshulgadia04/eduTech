import { Router } from "express";
import { addCoursetoCart, getAllCartCourses, login, removeCourseFromCart, signUp } from "../controller/user.controller.js";

const router = Router();

router.post('/signup' , signUp);
router.post('/login' , login);
router.post('/addtocart' , addCoursetoCart);

router.post('/getcart' , getAllCartCourses);
router.post('/removecoursecart' , removeCourseFromCart);





export default router;