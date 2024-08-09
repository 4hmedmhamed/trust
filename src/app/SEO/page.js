import React from 'react'
import { Container } from 'react-bootstrap'
import SEO2 from "../../../public/assit/aboerd/SEO.png"
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
                            src={SEO2}
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
                            متميزين في السيو
                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >
                                    نوفر لك فرصة ظهور نشاطك التجاري بمحركات البحث الأولى مما يسهل على عملائك إمكانية الوصول إليك.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    نقدم حلولاً متكاملة لزيادة ظهور موقعك الإلكتروني في نتائج البحث، مما يساهم في جذب المزيد من الزوار المحتملين وتحويلهم إلى عملاء فعليين.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    نستخدم أفضل الممارسات وأحدث الأدوات في مجال السيو لضمان تقديم نتائج مستدامة وطويلة الأمد، مما يعزز من مكانة موقعك الإلكتروني ويحقق نموًا مستمرًا لأعمالك التجارية.
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