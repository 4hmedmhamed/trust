"use client"
import React from 'react'

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Tree-shaking Example
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'
import Image from 'next/image'
import Face from "../../public/assit/media/facebook.png"
import inestgram from "../../public/assit/media/inestgram.jpg"
import youtube from "../../public/assit/media/youtube.png"
import twitter from "../../public/assit/media/twitter.png"
import snap from "../../public/assit/media/snap.jpeg"
import linkend from "../../public/assit/media/linkend.png"
import tiktok from "../../public/assit/media/tiktok.png"



import { Container } from 'react-bootstrap'
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2"  >
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} style={{backgroundColor:"#131743" , maxWidth:"80%"}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className=' w-100 '>
                    <h2 className=' fs-2 text-light ' >
                                TRUST
                                <span className='text-danger'>
                                    {" "}
                                    AD
                                </span>
                            </h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className=' text-canter w-100'>
                <div className='  text-center  mt-1  ' >
                            <div  className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/">الراسية</Link>
                            </div>
                            <div  className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/about">من نحن</Link>
                            </div>
                            <div className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/serves">خدمتنا</Link>
                            </div>
                            <div className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/">سابق تعملنا </Link>
                            </div>
                            <div className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/OurClients">عملائنا</Link>
                            </div>
                            <div className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/Blogs">المدونه</Link>
                            </div>
                            <div className='item-slider-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/connect">تواصل معانا</Link>
                            </div>
                        </div>
                            <div className='d-flex justify-content-center '>

                                    <Link href="/" className='text-light button-up-side text-center  '>اطلب عروضنا </Link>
                                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
function Navbar() {


    return (
        <div className='banner'>

            <Container>
                <div className='row  pt-3'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-md-4 d-flex'>

                                <div className='d-flex'>
                                    <p className='icon-banner-up d-flex'>
                                        <FontAwesomeIcon icon={faPhoneFlip} />
                                    </p>
                                    <Link href={"tel:0109522777"}>
                                        <span className='ms-2 text-nav-bar  d-flex'>010952525777
                                        </span>

                                    </Link>

                                </div>
                                <div className='d-flex'>
                                    <p className='icon-banner-up d-flex'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </p>
                                    <Link href={"mailto:info.trustad@gmail.com"}>
                                        <span className=' text-nav-bar'>info.trustad@gmail.com</span>
                                    </Link>
                                </div>

                            </div>
                            <div className='col-md-4   '>

                                <div class="d-flex bd-highlight">
                                    <div class="p-2 flex-fill bd-highlight">
                                        <div className='d-flex justify-content-center'>

                                            <div className=' item-socail '>
                                                <Link href="https://www.facebook.com/TrustAdAgency">
                                                    <Image
                                                        src={Face}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}

                                                    />
                                                </Link>

                                            </div>
                                            <div className=' item-socail '>
                                                <Link href="https://www.instagram.com/trust_adagency/">
                                                    <Image
                                                        src={inestgram}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}
                                                    />
                                                </Link>

                                            </div>
                                            <div className=' item-socail '>
                                                <Link href="https://www.youtube.com/channel/UCEiCzFuBhQPLaB860nOLM7A">
                                                    <Image
                                                        src={youtube}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}
                                                    />
                                                </Link>

                                            </div>
                                            <div className=' item-socail '>
                                                <Link href="https://twitter.com/trustad_company">
                                                    <Image
                                                        src={twitter}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}
                                                    />
                                                </Link>

                                            </div>
                                            <div className=' item-socail '>
                                                <Link href="https://www.linkedin.com/company/trust-ad-agency">
                                                    <Image
                                                        src={linkend}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}
                                                    />
                                                </Link>

                                            </div>
                                            <div className=' item-socail '>
                                                <Link href="https://www.tiktok.com/@trustadagency">
                                                    <Image
                                                        src={tiktok}
                                                        alt="Picture of the author"
                                                        width={25}
                                                        height={25}
                                                        style={{ borderRadius: "10px" }}
                                                    />
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-2 flex-fill bd-highlight d-block d-sm-block d-lg-none">    <div className='d-flex justify-content-end'>   {['end'].map((placement, idx) => (
                                        <OffCanvasExample key={idx} placement={placement} name={<FontAwesomeIcon icon={faList} />} />
                                    ))}</div></div>
                                </div>





                            </div>
                            <div className='col-md-4 text-center  ' >
                                <div className='d-flex justify-content-center d-none d-lg-block'>

                                    <Link href="/" className='text-light button-up-banner text-center  '>اطلب عروضنا </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row d-none d-lg-block  ' >
                    <div className='nav-bar  row'>
                        <div className='col-md-6'>
                            <h2 className=' fs-2 text-light' style={{fontWeight:"1000"}}>
                                TRUST
                                <span className='text-danger'>
                                    {" "}
                                    AD
                                </span>
                            </h2>
                        </div>
                        <div className='col-md-6 d-flex mt-1'>

                            
                            <div >
                                <Link className='title-nav-bar mx-2' href="/">الراسية</Link>
                            </div>
                            <div className='d-block'>
                                <Link className='title-nav-bar mx-2' href="/about">من نحن</Link>
                            </div>
                            <div>
                                <Link className='title-nav-bar mx-2' href="/serves">خدمتنا</Link>
                            </div>
                            <div>
                                <Link className='title-nav-bar mx-2' href="/">سابق تعملنا </Link>
                            </div>
                            <div>
                                <Link className='title-nav-bar mx-2' href="/OurClients">عملائنا</Link>
                            </div>
                            <div>
                                <Link className='title-nav-bar mx-2' href="/Blogs">المدونه</Link>
                            </div>
                            <div>
                                <Link className='title-nav-bar mx-2' href="/connect">تواصل معانا</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        </div>
    )
}

export default Navbar