import React from 'react'
import { Container } from 'react-bootstrap'
import advance from "../../../public/assit/aboerd/advance.png"
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
                            src={advance}
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
                            
                            .صفحة الحملات الإعلانية:
                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >
                                نقوم بعمل حملات إعلانية متنوعة تصل لمختلف فئات عملائك بشكل محدد ودقيق وتتسم بنتائجها بارتفاع معدلات وصولها 
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                والترويج لمنتجاتك/خدماتك على أوسع نطاق ممكن وفي وقت قياسي.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                تعتمد استراتيجياتنا الإعلانية على تحليل دقيق للسوق وفهم سلوك العملاء، مما يتيح لنا إنشاء حملات مخصصة تحقق أعلى مستويات النجاح.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>

                                
                               
                                 على تقديم رسائل إعلانية مبتكرة وجذابة، ونستخدم أحدث الأدوات والتقنيات لتحقيق أقصى استفادة من ميزانية الإعلان. 




                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
كما أن نتائج حملاتنا تتسم بارتفاع معدلات الوصول والتفاعل، وزيادة الوعي بالعلامة التجارية.

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