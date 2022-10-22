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
      <Section section_input="Twitter Link"/>
      <Section section_input="Zuri Team"/>
      <Section section_input="Zuri Books"/>
      <Section section_input="Python Books"/>
      <Section section_input="Background Check for Coders"/>
      <Section section_input="Design Books"/>
      <SectionIcon/>
      <Footer/>
      {/* <Section Icon={profile}/> */}
    </div>
  );
}

export default App;
