import React from 'react';
import GlobalHeader from './layouts/GlobalHeader/GlobalHeader';
import Disclaimer from './layouts/Disclaimer/Disclaimer';
import { constants } from './utils/constants';


function App() {
  return (
    <>
      <GlobalHeader />
      <Disclaimer message={constants.DISCLAIMER_MESSAGE} />
    </>
  );
}

export default App;
