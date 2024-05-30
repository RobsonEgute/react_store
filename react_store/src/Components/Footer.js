import React from "react";
 
const Logo = () => {

    return (
        <>
            <p style={{ textAlign: 'center'}}><h1>LOGO</h1></p>
        </>
    )
};

const SubToNewsLetter = () => {

    return (
        <> 
        <p style={{margin: '0px 0px 0px 6px'}}><h3>New to store?</h3></p>
        <p style={{margin: '-5px 0px 0px 6px'}}><h5>Subscribe to our newsletter and get the lattest updates</h5></p>
        <form style={{margin: '-5px 0px 0px 0px'}}>
            <input type="text" style={{border: '2px solid grey', borderRadius: '10px 20px 10px 20px', width: '60%', height: '5vh', marginLeft: '6px'}} placeholder="Enter E-mail address"/>
            <button style={{border: '2px solid grey', borderRadius: '10px 20px 10px 20px', width: '16%', height: '6vh', marginLeft: '5px'}}> Male </button>
            <button style={{border: '2px solid grey', borderRadius: '10px 20px 10px 20px', width: '16%', height: '6vh', marginLeft: '5px'}}> Female </button>
            <p>
            <input type="checkbox" value={'accepted'} name="accept_privacy_policy" style={{ width: '50px', height: '15px', marginTop: '10px' }}/> <span style={{ margin: '0px 0px 0px 0px' }}> I agree to #store privacy and cookie policy</span>
            </p>
        </form>

        </>
    )
}

const DownloadApp = () => {

    return (
        <>
            <h2 style={{ textAlign: 'center' }}> Download The Free App</h2>
            <h4 style={{ textAlign: 'center' }}>Get access to exclusive deals </h4>
            <div>
            <img src="https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_1280.png" alt="google play store" width='30%' height="150px" style={{ margin: '5px 0px 0px 70px'}} />
            <img src="https://cdn.pixabay.com/photo/2016/03/31/17/46/apple-1293886_1280.png" width="30%" height="150px" alt="apple app store" style={{ margin: '5px 0px 0px 70px'}} />
            </div>
        </>
    )
}

const Footer = () => {


    return (
        <div className="footerCon">
            <div style={{border: '3px solid black', width: '100%', height: '60vh'}}><Logo /></div>
            <div style={{border: '3px solid black', width: '100%', height: '60vh'}}><SubToNewsLetter /></div>
            <div style={{border: '3px solid black', width: '100%', height: '60vh'}}><DownloadApp /></div>
        </div>
    )
}

export default Footer;