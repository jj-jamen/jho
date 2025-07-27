import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import "./input.css"

export default function DesktopRoute() {
    const [activeSection, setActiveSection] = useState("about-me");

    useEffect(() => {
        AOS.init({
          once: false,
        });
    }, []);
  

  const sections = [
    { id: "about-me", label: "About me" },
    { id: "employment-history", label: "Employment History" },
    { id: "creative-portfolio", label: "Creative Portfolio" },
    { id: "go-high-level", label: "Go High Level" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];
  
    const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
    const { ref: expRef, inView: expInView } = useInView({ threshold: 0.5 });
    const { ref: portRef, inView: portInView } = useInView({ threshold: 0.5 });
    const { ref: goHighLevelRef, inView: goHighLevelInView } = useInView({ threshold: 0.5 });
    const { ref: eduRef, inView: eduInView } = useInView({ threshold: 0.5 });
    const { ref: certRef, inView: certInView } = useInView({ threshold: 0.5 });
    const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

    useEffect(() => {
      if (aboutInView) setActiveSection("about-me");
      else if (expInView) setActiveSection("employment-history");
      else if (portInView) setActiveSection("creative-portfolio");
      else if (goHighLevelInView) setActiveSection("go-high-level");
      else if (eduInView) setActiveSection("education");
      else if (certInView) setActiveSection("certifications");
      else if (contactInView) setActiveSection("contact");
    }, [aboutInView, expInView, portInView, goHighLevelInView, eduInView, certInView, contactInView]);

  return (
    <div id="desktop-design-container" className="hidden lg:flex flex-col items-center justify-center">

        <nav
          id="desktop-nav"
          className="sticky top-0 z-50 flex w-full justify-center items-center space-x-10 py-5 bg-transparent backdrop-blur-lg"
        >
          {sections.map((s) => (
          <button
            key={s.id}
            className={`custom-btn cursor-pointer ${activeSection === s.id ? "custom-btn-active" : ""}`}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          >
            {s.label}
          </button>
        ))}
        </nav>

          <section id="about-me" ref={aboutRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex justify-center items-center" data-aos-anchor-placement="center-center">
    
                <div id="jho-image" 
                  className="w-2/3 flex justify-center items-center" 
                  data-aos="fade-right" 
                  data-aos-delay="200" 
                  data-aos-duration="1000"

                >
                    <img
                    src="./jho/jho-portfolio-image.png"
                    alt="Jhonalyn Jamen - Executive Assistant"
                    className="w-[400px] h-[400px] object-cover border-dashed border-2 border-gray-300 rounded-full shadow-lg"
                    />
                </div>
                
                <div id="intro-text" className="w-full flex flex-col justify-center items-start">
                  <h1 className="text-8xl font-bold font-stylescript underline" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Jhonalyn Jamen</h1>
                  <p className="text-2xl mt-5" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                    Executive Assistant • Go High Level Specialist • Social Media Manager
                  </p>
                  <p className="text-sm italic mt-2" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
                    Experienced and adaptable professional with a solid background in customer service, executive support, and real estate coordination. Skilled in CRM tools, admin tasks, and tech support, with a proven track record of delivering efficient, high-quality service across diverse industries.
                  </p>

                  <div id="contact-buttons" className="w-full flex justify-start items-center space-x-4 mt-5">
                    <button
                      className="pointer flex items-center text-sm space-x-2 text-white bg-[#5f456e] px-1.5 py-0.5 rounded-sm hover:bg-slate-600 transition-colors duration-300"
                      data-aos="fade-left"
                      data-aos-delay="900"
                      data-aos-duration="1000"
                      onClick={() => window.open("https://www.linkedin.com/in/jhobarlosojamen/", "_blank")}
                    >
                      <FaLinkedin className="text-white" />
                      <span>LinkedIn</span>
                    </button>
                    <button
                      className="pointer flex items-center text-sm space-x-2 text-white bg-[#5f456e] px-1.5 py-0.5 rounded-sm hover:bg-slate-600 transition-colors duration-300"
                      data-aos="fade-left"
                      data-aos-delay="1100"
                      data-aos-duration="1000"
                    >
                      <FaDownload className="text-white" />
                      <span>Download CV</span>
                    </button>
                  </div>

                </div>
            </div>
          </section>

          <section id="employment-history" ref={expRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="employment-history-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Employment History</h1>
            </div>
          </section>

          <section id="creative-portfolio" ref={portRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="work-experience-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Creative Portfolio</h1>
            </div>
          </section>

          <section id="go-high-level" ref={goHighLevelRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="work-experience-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Go High Level</h1>
            </div>
          </section>

          <section id="education" ref={eduRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="work-experience-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Education</h1>
            </div>
          </section>

          <section id="certifications" ref={certRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="work-experience-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Certifications</h1>
            </div>
          </section>

          <section id="contact" ref={contactRef} className="w-2/3 h-full flex justify-center items-center space-x-10">
            <div className="w-full min-h-[100vh] flex flex-col justify-start items-start" data-aos-anchor-placement="center-center">
              <h1 id="work-experience-title" className="text-4xl uppercase font-bold italic mt-20" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">Contact</h1>
            </div>
          </section>

    </div>
  );
}