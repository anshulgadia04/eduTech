import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    courseName: "",
    shortDescription: "",
    numberOfLessons: 0,
    durationInMonths: 0,
    coursePrice: 0,
    instructorName: "",
    prerequisites: [],
    syllabus: [],
  });

  const [numModules, setNumModules] = useState(1);
  const [modules, setModules] = useState([{ title: "", description: "" }]);

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleNumModulesChange = (e) => {
    const value = e.target.value;
    setNumModules(value);
    setModules(new Array(Number(value)).fill({ title: "", description: "" }));
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index] = { ...updatedModules[index], [field]: value };
    setModules(updatedModules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...courseData,
      syllabus: modules,
    };

    try {
      const response = await axios.post(
        "http://0.0.0.0:3000/course/addcourse",
        finalData
      )
      .then((res)=>{
        toast.success("Course added successfully");
      setCourseData({
        courseName: "",
        shortDescription: "",
        numberOfLessons: 0,
        durationInMonths: 0,
        coursePrice: 0,
        instructorName: "",
        prerequisites: [],
        syllabus: [],
      });
      setNumModules(1);
      setModules([{ title: "", description: "" }]);
      })
    } catch (error) {
      toast.error("Error adding course");
    }
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-center text-xl">Add Course</h1>

      <form id="courseForm" onSubmit={handleSubmit} className="m-auto space-y-5">
        <div className="flex flex-col">
          <h3 className="">Course Name:</h3>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={courseData.courseName}
            onChange={handleChange}
            required
            className="bg-gray-200 mb-10 w-1/4 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="shortDescription">Short Description:</label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            maxLength={100}
            value={courseData.shortDescription}
            onChange={handleChange}
            required
            className="bg-gray-200 mb-10 w-1/2 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="numberOfLessons">Number of Lessons:</label>
          <input
            type="number"
            id="numberOfLessons"
            name="numberOfLessons"
            value={courseData.numberOfLessons}
            onChange={handleChange}
            className="bg-gray-200 mb-10 w-1/4 h-10 px-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="durationInMonths">Duration (Months):</label>
          <input
            type="number"
            id="durationInMonths"
            min="1"
            max="50"
            name="durationInMonths"
            value={courseData.durationInMonths}
            onChange={handleChange}
            required
            className="bg-gray-200 mb-10 w-1/4 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="coursePrice">Course Price:</label>
          <input
            type="number"
            id="coursePrice"
            name="coursePrice"
            value={courseData.coursePrice}
            onChange={handleChange}
            required
            className="bg-gray-200 mb-10 w-1/4 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="instructorName">Instructor Name:</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={courseData.instructorName}
            onChange={handleChange}
            required
            className="bg-gray-200 mb-10 w-1/4 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="prerequisites">Prerequisites (Comma Separated):</label>
          <input
            type="text"
            name="prerequisites"
            value={courseData.prerequisites.join(",")}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                prerequisites: e.target.value.split(","),
              })
            }
            required
            className="bg-gray-200 mb-10 w-1/2 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="numModules">Number of Modules:</label>
          <input
            type="number"
            id="numModules"
            name="numModules"
            min="1"
            max="11"
            value={numModules}
            onChange={handleNumModulesChange}
            required
            className="bg-gray-200 mb-10 w-1/2 h-10 px-2"
          />
        </div>

        {modules.map((module, index) => (
          <div key={index}>
            <h3 className="mb-3">Module {index + 1}</h3>
            <div className="flex flex-col">
              <label htmlFor={`moduleTitle${index}`}>Title:</label>
              <input
                type="text"
                id={`moduleTitle${index}`}
                name={`moduleTitle${index}`}
                value={module.title}
                onChange={(e) =>
                  handleModuleChange(index, "title", e.target.value)
                }
                required
                className="bg-gray-200 mb-10 w-1/2 h-10 px-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor={`moduleDescription${index}`}>Description:</label>
              <textarea
                id={`moduleDescription${index}`}
                name={`moduleDescription${index}`}
                value={module.description}
                onChange={(e) =>
                  handleModuleChange(index, "description", e.target.value)
                }
                required
                className="bg-gray-200 mb-10 w-1/2 px-2"
              />
              <hr />
            </div>
          </div>
        ))}

        <button type="submit" className="bg-blue-500 px-3 py-2 rounded-md text-white">
          Add Course
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Admin;
