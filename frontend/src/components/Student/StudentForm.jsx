import { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [complaint, setComplaint] = useState({ subject: '', description: '' });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('subject', complaint.subject);
    formData.append('description', complaint.description);
    if (file) formData.append('file', file);

    try {
      await axios.post('https://campus-complaint-portal.onrender.com/api/complaints', formData, {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Complaint submitted successfully!');
      setComplaint({ subject: '', description: '' });
      setFile(null);
    } catch (err) {
      alert('Failed to submit complaint');
    }
  };

  return (
    <div className="card p-4">
      <h3>Register a Complaint</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input type="text" name="subject" className="form-control" value={complaint.subject} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={complaint.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload File (Optional)</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit Complaint</button>
      </form>
    </div>
  );
};

export default StudentForm;