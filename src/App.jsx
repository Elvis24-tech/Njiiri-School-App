import './styles.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        id="about"
        title="About Us"
        content="Njiiri School is a center of academic excellence fostering creativity and discipline among its students.Our mission is to effectively impart holistic knowledge and skills, nurture talents, promote self-reliance and mould responsible citizens who will be competitive and productive in the society, through quality teaching, learning and guidance.Our vision is to be an icon of excellence in Kenya"
      />
      <Section
        id="academics"
        title="Academics"
        content="At Njiiri School, academic excellence is the cornerstone of our mission. We offer a broad and rigorous curriculum aligned with the Kenyan Competency-Based Curriculum (CBC) and 8-4-4 education systems, designed to meet the intellectual, practical, and moral development of every student.
Our academic programs span across sciences, arts, humanities, and technical subjects, all delivered by a team of highly qualified and experienced teachers. Through continuous assessment, modern teaching methods, and individualized support, we ensure each student is well-prepared for national examinations and future academic pursuits.
We also foster innovation and problem-solving through science fairs, debates, and academic clubs—empowering learners to excel both in and beyond the classroom.

"
        dark
      />
      <Section
        id="contact"
        title="Contact Us"
        content={
          <>
            <p>Email: njiirischool@gmail.com</p>
            <p>Phone: 	0789-105-077 / 0112924805</p>
            <p>P.O Box: 555-01000, Thika</p>
          </>
        }
      />
      <Footer />
    </>
  );
}

export default App;
