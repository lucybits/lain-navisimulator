// components/NaviLogon.jsx
import './NaviLogon.css';
import { useRef, useState, useEffect } from 'react';

export default function NaviLogon() {
  const inputRef = useRef(null);
  const caretRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const input = inputRef.current;
    const caret = caretRef.current;

    if (!input || !caret) return;

    // Creamos un span invisible para calcular el ancho del texto
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'pre';
    span.style.font = window.getComputedStyle(input).font;
    span.textContent = input.value;
    document.body.appendChild(span);

    const textWidth = span.offsetWidth;
    document.body.removeChild(span);

    // Posicionamos el caret
    caret.style.left = `${input.offsetLeft + textWidth + 6}px`;
  }, [inputValue]);

  return (
    <div className="navi-logon">
      <img className="logon-details" src="/fondo2.png" alt="Fondo Navi" />
      <div className="logon-circle-middle">
        <span className="japanese-text">だれ?</span>
        <div className="input-wrapper">
          <input
            type="text"
            className="input-logon"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="fake-caret" ref={caretRef}></div>
        </div>
      </div>
      <div className="logon-circle">
        <img src="/circle1.png" alt="Circle" />
      </div>
    </div>
  );
}
