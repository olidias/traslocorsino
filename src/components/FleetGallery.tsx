import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export function FleetGallery({ }) {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

  const properties = {
    duration: 0,
    transitionDuration: 200,
    autoplay: false,
    prevArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></button>

  }
  return (
    <div className="md:w-1/4 w-full h-full max-w-[350px] min-w-[250px]" >
      <Slide {...properties}>
        <slot />
      </Slide>
    </div>
  );
}
