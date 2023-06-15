
import ResponsiveAppBar from './user/UserLayout';
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './user/Home/Home';
import UserLayout from './user/UserLayout';
import About from './user/AboutUs/About';
import Blog from './user/Blog/Blog';
import SingleBlog from './user/Blog/SingleBlog';
import AdminHome from './Admin/Home/AdminHome';
import AdminLayout from './Admin/Layout';
import AddBlog from './Admin/Blog/AddBlog';
import EditBlog from './Admin/Blog/EditBlog';
import Login from './Auth/Login';


function App() {
  
  return (
    <>
    <Router>
    <Routes>

        <Route path='/login'element={<Login/>}/>

        <Route path="" element={<UserLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<SingleBlog/>} />
      </Route>

        <Route path="/admin/" element={<AdminLayout/>} >
        <Route path="" element={<AdminHome/>} />
        <Route path="add" element={<AddBlog/>} />
        <Route path="edit/:id" element={<EditBlog/>} />
        </Route>
    </Routes>
    </Router>
   
    </>
  );
  
}

export default App
