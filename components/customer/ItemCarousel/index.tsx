import React from 'react';
const $ = require('jquery');

if (typeof window !== 'undefined') {
  (window as any).$ = (window as any).jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from 'next/dynamic';
import Image from 'next/image';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};

const ItemCarousel = ({ items }: { items: any[] }) => {
  return (
    <OwlCarousel className="owl-theme" {...options}>
      {
        items.map((item, index) => (
          <div className="item">
            <img className="rounded-t-lg w-full" src={item} alt="" />
          </div>
        ))
      }
    </OwlCarousel>
  );
};

export default ItemCarousel;
