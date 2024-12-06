// import carosel1 from '/public/carosel1.jpeg';
import { useRef } from 'react';
import carosel2 from '/public/carosel2.jpg';
import carosel3 from '/public/carousel3.jpeg';
import carosel4 from '/public/carousel4.jpeg';
import carosel5 from '/public/coursel6.webp';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import classes from './Demo.module.css';

const CustomCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      classNames={classes}
      slideSize="70%"
      height={'60vh'}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideGap="md"
      loop
      withIndicators
    >
      {[carosel2, carosel3, carosel4, carosel5].map((it) => (
        <Carousel.Slide key={it}>
          <Image radius="md" src={it} height={'100%'} fit="cover" />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
