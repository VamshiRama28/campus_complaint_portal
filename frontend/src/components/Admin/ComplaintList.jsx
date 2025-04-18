// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ComplaintList = ({ search }) => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/admin/complaints', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
//           params: search
//         });
//         setComplaints(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComplaints();
//   }, [search]);

//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/admin/complaints/${id}/status`, { status }, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       });
//       setComplaints(complaints.map(c => c._id === id ? { ...c, status } : c));
//     } catch (err) {
//       alert('Failed to update status');
//     }
//   };

//   const deleteComplaint = async (id) => {
//     if (window.confirm('Are you sure you want to delete this complaint?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/admin/complaints/${id}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setComplaints(complaints.filter(c => c._id !== id));
//       } catch (err) {
//         alert('Failed to delete complaint');
//       }
//     }
//   };

//   return (
//     <div className="card p-4">
//       <h3>All Complaints</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Tracking ID</th>
//             <th>Roll No</th>
//             <th>Department</th>
//             <th>Subject</th>
//             <th>Status</th>
//             <th>File</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint) => (
//             <tr key={complaint._id}>
//               <td>{complaint.trackingId}</td>
//               <td>{complaint.user.rollNo}</td>
//               <td>{complaint.user.department}</td>
//               <td>{complaint.subject}</td>
//               <td>
//                 <select 
//                   value={complaint.status} 
//                   onChange={(e) => updateStatus(complaint._id, e.target.value)}
//                   className="form-select"
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="Accepted">Accepted</option>
//                   <option value="Rejected">Rejected</option>
//                   <option value="Resolved">Resolved</option>
//                 </select>
//               </td>
//               <td>{complaint.file ? <a href={`http://localhost:5000/uploads/${complaint.file}`} target="_blank" rel="noopener noreferrer">View</a> : 'None'}</td>
//               <td>
//                 <button className="btn btn-danger btn-sm" onClick={() => deleteComplaint(complaint._id)}>
//                   <i className="bi bi-trash"></i>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ComplaintList;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ComplaintList = ({ search }) => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/admin/complaints', {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
//           params: search
//         });
//         setComplaints(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchComplaints();
//   }, [search]);

//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/admin/complaints/${id}/status`, { status }, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       });
//       setComplaints(complaints.map(c => c._id === id ? { ...c, status } : c));
//     } catch (err) {
//       alert('Failed to update status');
//     }
//   };

//   const deleteComplaint = async (id) => {
//     if (window.confirm('Are you sure you want to delete this complaint?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/admin/complaints/${id}`, {
//           headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//         });
//         setComplaints(complaints.filter(c => c._id !== id));
//       } catch (err) {
//         alert('Failed to delete complaint');
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h3>All Complaints</h3>
//       <div className="row">
//         {complaints.length === 0 ? (
//           <p>No complaints found.</p>
//         ) : (
//           complaints.map((complaint) => (
//             <div className="col-md-4 mb-4" key={complaint._id}>
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{complaint.subject}</h5>
//                   <p className="card-text">
//                     <strong>Tracking ID:</strong> {complaint.trackingId}<br />
//                     <strong>Roll No:</strong> {complaint.user.rollNo}<br />
//                     <strong>Department:</strong> {complaint.user.department}<br />
//                     <strong>Description:</strong> {complaint.description}<br />
//                     <strong>File:</strong> {complaint.file ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${complaint.file}`}
//                         download
//                         className="text-primary"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Download
//                       </a>
//                     ) : (
//                       'None'
//                     )}
//                   </p>
//                   <div className="mb-3">
//                     <label className="form-label">Status:</label>
//                     <select
//                       value={complaint.status}
//                       onChange={(e) => updateStatus(complaint._id, e.target.value)}
//                       className="form-select"
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Accepted">Accepted</option>
//                       <option value="Rejected">Rejected</option>
//                       <option value="Resolved">Resolved</option>
//                     </select>
//                   </div>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => deleteComplaint(complaint._id)}
//                   >
//                     <i className="bi bi-trash"></i> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ComplaintList;



import { useState, useEffect } from 'react';
import axios from 'axios';

const ComplaintList = ({ search }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/complaints', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
          params: search
        });
        setComplaints(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComplaints();
  }, [search]);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/complaints/${id}/status`, { status }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setComplaints(complaints.map(c => c._id === id ? { ...c, status } : c));
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const deleteComplaint = async (id) => {
    if (window.confirm('Are you sure you want to delete this complaint?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/complaints/${id}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setComplaints(complaints.filter(c => c._id !== id));
      } catch (err) {
        alert('Failed to delete complaint');
      }
    }
  };

  return (
    <div className="container mt-4">
      <h3>All Complaints</h3>
      <div className="row">
        {complaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          complaints.map((complaint) => (
            <div className="col-md-4 mb-4" key={complaint._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{complaint.subject}</h5>
                  <p className="card-text">
                    <strong>Tracking ID:</strong> {complaint.trackingId}<br />
                    <strong>Roll No:</strong> {complaint.user.rollNo}<br />
                    <strong>Department:</strong> {complaint.user.department}<br />
                    <strong>Description:</strong> {complaint.description}<br />
                    <strong>File:</strong> {complaint.file && complaint.file.originalName ? (
                      <a
                        href={`http://localhost:5000/api/admin/complaints/${complaint._id}/file`}
                        download={complaint.file.originalName}
                        className="text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    ) : (
                      'None'
                    )}<br />
                    <strong>Feedback:</strong> {complaint.feedback ? (
                      <>
                        Rating: {complaint.feedback.rating}/5<br />
                        Comment: {complaint.feedback.comment}
                      </>
                    ) : (
                      'None'
                    )}
                  </p>
                  <div className="mb-3">
                    <label className="form-label">Status:</label>
                    <select
                      value={complaint.status}
                      onChange={(e) => updateStatus(complaint._id, e.target.value)}
                      className="form-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteComplaint(complaint._id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ComplaintList;