
import React from 'react';

const Contribute = () => {
  const allocationProtocol = 'Our allocation protocol is based on a weighted system that takes into account the user\'s contribution history and the current needs of the project.';

  const handleContributeClick = () => {
    window.location.href = 'https://gitcion.com/grants/spectra';
  };

  return (
    <div>
        <div></div>
      <h1>Contribute to SPECTRA</h1>
      <p>Welcome to the SPECTRA contribution page! Here you can learn more about our project and contribute to our Gitcion Grants campaign.</p>
      <h2>About SPECTRA</h2>
      <p>SPECTRA is a cutting-edge trading platform that leverages the latest in machine learning and artificial intelligence to provide users with unparalleled insights and trading opportunities.</p>
      <h2>Allocation Protocol</h2>
      <p>{allocationProtocol}</p>
      <h2>Contribute Now</h2>
      <button onClick={handleContributeClick}>Contribute on Gitcion Grants</button>
    </div>
  );
};

export default Contribute;
