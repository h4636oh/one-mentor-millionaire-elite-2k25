import React from 'react';
import '../styles/Sponsors.css';

// Import all sponsor logos
import fokusLogo from '../assets/sponsors/fokus.png';
import palmonasLogo from '../assets/sponsors/palmonas.png';
import campaLogo from '../assets/sponsors/campa.png';
import oneMentorLogo from '../assets/sponsors/one-mentor.png';
import zeptoLogo from '../assets/sponsors/zepto.png';
import superyouLogo from '../assets/sponsors/superyou.png';
import sbiLogo from '../assets/sponsors/sbi.png';
import bookMyShowLogo from '../assets/sponsors/bookmyshow.png';
import redBullLogo from '../assets/sponsors/redbull.png';
import emcureLogo from '../assets/sponsors/emcure.png';
import krutrimLogo from '../assets/sponsors/krutrim.png';
import physicsWallahLogo from '../assets/sponsors/physicswallah.png';
import idfcLogo from '../assets/sponsors/idfc.png';
import boatLogo from '../assets/sponsors/boat.png';
import credLogo from '../assets/sponsors/cred.png';
import olaLogo from '../assets/sponsors/ola.png';
import shaadiLogo from '../assets/sponsors/shaadi.png';
import toiLogo from '../assets/sponsors/toi.png';
import lokmatLogo from '../assets/sponsors/lokmat.png';
import todayLogo from '../assets/sponsors/today.png';
import businessTodayLogo from '../assets/sponsors/business-today.png';
import businessStandardLogo from '../assets/sponsors/business-standard.png';
import hitavadaLogo from '../assets/sponsors/hitavada.png';
import Navbar from './Navbar';
import GalaTicketWidget from './GalaTicketWidget';
import Footer from './Footer';
const sponsorCategories = [
  {
    title: "Title Sponsor",
    logos: [{ src: fokusLogo, alt: "Fokus" }]
  },
  {
    title: "Presented By",
    logos: [
      { src: oneMentorLogo, alt: "One Mentor" },
      { src: campaLogo, alt: "Campa" },
      { src: palmonasLogo, alt: "Palmonas" }
    ]
  },
  {
    title: "Co-Presented By",
    logos: [
      { src: zeptoLogo, alt: "Zepto" },
      { src: superyouLogo, alt: "Superion" },
      { src: sbiLogo, alt: "SBI" }
    ]
  },
  {
    title: "Ticketing Partner",
    logos: [
      { src: oneMentorLogo, alt: "One Mentor" },
      { src: bookMyShowLogo, alt: "BookMyShow" }
    ]
  },
  {
    title: "Drink Partner",
    logos: [
      { src: redBullLogo, alt: "Red Bull" },
      { src: campaLogo, alt: "Campa" }
    ]
  },
  {
    title: "Co-Elite Presented By",
    logos: [
      { src: emcureLogo, alt: "Emcure" },
      { src: krutrimLogo, alt: "Krutrim" },
      { src: physicsWallahLogo, alt: "Physics Wallah" },
      { src: idfcLogo, alt: "IDFC First Bank" },
      { src: boatLogo, alt: "Boat" },
      { src: credLogo, alt: "CRED" },
      { src: olaLogo, alt: "OLA" },
      { src: shaadiLogo, alt: "Shaadi" }
    ]
  },
  {
    title: "Media Partner",
    logos: [
      { src: toiLogo, alt: "Times of India" },
      { src: lokmatLogo, alt: "Lokmat" },
      { src: todayLogo, alt: "Today" },
      { src: businessTodayLogo, alt: "Business Today" },
      { src: businessStandardLogo, alt: "Business Standard" },
      { src: hitavadaLogo, alt: "The Hitavada" }
    ]
  }
];

const Sponsors = () => {
  return (
    <section className="sponsors-section">
        <Navbar />
      <div className="sponsors-container">
        <h1 className="sponsors-title">Our Esteemed Sponsors</h1>
        <p className="sponsors-message">
          We extend our heartfelt gratitude to our incredible sponsors for making this event 
          possible! Your support fuels our vision and brings this experience to life.
        </p>
        
        <div className="sponsors-categories">
          {sponsorCategories.map((category, index) => (
            <div key={index} className="sponsor-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="sponsor-logos">
                {category.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="sponsor-logo">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <GalaTicketWidget />
      <Footer />
    </section>
  );
};

export default Sponsors;
