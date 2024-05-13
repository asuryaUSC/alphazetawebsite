import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'; // Make sure to import CoreUI CSS

const ApplyNow = () => {
  const images = [
    { src: '/azimages/1.jpg', alt: 'Slide 1' },
    { src: '/azimages/2.jpg', alt: 'Slide 2' },
    { src: '/azimages/3.jpg', alt: 'Slide 3' },
    { src: '/azimages/4.jpg', alt: 'Slide 4' },
    { src: '/azimages/5.jpg', alt: 'Slide 5' },
    { src: '/azimages/6.jpg', alt: 'Slide 6' },
    { src: '/azimages/7.jpg', alt: 'Slide 7' },
    { src: '/azimages/8.jpg', alt: 'Slide 8' },
    { src: '/azimages/9.jpg', alt: 'Slide 9' },
    { src: '/azimages/10.jpg', alt: 'Slide 10' },
    { src: '/azimages/11.jpg', alt: 'Slide 11' }
    // Add more images as needed
  ];

  return (
    <div id="apply" className="flex flex-row justify-between items-center min-h-screen px-12 py-8 pb-0"
         style={{ background: 'linear-gradient(90deg, #fff7ad, #ffa9f9)' }}>
      <div className="w-1/2">
        <CCarousel controls indicators>
          {images.map((image, index) => (
            <CCarouselItem key={index}>
              <CImage className="d-block w-100" src={image.src} alt={image.alt} style={{ height: '500px', objectFit: 'cover' }}/>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold uppercase mb-4">Apply Now</h2>
        <button className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-lg"
                onClick={() => window.location.href = '#apply-form'}>
          JOIN US
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ApplyNow;
