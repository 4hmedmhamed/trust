import React from 'react'
import { Container } from 'react-bootstrap'
import design_G from "../../../public/assit/aboerd/design_G.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Tree-shaking Example
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
function page() {
    return (
        <div className='mt-5 ' >

            <Container>
                <div className='row'>

                    <div className='col-md-6 mt-5 ' >
                        <Image
                            src={design_G}
                            alt="FirstBanner"

                            // Make the image display full width
                            style={{
                                width: '100%',
                                height: "50vh",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                    < div className='col-md-6'>
                        <h2 className='text-primary'>
                            صفحة تصميم الجرافيك:
                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >
                                    لدينا فريق عمل مميز يقوم بتنفيذ العديد من التصميمات الاحترافية التي تتسم بأفكارها الإبداعية وآليات تنفيذها المتجددة
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    التي تختلف حسب طبيعة العلامة التجارية والهوية البصرية المميزة لها.
                                    نعتمد في تصميماتنا على دراسة دقيقة لأهداف عملائنا
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    وفهم متطلبات السوق المستهدف، وذلك لنضمن تقديم حلول بصرية تعكس قيم العلامة التجارية وتساهم في تعزيز مكانتها.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    وتشمل خدماتنا تصميم  كلا من:
                                    <br></br>
                                    التصميمات الرقمية.
                                    <br></br>
                                    الشعارات.
                                    و
                                    الهويات البصرية الكاملة.
                                    <br></br>
                                    التصميمات المخصصة لحملات التسويق الرقمي.

                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                نحرص على استخدام أحدث الأدوات والتقنيات لضمان جودة التصميمات وسرعة تنفيذها بما يتماشى مع أحدث اتجاهات التصميم العالمية.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page