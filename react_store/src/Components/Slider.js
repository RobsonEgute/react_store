// import grocery from '../Media/grocery.jpg';
// import money from '../Media/money.jpg';
// import percent from '../Media/percent.jpg';
import React, {useState, useEffect} from 'react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
let interval;




export default function BasicSlider() {
    const slides = [
        {link: 'https://cdn.pixabay.com/photo/2014/02/01/17/50/money-256281_1280.jpg', title: 'money'},
        {link: 'https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg', title: 'grocery'},
        {link: 'https://cdn.pixabay.com/photo/2023/05/27/19/15/call-center-8022155_1280.jpg', title: 'support'},
        {link: 'https://cdn.pixabay.com/photo/2015/12/08/10/38/online-shopping-1082727_1280.jpg', title: 'christmas shopping'},
        {link: 'https://cdn.pixabay.com/photo/2016/10/10/22/37/credit-card-1730085_1280.jpg', title: 'card payment'},
        {link: 'https://cdn.pixabay.com/photo/2015/12/11/14/17/christmas-shopping-1088186_1280.jpg', title: 'christmas cart'},
        {link: 'https://cdn.pixabay.com/photo/2022/11/22/04/34/black-friday-7608705_1280.jpg', title: 'black friday'},
        {link: 'https://cdn.pixabay.com/photo/2021/01/20/16/33/valentine-day-5934910_1280.jpg', title: 'valentines sale'}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliderPaused, setIsSliderPaused] = useState(false)
    const styles = {
        slideStyles: { 
        backgroundImage: `url(${slides[currentIndex].link})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    },
        leftArrow: {
            fontSize: '60px',
            position: 'absolute',
            color: 'grey',
            top: '50%',
            transform: 'translate(0, -50%)',
            left: '5px',
        },
        rightArrow: {
            fontSize: '60px',
            position: 'absolute',
            color: 'grey',
            top: '50%',
            transform: 'translate(0, -50%)',
            right: '5px', 
        },
        dotCont: {
            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '15px',
            top: '90%',
            transform: 'translate(43%, -20%)'
        },
        onTarget: {
            width: '10px',
            height: '10px',
            backgroundColor: 'blue',
            borderRadius: '50%'
        },
        noTarget: {
            width: '10px',
            height: '10px',
        }
    }
    
    
    useEffect(() => {
        if(!isSliderPaused) {
        interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount

}}, [currentIndex, isSliderPaused, slides.length]);

    useEffect(() => {
        if(isSliderPaused) {
            const timeout = setTimeout(() => {
                setIsSliderPaused(false)
            }, 7000)
        return () => clearTimeout(timeout)
        }
    }, [isSliderPaused])

   useEffect(() => {
    console.log(currentIndex);
   }, [currentIndex])

   // handle next slider
   const handleNext = () => {
    clearInterval(interval);
    setCurrentIndex(currentIndex === slides.length - 1 ?  0 : (currentIndex + 1) % slides.length);
    console.log('clicked on next')
    setIsSliderPaused(true);
   }

   // handle slider previous 
   const handlePrev = () => {
    clearInterval(interval);
    setCurrentIndex(
        currentIndex !== 0 ? (currentIndex - 1) % slides.length : slides.length - 1
    );
    console.log(currentIndex)
    console.log('clicked on prev');
    setIsSliderPaused(true);
   }

   const handleSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    //clearInterval(interval);
   }

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div style={styles.slideStyles}></div>
        <div className='right_arrow_slider' onClick={handlePrev}><RiArrowLeftSLine  style={styles.leftArrow}/></div>
        <div className='left_arrow_slider' onClick={handleNext}><MdOutlineKeyboardArrowRight style={styles.rightArrow} /></div>
        <div style={styles.dotCont}>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => handleSlide(slideIndex)} style={{backgroundColor: 'silver', cursor: 'pointer', borderRadius: '50%', width: '10px', height: '10px', marginRight: '5px'}}>
                    {slideIndex === currentIndex ? (<div style={styles.onTarget}></div>) : (<div style={styles.noTarget}></div>)}
                </div>
            ))}
        </div>

    </div>
    );
}