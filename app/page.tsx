import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface SectionTemplateProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({ children, className }) => {
  return (
    <section className={`bg-blue-200 min-h-screen sectionHeight ${className}`}>
      <div className=" mt-8 mx-36 mobile:mx-2 rounded h-full">
        {children}
      </div>
    </section>
  );
};


const Hero = () => {
  return (
    <SectionTemplate className="bg-neutral-900">
      <div className="flex flex-row mobile:flex-col tablet:flex-col h-full">

        <div className="w-full h-full   rounded-md  ">
            <img src="/animated_profile_dev.png" className="h-full"/>
        </div>

        <div className="w-full h-full flex items-center p-6 rounded-md">
          <div className="desktop:mx-8">
              <h1 className="text-3xl font-bold mb-4">Dev Patel</h1>
              <p>
              Hello there, I am a Technology Innovation consultant who provides support to small and medium-sized enterprises to design and address their technology needs. I am also passionate about building web applications and researching and deploying machine learning models.  
              </p>
              
              <div className="social-icons pt-8 flex flex-row items-center">
                <a href="https://github.com/DevkumarPatel" target="_blank" rel="noopener noreferrer" className="text-zinc-200 mr-8 hover:text-gray-800 text-5xl">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/dev2804/" target="_blank" rel="noopener noreferrer" className="text-violet-600 mr-8 hover:text-blue-700 text-5xl">
                  <FaLinkedin />
                </a>
                
              </div>

          </div>
        </div>



      </div>
    </SectionTemplate>
  );
};

const Experience = () => {
  return (
    <SectionTemplate className="bg-neutral-800">
      <div className="border border-solid">

      </div>
    </SectionTemplate>
  );

}



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero></Hero>
      
    </main>
  );
}

/**
 * 
<ParallaxProvider>
      <main >
      <div className="flex min-h-screen flex-col items-center justify-between h-screen ">
        <Navbar></Navbar>
        <div className=" flex flex-col lg:flex-row items-center justify-center h-full w-full">
          <div className="shadow-md h-full pb-20 w-full  flex items-center justify-center">
            <img src="/animated_profile_dev.png" alt="Your Alt Text" className="h-full" />
          </div>

          <div className="shadow-md w-full h-full">
            Card 2
          </div>
        </div>

      </div>
    </main>

    </ParallaxProvider>
 * 
 */