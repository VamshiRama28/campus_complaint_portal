const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trackingId: { type: String, unique: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  file: {
    data: { type: Buffer }, // Store file as binary data
    contentType: { type: String }, // MIME type
    originalName: { type: String } // Original file name
  },
  status: { type: String, default: 'Pending' },
  feedback: { type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }, // Reference to feedback
  createdAt: { type: Date, default: Date.now }
});

complaintSchema.pre('save', async function (next) {
  if (!this.trackingId) {
    this.trackingId = `CMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }
  next();
});

module.exports = mongoose.model('Complaint', complaintSchema);