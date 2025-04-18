import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FeedbackForm = () => {
  const { complaintId } = useParams();
  const [feedback, setFeedback] = useState({ rating: '', comment: '' });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://campus-complaint-portal.onrender.com/api/complaints/${complaintId}/feedback`, feedback, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Feedback submitted successfully!');
      setFeedback({ rating: '', comment: '' });
    } catch (err) {
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="card p-4">
      <h3>Provide Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input type="number" name="rating" min="1" max="5" className="form-control" value={feedback.rating} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea name="comment" className="form-control" value={feedback.comment} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;