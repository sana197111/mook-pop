import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import { Main } from './components/Main';
import { QrPage2 } from './components/QrPage2';
import { QrPage3 } from './components/QrPage3';
import { QrResult } from './components/QrResult';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Page4 } from './components/Page4';
import { Score } from './components/Score';
import { Result } from './components/Result';
import { Author } from './components/Author';
import { Keyword } from './components/Keyword';
import { Sentense } from './components/Sentense';
import { Consultant } from './components/Consultant';
import './styles.css';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <PageTransition
      preset="roomToLeft"
      transitionKey={location.pathname}
    >
      <Routes location={location}>
        <Route path="/" element={< Main />} />
        <Route path="/author" element={< Author />} />
        <Route path="/page1" element={< Page1 />} />
        <Route path="/page2" element={< Page2 />} />
        <Route path="/page3" element={< Page3 />} />
        <Route path="/page4" element={< Page4 />} />
        <Route path="/score" element={< Score />} />
        <Route path="/keyword" element={< Keyword />} />
        <Route path="/page2/:qrCode" element={< QrPage2 />} />
        <Route path="/page3/:qrCode" element={< QrPage3 />} />
        <Route path="/result/:qrCode" element={< QrResult />} />
        <Route path="/type/:typeNumber" element={< Result />} />
        <Route path="/sentense" element={< Sentense />} />
        <Route path="/consultant" element={< Consultant />} />
      </Routes>
    </PageTransition>
  );
}

export default App;
