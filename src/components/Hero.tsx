"use client";
import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import Image from 'next/image';
import HeroPhone from '../../public/home/desktop/image-hero-phone.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('hero-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop - window.innerHeight <= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="bg-[#E7816B] pt-20 md:pt-[3.75rem] lg:py-[9.6rem] lg:pl-[5.94rem] lg:pr-[6.40rem] relative flex flex-col items-center lg:flex-row lg:items-center lg:justify-between h-[52.6875rem] md:h-[52.6875rem] lg:h-[40rem] overflow-hidden md:rounded-[0.9375rem]"
    >
      <div className="flex items-center justify-center text-center flex-col space-y-6 md:space-y-[1.19rem] lg:space-y-10 lg:items-start lg:text-left">
        <div className="space-y-[0.88rem] md:space-y-2 lg:space-y-[0.69rem] flex flex-col items-center lg:items-start justify-center text-white">
          <h1 className="text-[2rem] font-medium leading-10 w-[20.4375rem] md:w-[29.75rem] md:text-[3rem] md:leading-[3rem]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[0.9375rem] font-normal leading-[1.5625rem] md:w-[25.8125rem] w-[20.4375rem]">
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
        </div>
        <Button>Learn More</Button>
      </div>
      <Image
        src={HeroPhone}
        alt="Phone"
        className={`absolute bottom-[-368px] md:bottom-[-353px] max-w-[50rem] lg:right-[-68px] lg:bottom-[-190px] transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}
      />
    </section>
  );
}
