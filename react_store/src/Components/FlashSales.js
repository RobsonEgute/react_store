import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const FlashSalesPdts = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const products = [
        {
            url:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww", 
            alt:"grey shirt",
            name: 'Kids grey shirt',
            description: 'mens grey outdoor shirt for young adults.',
            price: '£7.99'
        },
        {
            url:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fHww", 
            alt:"White t shirt",
            name: 'Designer t-shirt',
            description: 'Unisex white outdoor and indoor t-shirt with blue design',
            price: '£7.99'
        },
        {
            url:"https://images.unsplash.com/photo-1666238854836-815ff6c43b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlJTIwcHJvZHVjdCUyMHBob25lfGVufDB8fDB8fHww", 
            alt:"Google pixel phone",
            name: 'Google pixel 7 pro',
            description: 'pixel 7pro smartphone with all of google smart and essential features.',
            price: '£659.99'
        },
        {
            url:"https://images.unsplash.com/photo-1653007939376-7ab3d9e95f8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdvb2dsZSUyMHByb2R1Y3QlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", 
            alt:"Apple smart watch",
            name: 'Apple smart watch',
            description: 'Water resistant apple smart watch with leather handles',
            price: '£259.99'
        },
        {
            url:"https://images.unsplash.com/photo-1653007623275-b63a157acf84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdvb2dsZSUyMHByb2R1Y3QlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", 
            alt:"Logitech black mouse",
            name: 'Logitech',
            description: 'Black logitech mouse with multiple buttons for your comfort.',
            price: '£44.99'
        },
        {
            url:"https://plus.unsplash.com/premium_photo-1711661769187-6dcab3db1b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdvb2dsZSUyMHByb2R1Y3QlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", 
            alt:"White Virtual reality headset",
            name: 'MEta VR Headset',
            description: 'WHite and comfortable VR headset for gaming, watching movies, and more.',
            price: '£249.99'
        }
      ]

    return (
        <> 
        <div><h1>Flash Sales</h1></div>
            <Carousel 
            responsive={responsive}
            >
                {products.map( pdt => {
                    return (
                        <div className='card'>
                    <img className='product--image' width={'100%'} height={'60%'} src={pdt.url} alt={pdt.alt}
                        style={{objectFit: 'cover', position: 'center'}}
                    />
                    <h1 style={{textAlign: 'center', marginTop: '-5px'}}>{pdt.name}</h1>
                    <h3 style={{textAlign: 'center', marginTop: '-15px'}}>{pdt.price}</h3>
                    <p style={{textAlign: 'center', marginTop: '-15px'}}>{`${pdt.description.substring(0, 38)}...`}</p>
                    <p><button className='pdt_button' style={{ width: '100%', height: '50px', marginTop: '-7px', padding: '10px 0px 1px 0px', cursor: 'pointer', backgroundColor: 'red'}}>Add to Cart</button></p>
                </div>
                    )
                })}
            </Carousel>
        </>
    )
}

export default FlashSalesPdts;