import mongoose from 'mongoose'



const syllabusSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});


const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    shortDescription: { type: String, required: true },
    numberOfLessons: { type: Number, required: true },
    durationInMonths: { type: Number, required: true },
    coursePrice: { type: Number, required: true },
    instructorName: { type: String, required: true },
    prerequisites: [{ type: String, required: true }],
    syllabus: [syllabusSchema]
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
