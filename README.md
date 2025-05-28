# Campus Complaint Portal

A web-based platform for students to register campus complaints, and for administrators to manage and resolve them efficiently.

---

## Features

- **Student Portal**
  - Register complaints with file attachments.
  - Track status of submitted complaints.
  - Submit feedback after resolution.

- **Admin Portal**
  - View, search, and filter complaints.
  - Update complaint statuses (Pending, Resolved, Rejected, etc.).
  - Download complaint attachments.
  - Delete resolved/irrelevant complaints.

---

## Tech Stack

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT-based

---

## Setup Guidelines

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)
- MongoDB instance (local or cloud)

---

### 1. Clone the Repository

```bash
git clone https://github.com/VamshiRama28/campus_complaint_portal.git
cd campus_complaint_portal
```

---

### 2. Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

### 3. Backend Setup

```bash
cd backend
npm install
```

#### Start the backend server:

```bash
npm start
```

By default, the backend runs on `http://localhost:5000`

---

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

#### Start the frontend development server:

```bash
npm run dev
```

By default, the frontend runs on `http://localhost:5173`

---

## Usage

- **Student Registration / Login:** Register/log in as a student to submit complaints.
- **Complaint Submission:** Fill the form with subject, description, and (optionally) attach a file.
- **Complaint Tracking:** View status and download any admin responses/files.
- **Feedback:** Once a complaint is resolved, submit feedback.

- **Admin Login:** Log in as admin to manage all complaints.
- **Status Update:** Change status, add remarks, or delete complaints as necessary.
- **Download Attachments:** Download and review attached files.

---

## Deployment

- You can deploy the backend to platforms like [Render](https://render.com), [Heroku](https://heroku.com), or [Vercel](https://vercel.com) for the frontend.
- Make sure to update the API endpoint URLs in the frontend (`src/` code) to point to your deployed backend.

---

## API Endpoints

- **Student Endpoints:**
  - `POST /api/complaints` - Submit a new complaint (with file upload).
  - `GET /api/complaints` - Get complaints for logged-in student.
  - `POST /api/complaints/:complaintId/feedback` - Submit feedback for a complaint.

- **Admin Endpoints:**
  - `GET /api/admin/complaints` - Get/search all complaints.
  - `PUT /api/admin/complaints/:id/status` - Update status.
  - `DELETE /api/admin/complaints/:id` - Delete complaint.
  - `GET /api/admin/complaints/:id/file` - Download file.

> All endpoints require authentication (JWT in `Authorization` header).

---

## File Uploads

- Files submitted with complaints are stored in MongoDB as binary data and can be downloaded by admins.

---

## Contributing

1. Fork the repository
2. Create a new branch for your feature/fix
3. Submit a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, open an issue on GitHub.
