import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QrPage2 } from './components/QrPage2';
import { QrPage3 } from './components/QrPage3';
import { QrResult } from './components/QrResult';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Result } from './components/Result';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/page1" element={< Page1 />} />
              <Route path="/page2" element={< Page2 />} />
              <Route path="/page3" element={< Page3 />} />
              <Route path="/page2/:qrCode" element={< QrPage2 />} />
              <Route path="/page3/:qrCode" element={< QrPage3 />} />
              <Route path="/result/:qrCode" element={< QrResult />} />
              <Route path="/result" element={< Result />} />
          </Routes>
      </Router>
  );
}

export default App;
