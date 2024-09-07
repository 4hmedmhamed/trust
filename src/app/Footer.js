import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Face from "../../public/assit/media/facebook.png"
import inestgram from "../../public/assit/media/inestgram.jpg"
import youtube from "../../public/assit/media/youtube.png"
import twitter from "../../public/assit/media/twitter.png"
import snap from "../../public/assit/media/snap.jpeg"
import linkend from "../../public/assit/media/linkend.png"
import tiktok from "../../public/assit/media/tiktok.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Tree-shaking Example
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className=' fs-2 text-light ' >
                            TRUST
                            <span className='text-danger'>
                                {" "}
                                AD
                            </span>
                        </h2>
                        <p className='fs-5'>
                            شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والميديا برودكشن وإنتاج الكورسات الإعلامية. تتسم خدماتنا بملائمتها لكافة احتياجات العملاء حيث نقدمها بجودة عالية وبأسعار تنافسية. م الهويات التجارية بالاضافة إلى حلول الويب والبرمجة وخدمات استضافة المواقع.
                        </p>
                    </div>
                    <div className='col-md-2'>
                        <div className='   mt-1  text-center ' >
                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/">الرئيسية</Link>
                            </div>
                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/about">من نحن</Link>
                            </div>
                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/serves">خدمتنا</Link>
                            </div>

                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/OurClients">عملائنا</Link>
                            </div>
                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/Blogs">المدونه</Link>
                            </div>
                            <div className='title-footer-bar'>
                                <Link className='title-nav-bar mx-2 ' href="/connect">تواصل معانا</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex'>
                    <div class="m-2">
                            <div className=' justify-content-center'>

                                <div className=' m-2 '>
                                    <Link href="https://www.facebook.com/TrustAdAgency">
                                        <Image
                                            src={Face}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}

                                        />
                                    </Link>

                                </div>
                                <div className=' m-2 '>
                                    <Link href="https://www.instagram.com/trust_adagency/">
                                        <Image
                                            src={inestgram}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Link>

                                </div>
                                <div className=' m-2 '>
                                    <Link href="https://www.youtube.com/channel/UCEiCzFuBhQPLaB860nOLM7A">
                                        <Image
                                            src={youtube}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Link>

                                </div>
                             
                            </div>
                        </div>
                        <div class="m-2">
                            <div className=' justify-content-center'>

                                <div className=' m-2 '>
                                    <Link href="https://twitter.com/trustad_company">
                                        <Image
                                            src={twitter}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Link>

                                </div>
                                <div className=' m-2 '>
                                    <Link href="https://www.linkedin.com/company/trust-ad-agency">
                                        <Image
                                            src={linkend}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Link>

                                </div>
                                <div className=' m-2 '>
                                    <Link href="https://www.tiktok.com/@trustadagency">
                                        <Image
                                            src={tiktok}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className='m-4 '>
                            <div className='d-flex'>
                                <p className='footer-bar d-flex fs-3 m-2'>
                                    <FontAwesomeIcon icon={faPhoneFlip} />
                                </p>
                                <Link href={"tel:0109522777"}>
                                    <span className='ms-3 text-nav-bar  d-flex fs-3'>010952525777
                                    </span>

                                </Link>

                            </div>
                            <div className='d-flex'>
                                <p className='footer-bar d-flex  fs-3 m-2'>
                                    <FontAwesomeIcon icon={faPhoneFlip} />
                                </p>
                                <Link href={"tel:01067373840"}>
                                    <span className='ms-3 text-nav-bar  d-flex fs-3'>01067373840
                                    </span>

                                </Link>

                            </div>
                            <div className='d-flex'>
                                <p className='footer-bar d-flex fs-3 m-2'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </p>
                                <Link href={"mailto:info.trustad@gmail.com"}>
                                    <span className=' text-nav-bar fs-3'>info.trustad@gmail.com</span>
                                </Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer