// const express = require('express');
// const auth = require('../middleware/auth');
// const Complaint = require('../models/Complaint');
// const router = express.Router();

// // Get all complaints with search
// router.get('/complaints', auth, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

//   const { rollNo, department, subject } = req.query;
//   const query = {};
//   if (rollNo) query['user.rollNo'] = rollNo;
//   if (department) query['user.department'] = department;
//   if (subject) query.subject = { $regex: subject, $options: 'i' };

//   try {
//     const complaints = await Complaint.find(query).populate('user', 'rollNo department');
//     res.json(complaints);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Update complaint status
// router.put('/complaints/:id/status', auth, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

//   try {
//     const complaint = await Complaint.findByIdAndUpdate(
//       req.params.id,
//       { status: req.body.status },
//       { new: true }
//     );
//     res.json(complaint);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Delete complaint
// router.delete('/complaints/:id', auth, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

//   try {
//     await Complaint.findByIdAndDelete(req.params.id);
//     res.json({ msg: 'Complaint deleted' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const auth = require('../middleware/auth');
const Complaint = require('../models/Complaint');
const router = express.Router();

// Get all complaints with search
router.get('/complaints', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  const { rollNo, department, subject } = req.query;
  const query = {};
  if (rollNo) query['user.rollNo'] = rollNo;
  if (department) query['user.department'] = department;
  if (subject) query.subject = { $regex: subject, $options: 'i' };

  try {
    const complaints = await Complaint.find(query)
      .populate('user', 'rollNo department')
      .populate('feedback');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Update complaint status
router.put('/complaints/:id/status', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete complaint
router.delete('/complaints/:id', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Complaint deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Serve file for download
router.get('/complaints/:id/file', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint || !complaint.file) {
      return res.status(404).json({ msg: 'File not found' });
    }

    res.set({
      'Content-Type': complaint.file.contentType,
      'Content-Disposition': `attachment; filename="${complaint.file.originalName}"`
    });
    res.send(complaint.file.data);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;