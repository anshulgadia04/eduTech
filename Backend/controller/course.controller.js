import Course from "../models/course.model.js";

export  const addCourse = async (req, res) => {
    try {

        console.log(req.body);
        
        const courseName = req.body.courseName;
        const shortDescription = req.body.shortDescription;
        const numberOfLessons = req.body.numberOfLessons;
        const durationInMonths = req.body.durationInMonths;
        const coursePrice = req.body.coursePrice;
        const instructorName = req.body.instructorName;
        const prerequisites = req.body.prerequisites;
        const syllabus = req.body.syllabus;

        // if (!courseName || !shortDescription || !numberOfLessons || !durationInMonths || !coursePrice || !instructorName) {
        //     return res.status(400).json({ message: 'All fields are required' });
        // }

      
        const newCourse = new Course({
            courseName,
            shortDescription,
            numberOfLessons,
            durationInMonths,
            coursePrice,
            instructorName,
            prerequisites,
            syllabus

        });

        
        await newCourse.save();

        res.status(201).json({ message: 'Course added successfully', course: newCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const getAllCourses = async (req,res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.log("Erron in getAllCourses : ",error);
        
    }
}

