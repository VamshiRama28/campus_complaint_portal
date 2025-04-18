// import StudentForm from '../components/Student/StudentForm';
// import MyComplaint from '../components/Student/MyComplaint'
// import FeedbackForm from '../components/Student/FeedbackForm'
// const StudentDashboard = () => {
//   return (
//     <div className="container mt-4">
//       <h2>Student Dashboard</h2>
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <StudentForm />
//         </div>
//         <div className="col-md-6 mb-4">
//           <MyComplaint />
//         </div>
//       </div>
//       <div className="row">
//         <FeedbackForm/>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard


import StudentForm from '../components/Student/StudentForm';
import MyComplaint from '../components/Student/MyComplaint';
import FeedbackForm from '../components/Student/FeedbackForm';
import { Routes, Route } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Student Dashboard</h2>
      <Routes>
        <Route
          path="/"
          element={
            <div className="row">
              <div className="col-md-6 mb-4">
                <StudentForm />
              </div>
              <div className="col-md-6 mb-4">
                <MyComplaint />
              </div>
            </div>
          }
        />
        <Route path="complaints/:complaintId/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
};

export default StudentDashboard;