import { useState } from 'react';
import ComplaintList from './ComplaintList';

const AdminDashboard = () => {
  const [search, setSearch] = useState({ rollNo: '', department: '', subject: '' });

  const handleSearchChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="card p-4 mb-4">
        <h4>Search Complaints</h4>
        <div className="row">
          <div className="col-md-4">
            <input type="text" name="rollNo" className="form-control" placeholder="Roll No" onChange={handleSearchChange} />
          </div>
          <div className="col-md-4">
            <input type="text" name="department" className="form-control" placeholder="Department" onChange={handleSearchChange} />
          </div>
          <div className="col-md-4">
            <input type="text" name="subject" className="form-control" placeholder="Subject" onChange={handleSearchChange} />
          </div>
        </div>
      </div>
      <ComplaintList search={search} />
    </div>
  );
};

export default AdminDashboard;