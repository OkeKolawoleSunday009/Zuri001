import logo from './logo.svg';
import './App.css';
import Headeer from "./Zuri001/Headeer.js";
import Section from "./Zuri001/Section.js";
import Footer from "./Zuri001/Footer.js";
import SectionIcon from './Zuri001/SectionIcon';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

// import profile from "./Image/profile.jpeg"

function App() {
  return (
    <div className="">

      
      <Headeer/>
      <a href="https://twitter.com/OkekolawoleSun3">
         <Section section_input="Twitter Link"/>
      </a>
      <a href="http://trainng.zuri.team">
         <Section section_input="Zuri Team"/>
      </a>
      <a href="https://books.zuri.team">

         <Section section_input="Zuri Books"/>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>/">

        <Section section_input="Python Books"/>
      </a>
      <a href="https://background.zuri.team//">

         <Section section_input="Background Check for Coders"/>
       </a>
      <a href="https://training.zuri.team/">

         <Section section_input="Design Books"/>
      </a>
      <a href="https://books.zuri.team/design-rules">

         <SectionIcon/>
      </a>
      <Footer/>
      {/* <Section Icon={profile}/> */}
    </div>
  );
}

export default App;
