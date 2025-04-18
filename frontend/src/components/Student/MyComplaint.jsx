// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const MyComplaint = () => {
// //   const [complaints, setComplaints] = useState([]);

// //   useEffect(() => {
// //     const fetchComplaints = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/complaints', {
// //           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
// //         });
// //         setComplaints(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchComplaints();
// //   }, []);

// //   return (
// //     <div className="card p-4">
// //       <h3>My Complaints</h3>
// //       <table className="table table-striped">
// //         <thead>
// //           <tr>
// //             <th>Tracking ID</th>
// //             <th>Subject</th>
// //             <th>Status</th>
// //             <th>File</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {complaints.map((complaint) => (
// //             <tr key={complaint._id}>
// //               <td>{complaint.trackingId}</td>
// //               <td>{complaint.subject}</td>
// //               <td>{complaint.status}</td>
// //               <td>{complaint.file ? <a href={`http://localhost:5000/uploads/${complaint.file}`} target="_blank" rel="noopener noreferrer">View</a> : 'None'}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default MyComplaints;


// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const MyComplaint = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/complaints', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setComplaints(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComplaints();
//   }, []);

//   return (
//     <div className="card p-4">
//       <h3>My Complaints</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Tracking ID</th>
//             <th>Subject</th>
//             <th>Status</th>
//             <th>File</th>
//             <th>Feedback</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint) => (
//             <tr key={complaint._id}>
//               <td>{complaint.trackingId}</td>
//               <td>{complaint.subject}</td>
//               <td>{complaint.status}</td>
//               <td>{complaint.file ? <a href={`http://localhost:5000/uploads/${complaint.file}`} target="_blank" rel="noopener noreferrer">View</a> : 'None'}</td>
//               <td>
//                 {(complaint.status === 'Resolved' || complaint.status === 'Rejected') ? (
//                   <Link to={`/complaints/${complaint._id}/feedback`} className="btn btn-sm btn-primary">
//                     Provide Feedback
//                   </Link>
//                 ) : (
//                   'N/A'
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyComplaint;


// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const MyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/complaints', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setComplaints(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComplaints();
//   }, []);

//   return (
//     <div className="card p-4">
//       <h3>My Complaints</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Tracking ID</th>
//             <th>Subject</th>
//             <th>Status</th>
//             <th>File</th>
//             <th>Feedback</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint) => (
//             <tr key={complaint._id}>
//               <td>{complaint.trackingId}</td>
//               <td>{complaint.subject}</td>
//               <td>{complaint.status}</td>
//               <td>
//                 {complaint.file && complaint.file.originalName ? (
//                   <a
//                     href={`http://localhost:5000/api/admin/complaints/${complaint._id}/file`}
//                     download={complaint.file.originalName}
//                     className="text-primary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Download
//                   </a>
//                 ) : (
//                   'None'
//                 )}
//               </td>
//               <td>
//                 {(complaint.status === 'Resolved' || complaint.status === 'Rejected') ? (
//                   <Link to={`/student/complaints/${complaint._id}/feedback`} className="btn btn-sm btn-primary">
//                     Provide Feedback
//                   </Link>
//                 ) : (
//                   'N/A'
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyComplaints;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/complaints', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setComplaints(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComplaints();
  }, []);

  return (
    <div className="card p-4">
      <h3>My Complaints</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>File</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.trackingId}</td>
              <td>{complaint.subject}</td>
              <td>{complaint.status}</td>
              <td>
                {complaint.file && complaint.file.originalName ? (
                  <a
                    href={`https://campus-complaint-portal.onrender.com/api/admin/complaints/${complaint._id}/file`}
                    download={complaint.file.originalName}
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                ) : (
                  'None'
                )}
              </td>
              <td>
                {(complaint.status === 'Resolved' || complaint.status === 'Rejected') ? (
                  complaint.feedback ? (
                    'Feedback Submitted'
                  ) : (
                    <Link to={`/student/complaints/${complaint._id}/feedback`} className="btn btn-sm btn-primary">
                      Provide Feedback
                    </Link>
                  )
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComplaints;