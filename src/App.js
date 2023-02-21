import './App.css';
import Nav from './components/Nav.js';
import HomePage from "./components/Homepage.js"
import BookingPage from "./components/BookingPage.js"

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
