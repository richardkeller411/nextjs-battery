import Head from "next/head";
import "../scss/color1.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";



const Index = () => (
  <div className="page-section">
    <Head>
      <title>Hello World</title>
    </Head>
    <Header />
    <div className="slide-1 home-slider">
      <div className="home home-png1 text-center">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="slider-contain">
                          <div>
                              <h4>welcome to 1800-Batter</h4>
                              <h1>YES NODEMON WORKING</h1>
                              <Link href="/" ><a className="btn btn-solid">shop now</a></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div className="container">
        <h2>YES NODEMON WORKING</h2>
      <p>
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
  </div>
);

export default Index;
