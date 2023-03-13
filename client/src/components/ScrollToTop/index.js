import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          aria-label="Scroll to top button"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'gold',
            color: '#111111',
            borderRadius: '50%',
            border: 'none',
            outline: 'none',
            padding: '2rem',
            cursor: 'pointer',
            zIndex: '999',
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
