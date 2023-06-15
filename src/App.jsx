
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

/*dipeshmalvia
thapatechnical
hackerstest.com	 




npm
npx
nodejs
react js -> javascript library
github server by ms
vite-> code makes fast, reduce loding time,
hoisting
callback function
annonimious fun-> no name
arrow function=>
string interpolation ${} adds string and int
````` backtrick                                  [solidityjs]

for each -> CAN alter bt no return
map -> animate and style
filter -> filters

terminal
npm create vite@latest
code .
ctrl + ` terminal
npm i 
header footer unchanged called layout 
mui.com and copy to ter layoit
responsive drawer-> js
react es7 extension

app.jsx

import ResponsiveDrawer from './Admin/Layout';


function App() {
  
  return (
    <>
    <ResponsiveDrawer(//ctrl+space)/> 	
    </>
  );
  
  
  
  import ResponsiveAppBar from './user/UserLayout';


function App() {
  
  return (
    <>
    <ResponsiveAppBar/>
    </>
  );
  
  userlayout
  return (
    <AppBar position="static">
        <CssBaseline (//ctrl+space)/>
		
		ctrl+F change all
		
		rafce->reacr arrow function component export
		npm i react-router-dom -> move from one page to other
		ManishRegmi
		Sujanchoudhary
		in home file
		npm i axios to load data from server,edit
		
		for admin login
		reqres.in
		
		
		GIT
		to download git-scm.com
		tracking
		comit->staging
		push
		
		
		git init
		git branch -M main
 git remote add origin https://github.com/Binkelkharel/csit-workshop.git
		git add .
		git commit -m 'push'
		 git push origin main
		
*/