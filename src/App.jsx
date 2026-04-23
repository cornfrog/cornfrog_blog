import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Posts from "./pages/Posts";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
