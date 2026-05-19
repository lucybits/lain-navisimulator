import './NaviShowcase.css';
import { useState, useEffect } from 'react';
import NaviLogon from './NaviLogon';

export default function NaviShowcase() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showHeader) {
    return <NaviLogon />;
  }

  return (
    <div className="navi-showcase">
      <header className="showcase-header">
        <div className="header-mask">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0QiwAQUGDE2NZ8V2twnnJdcth_nsrkC95Q&s"
            alt="showcase background"
          />
        </div>

        <div className="sticker-wrapper">
          <img
            className="sticker"
            src="https://i.pinimg.com/736x/9d/a4/1e/9da41eb57d10bfd95028fc69ed1ca4d0.jpg"
            alt="sticker"
          />
        </div>
      </header>
    </div>
  );
}
