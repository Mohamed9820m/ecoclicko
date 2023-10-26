import React, { useEffect, useState } from 'react';
import * as images from '../assets/index'
function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Use a setTimeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '9999',
        }}
      >
        <div>
          <img src={images.Logo} alt="Logo" width="150" height="100" />
        </div>
      </div>
    )
  );
}

export default Loader;
