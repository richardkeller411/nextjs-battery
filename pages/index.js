import Head from "next/head";
import "../scss/color1.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Index = () => (
  <section className="page-section">
    <Head>
      <title>Hello World</title>
    </Head>
    <Navbar />
    <h1>Hello World from Next JS</h1>
    <div className="container mx-auto">
      <p>
        <span>YES NODEMON WORKING</span>
        <span>
          Voluptas obcaecati et adipisci quasi omnis dolores odio eos hic modi
          voluptatum ratione ullam sequi aspernatur ducimus exercitationem
          possimus, sint rem officiis esse recusandae, eveniet laborum repellat.
          Ipsum, culpa reprehenderit.
        </span>
        <span>
          Facilis deleniti dolore neque excepturi hic, tempora dolores repellat
          ipsum quis nihil! Dolor sapiente asperiores laborum aperiam
          necessitatibus obcaecati adipisci temporibus itaque optio saepe
          similique perspiciatis nulla ullam, voluptatibus praesentium?
        </span>
      </p>
    </div>
    <Footer />
  </section>
);

export default Index;
