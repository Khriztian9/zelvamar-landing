import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';

export default function MainApp() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <App />;
}
