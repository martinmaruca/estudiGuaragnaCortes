import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './ButtonWhatsapp.css';

const ButtonWhatsapp = () => {
  const [whatsappButton, setWhatsappButton] = useState(false);

  useEffect(() => {
    const buttonWhatsapp = document.getElementById('button-whatsapp');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setWhatsappButton(true);
        buttonWhatsapp.style.transform = 'scale(1)';
      } else if (window.scrollY < 500) {
        setWhatsappButton(false);
        buttonWhatsapp.style.transform = 'scale(0)';
      }
    });
  }, []);

  return (
    <>
    <div id='button-whatsapp'>
      {whatsappButton && (
        <a
        href="https://wa.me/5492317418366?text="
        target="_blank"
        rel="noreferrer"
    >
        <i>
          <FontAwesomeIcon icon={faWhatsapp}  />
        </i>
        </a>
      )}
    </div>
    </>
  );
};

export default ButtonWhatsapp;