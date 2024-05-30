import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const TopSellingPdts = () => {

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
            url:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D", 
            alt:"apple green nike trainers shoes",
            name: 'Trainer running shoes',
            description: 'Nike unisex super comfortable trainers...',
            price: '£59.99'
        },
        {
            url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D", 
            alt:"red nike trainers shoes",
            name: 'Trainer running shoes',
            description: 'Nike unisex super comfortable trainers...',
            price: '£59.99'
        },
        {
            url:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww", 
            alt:"orange nike trainers shoes",
            name: 'Trainer running shoes',
            description: 'Nike unisex super comfortable trainers...',
            price: '£59.99'
        },
        {
            url:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww", 
            alt:"black nike sports shoes",
            name: 'Trainer running shoes',
            description: 'Nike unisex super comfortable trainers...',
            price: '£59.99'
        },
        {
            url:"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww", 
            alt:"Casual summer shoes",
            name: 'Fehiminia',
            description: 'Casual sumer shoes for outdoor',
            price: '£34.99'
        },
        {
            url:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNob2VzfGVufDB8fDB8fHww", 
            alt:"white Addidas shoes",
            name: 'Addidas trainers',
            description: 'white sports and outdoor addidas trainers...',
            price: '£49.99'
        }
      ]

    return (
        <> 
        <h1>Top Selling products</h1>
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

export default TopSellingPdts;