import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export function FleetGallery(props) {
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
  };
  console.log(props.images);

  const properties = {
    duration: 0,
    transitionDuration: 200,
    autoplay: false,
    prevArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg></button>

  }
  return (
    <div className="md:w-2/5 w-full slide-container" >
      <Slide {...properties}>
        {props.images.map((image: string, index: number) => {
          return (<img src={image} alt={`fleet-gallery-image-${index}`} key={index} />)
        })}
      </Slide>
    </div>
  );
}
