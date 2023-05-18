import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Safaa El Harras",
    location: "Casablana, Morocco",
    email: "elharrassafaa@gmail.com",
    availability: "Open for work",
    brand:
    "My name is Safaa El Harras, and I am a first-year engineering student specializing in Computer Science and Emerging Technologies at ENSAJ. I am a developer with expertise in various programming languages.  I have a deep passion for software engineering and have been fascinated by computers and technology from a young age. Choosing to pursue higher education in software engineering allows me to further expand my knowledge and understanding of this field. I have a strong passion for programming and constantly enjoy exploring new technologies to develop innovative solutions to complex problems. Through my software engineering training, I have acquired a solid foundation in coding, software design, and system development. I am always on the lookout for internships and projects that allow me to apply my skills in real-world contexts and tackle interesting challenges. I firmly believe that a passion for problem-solving and a commitment to excellence are essential qualities for success in this field.,"
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
