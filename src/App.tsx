import React from "react";
import { ResumeData } from "./interfaces";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import resumeDataImpt from "./resumeData";

export const App: React.FC = () => {
  const resumeData = resumeDataImpt as ResumeData;
  console.log(resumeData);
  console.log(resumeDataImpt);

  return (
    <div className="App">
      {resumeData !== undefined && (
        <>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      )}
    </div>
  );
};

export default App;
