import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'; // Make sure to import CoreUI CSS

const ApplyNow = () => {
  const images = [
    { src: 'AZImages/1.JPG', alt: 'Slide 1' },
    { src: 'AZImages/2.JPG', alt: 'Slide 2' },
    { src: 'AZImages/3.JPG', alt: 'Slide 3' },
    { src: 'AZImages/4.JPG', alt: 'Slide 4' },
    { src: 'AZImages/5.JPG', alt: 'Slide 5' },
    { src: 'AZImages/6.JPG', alt: 'Slide 6' },
    { src: 'AZImages/7.JPG', alt: 'Slide 7' },
    { src: 'AZImages/8.JPG', alt: 'Slide 8' },
    { src: 'AZImages/9.JPG', alt: 'Slide 9' },
    { src: 'AZImages/10.JPG', alt: 'Slide 10' },
    { src: 'AZImages/11.JPG', alt: 'Slide 11' }
    // Add more images as needed
  ];

  return (
    <div id="apply" className="flex flex-row justify-between items-center min-h-screen px-12 py-8"
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
