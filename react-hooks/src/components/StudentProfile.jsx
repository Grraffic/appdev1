import React, { createContext, useContext } from "react";

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const student = {
    name: "Rafael Ramos",
    age: 20,
    major: "Bachelor of Science in Information System",
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
};

const StudentProfile = () => {
  const student = useContext(StudentContext);

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Major: {student.major}</p>
    </div>
  );
};

export { StudentProvider, StudentProfile };
