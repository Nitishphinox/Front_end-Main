/*Steps include*/
/*

Step-1: To Create React App follow these steps

Inside terminal write
a) npx create-react-app major_project
b)  cd major project
c)npm start

functional Components:
- javascript functions that return jsx
- simple and easier to write compared to class
- dont need to manage state or lifecycle methods

Step-2:  We have created different  functions components using Booststrap and React
NavBar- Home, Display, All Items, Add New Items,Update Items, Delete Items, ABout-Us, Contact 
BODY 
FOOTER
We have also created different function components for About-Us, Contact-Us, Display etc.
Step-3: Now inside App.js We have imported these functions

*/


/*


STEP-4: For json-server

C --- CREATE --- POST
R ---- READ ----- GET
U ---- UPDATE ---- PUT
D  ----- DELETE --- DELETE


4.1- Install Json Server by opening another terminal and write
npm install -g json-server


4.2- Create a file db.json inside major_project folder


4.3- Start json server by writng the following command in terminal
 npx json-server --watch db.json --port 5001


*/


import Nav from "./Components/navbar";
import Body from "./Components/body";
import Contact from "./Components/Contact";
import Fotter from "./Components/fotter";
import About from "./Components/about";
import Display from "./Components/display";
 import AllItems from "./Components/All_Items";
 import Update from "./Components/Update";
 import Delete from "./delete";
 import AddItem from "./Components/Add_New_Items";
import {Routes , Route } from 'react-router-dom';

function App(){
  return(
    <>
    <Nav/>
 
    <Routes>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/add_item" element={<AddItem/>}/>
       <Route path="/update_item/:id" element={<Update/>}/>
       <Route path="/delete_item" element={<Delete/>}/>

       





       <Route path="/display" element={<Display/>}/>
       <Route path="/all_item" element={<AllItems/>}/>



       <Route path="/" element={<Body/>}/>


       </Routes>
    <Fotter/>
    </>
  )
}


export default App;