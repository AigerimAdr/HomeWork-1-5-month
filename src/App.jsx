import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import FormsPage from "./pages/FormsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="forms" element={<FormsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
