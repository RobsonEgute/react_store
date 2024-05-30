import React from 'react';

const HorizontalCat = () => {

    const images = [
        {imageUrl:'https://cdn.pixabay.com/photo/2015/04/04/18/40/half-price-706811_1280.jpg', title: 'clerance sales', num: 1, alt: "pic_1"},
        {imageUrl:'https://cdn.pixabay.com/photo/2015/04/04/18/51/offer-706850_1280.jpg', title: 'clerance sales', num: 2, alt: "pic_2"},
        {imageUrl:'https://cdn.pixabay.com/photo/2015/04/04/18/43/sale-706824_1280.jpg', title: 'clerance sales', num: 3, alt: "pic_3"},
        {imageUrl:'https://cdn.pixabay.com/photo/2019/12/12/08/13/sale-4690050_1280.png', title: 'clerance sales', num: 4, alt: "pic_4"}
    ]


    return (
        <>
                {
                    images.map( itm => {
                        return(
                        <div className={`cat_horz_${itm.num} cat_img_cont`} style={{ backgroundImage: `url(${itm.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} > </div>)
                    })
                }
        </>
    )
}

export default HorizontalCat;