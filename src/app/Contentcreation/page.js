import React from 'react'
import { Container } from 'react-bootstrap'
import made_c from "../../../public/assit/aboerd/made-c.png"
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
                            src={made_c}
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
                            صناعة المحتوى
                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >

                                    لدينا متخصصون في صناعة وتنفيذ المحتوى التسويقي بمختلف أشكاله (المرئي ، المسموع ، المكتوب).

                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    إضافة إلى عمل استراتيجيات المحتوى التسويقية وخطط النشر وتنوع أشكال المحتوى التسويقي المناسب لمختلف فئات العملاء.
                                </p>

                            </div>
                            <div>
                                <p className='text-danger'>
                                    ما هي مزايا المحتوى المقدم بشركتنا؟
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    مناسب للنشاط التجاري/ الخدمي
                                    متنوع حيث يشمل مختلف أشكال المحتوى الملائمة لكل المنصات
                                    جذاب من حيث إبداع الرؤية الفنية وروعة التنفيذ
                                    واقعي أي يتناول أهم المشكلات التي يقوم منتجك/خدمتك بعلاجها

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