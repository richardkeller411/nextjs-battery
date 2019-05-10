import Head from "next/head";
import "../scss/color1.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";


const About = () => (
  <div className="page-section">
    <Header />
    <div className="container">
      <h1>About Next JS</h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et eos
          sit vero ab laborum nulla culpa, quis neque ex, voluptatum, eveniet amet
          autem obcaecati animi ratione quo officiis at!
        </span>
        <span>TEST2</span>
        <span>
          Facilis deleniti dolore neque excepturi hic, tempora dolores repellat
          ipsum quis nihil! Dolor sapiente asperiores laborum aperiam
          necessitatibus obcaecati adipisci temporibus itaque optio saepe
          similique perspiciatis nulla ullam, voluptatibus praesentium?
        </span>
      </p>
    </div>
    <Footer />
  </div>
);

export default About;
