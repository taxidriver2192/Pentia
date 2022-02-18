/* 
Add css help of Head  Component on Specific web page 
*/
import 'animate.css';

// import head component
import Head from "next/head";
import Image from "next/image";
//  import css
import zeppeliner from "../images/zeppeliner.png"
import ilustration1 from "../images/illustration1.png"
import ilustration2 from "../images/illustration2.png"
import Link from "next/link";
import { Navbar } from '../components/Navbar';
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
    
      <Navbar></Navbar>
      
      <section className="container dark">
      <div className="content">
        <div className="ipsum">
          <p>Lorem Ipsum</p>
        </div>
        <div className='zeppeliner animate__animated  animate__fadeInRight'>
          <Image src={zeppeliner} height={240} width={420} />
        </div>
          <div className="textZep">
            <h1>Digital transformation</h1>
            <h2>Rådgivning. Implementering. Resultater</h2>
            <p>Hvordan bliver din virksomhed en digital vinder i fremtiden?</p>
            <p>Hvilke tiltag skal der til strategisk og taktisk for at dreje forretningen i den<br/> rigtige retning? Hvilke elementer indeholder en succesfuld digital<br/> transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen fra<br/> strategisk rådgivning til implementering.</p>
          </div>
        </div>
        <div className="actionButton">
          <Link href="/#sectionContakt" scroll={false}>
            <a>Start din rejse her</a>
          </Link>
          </div>
      </section>
      <section className="container light">
        <div className="content contentWho">
          <h3>Vi kan hjælpe dig med<br/> digital transformation på to fronter</h3>
          <div className="row">
            <div className="card left">
              <div className="cardImages">
                <Image src={ilustration1} height={223} width={131} />
              </div>
              <h4>Strategisk rådgivning om<br/> digital transformation</h4>
              <p>Udnytter din virksomhed <br/> sit digitale potentiale?<br/> Hvilke forretningsmuligheder<br/> er der, og hvad betyder det<br/> på et strategisk plan?</p>
            </div>
            <div className="card right">
              <div className="cardImages">
                <Image src={ilustration2} height={196} width={173} />
              </div>
              <h4>Eksekvering af <br/>digital transformation</h4>
              <p>I ved, hvad I vil, men I har brug for<br/> hjælp til at rulle strategien ud i <br/>forhold til organisationen og det<br/> digitale fundament bl.a. på Sitecore. <br/>Det handler om mennesker og <br/>resultater.</p>
            </div>
          </div>
        </div>
      </section>
      <section id='sectionContakt' className="container red">
        <div className="content contact">
          <h3>Få 10 gode råd om<br/> digital transformation</h3>
          <p>Ja tak, jeg vil gerne høre mere om digital transformation</p>
          <form className="contakt" id="contact" action="" method="post">
            <fieldset>
              <input placeholder="Navn" type="text" title="Navn" tabIndex="1" required autoFocus></input>
            </fieldset>
            <div className="row">
              <fieldset>
                <input placeholder="Mobil" title="Mobil" type="tel" tabIndex="2" required></input>
              </fieldset>
              <fieldset>
                <input type="text" pattern="[0-9]{4}" placeholder="Postnr." title="Postnr." tabIndex="3" required></input>
              </fieldset>
            </div>
            <div className="row">
              <fieldset>
                <input placeholder="Email" title="Email" type="email" tabIndex="4" required></input>
              </fieldset>
              <fieldset>
                <input placeholder="By" title="By" type="text" tabIndex="5" required ></input>
              </fieldset>
            </div>
              <button name="submit" type="submit" id="submit" data-submit="...Sending">Submit</button>
          </form>
        </div>
        <Footer/>
      </section>
    </>
  );
}
