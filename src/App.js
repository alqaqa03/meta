import './App.css';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Nav from './components/Nav.js';
import HomePage from "./components/HomePage.js"
import BookingPage from "./components/BookingPage.js"

function App() {
  return (
    <>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
