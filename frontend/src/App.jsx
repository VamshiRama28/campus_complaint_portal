// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Common/Navbar';
// import Footer from './components/Common/Footer';
// import Home from './pages/Home';
// import StudentDashboard from './pages/StudentDashboard';
// import AdminPanel from './pages/AdminPanel';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Navbar />
//         <main className="flex-grow-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/student" element={<StudentDashboard />} />
//             <Route path="/admin" element={<AdminPanel />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import AdminPanel from './pages/AdminPanel';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Common/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student/*" element={<StudentDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;