// const express = require('express');
// const auth = require('../middleware/auth');
// const Complaint = require('../models/Complaint');
// const Feedback = require('../models/Feedback');
// const multer = require('multer');
// const router = express.Router();

// const upload = multer({ dest: 'uploads/' });

// // Submit complaint
// router.post('/', auth, upload.single('file'), async (req, res) => {
//   const { subject, description } = req.body;
//   try {
//     const complaint = new Complaint({
//       user: req.user.id,
//       subject,
//       description,
//       file: req.file ? req.file.filename : null
//     });
//     await complaint.save();
//     res.json(complaint);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Get user's complaints
// router.get('/', auth, async (req, res) => {
//   try {
//     const complaints = await Complaint.find({ user: req.user.id }).populate('user', 'rollNo department');
//     res.json(complaints);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Submit feedback
// router.post('/:complaintId/feedback', auth, async (req, res) => {
//   const { rating, comment } = req.body;
//   try {
//     const complaint = await Complaint.findById(req.params.complaintId);
//     if (!complaint || complaint.user.toString() !== req.user.id) {
//       return res.status(404).json({ msg: 'Complaint not found' });
//     }
//     if (complaint.status !== 'Accepted' && complaint.status !== 'Rejected') {
//       return res.status(400).json({ msg: 'Feedback can only be submitted for accepted or rejected complaints' });
//     }

//     const feedback = new Feedback({ complaint: req.params.complaintId, rating, comment });
//     await feedback.save();
//     res.json(feedback);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

// const express = require('express');
// const auth = require('../middleware/auth');
// const Complaint = require('../models/Complaint');
// const Feedback = require('../models/Feedback');
// const multer = require('multer');
// const router = express.Router();

// const upload = multer({ dest: 'uploads/' });

// // Submit complaint
// router.post('/', auth, upload.single('file'), async (req, res) => {
//   const { subject, description } = req.body;
//   try {
//     const complaint = new Complaint({
//       user: req.user.id,
//       subject,
//       description,
//       file: req.file ? req.file.filename : null
//     });
//     await complaint.save();
//     res.json(complaint);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Get user's complaints
// router.get('/', auth, async (req, res) => {
//   try {
//     const complaints = await Complaint.find({ user: req.user.id }).populate('user', 'rollNo department');
//     res.json(complaints);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// // Submit feedback
// router.post('/:complaintId/feedback', auth, async (req, res) => {
//   const { rating, comment } = req.body;
//   try {
//     const complaint = await Complaint.findById(req.params.complaintId);
//     if (!complaint || complaint.user.toString() !== req.user.id) {
//       return res.status(404).json({ msg: 'Complaint not found' });
//     }
//     if (complaint.status !== 'Resolved' && complaint.status !== 'Rejected') {
//       return res.status(400).json({ msg: 'Feedback can only be submitted for resolved or rejected complaints' });
//     }

//     const feedback = new Feedback({ complaint: req.params.complaintId, rating, comment });
//     await feedback.save();
//     res.json(feedback);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const auth = require('../middleware/auth');
const Complaint = require('../models/Complaint');
const Feedback = require('../models/Feedback');
const multer = require('multer');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// Submit complaint
router.post('/', auth, upload.single('file'), async (req, res) => {
  const { subject, description } = req.body;
  try {
    const complaint = new Complaint({
      user: req.user.id,
      subject,
      description,
      file: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
            originalName: req.file.originalname
          }
        : null
    });
    await complaint.save();
    res.json(complaint);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get user's complaints
router.get('/', auth, async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.id })
      .populate('user', 'rollNo department')
      .populate('feedback');
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Submit feedback
router.post('/:complaintId/feedback', auth, async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const complaint = await Complaint.findById(req.params.complaintId).populate('feedback');
    if (!complaint || complaint.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Complaint not found' });
    }
    if (complaint.status !== 'Resolved' && complaint.status !== 'Rejected') {
      return res.status(400).json({ msg: 'Feedback can only be submitted for resolved or rejected complaints' });
    }
    if (complaint.feedback) {
      return res.status(400).json({ msg: 'Feedback already submitted for this complaint' });
    }

    const feedback = new Feedback({ complaint: req.params.complaintId, rating, comment });
    await feedback.save();

    // Update complaint with feedback reference
    complaint.feedback = feedback._id;
    await complaint.save();

    res.json(feedback);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;