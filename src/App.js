import './App.css';
import ReactDOM from "react-dom/client"
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Nav from './components/Nav.js';
import HomePage from "./components/Homepage.js"
import BookingPage from "./components/BookingPage.js"

function App() {
  return (
    <>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
