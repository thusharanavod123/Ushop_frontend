import React from 'react';
const $ = require('jquery');

if (typeof window !== 'undefined') {
  (window as any).$ = (window as any).jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from 'next/dynamic';
import CategoryBtn from '@/components/ui/CategoryBtn';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
const options = {
  autoplayHoverPause: !0,
      loop: !1,
      autoplay: !0,
      autoplayTimeout: 6e3,
      autoWidth:true,
      nav: !1,
      dots: !1,
      responsive: {
        0: {items: 2.2},
        375: {items: 2.5},
        575: {items: 3},
        768: {items: 3},
        991: {items: 4},
        1199: {items: 5}
    
  },
  margin:10
  // autoplay: true,
};
const Carousell = ({items}:{items:any[]}) => {
  return (
    <OwlCarousel className="owl-theme" {...options}>

          {
            items.map((item, index) => (
              <div className="item">
                <CategoryBtn label={item.label} status={item.status} />
              </div>
            ))
          }
        </OwlCarousel>
  );
};

export default Carousell;
