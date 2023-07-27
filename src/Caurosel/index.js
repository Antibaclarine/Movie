import React from 'react';

const Carousels = ({ images }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>&lt;</button>
      <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${images[currentImage]}`} alt="Carousel Image" />
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
