import React from 'react'
import { Container } from 'react-bootstrap'
import corss from "../../../public/assit/aboerd/corss.png"
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
                            src={corss}
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
                        صفحة كورسات متخصصة:
                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >
                                لدينا قسم خاص بإنتاج الكورسات المتخصصة في مجال التسويق الإلكتروني خاصة في مجال كتابة المحتوى وإعداد الاسكريبتات.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>

                                نؤمن بأهمية التعليم المستمر وتطوير المهارات في مجال التسويق الرقمي، لذا نوفر مجموعة من الدورات التدريبية الشاملة التي تغطي جميع جوانب التسويق الإلكتروني من البداية حتى الاحتراف.

                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                وتُقدم برامجنا التدريبية بأساليب تعليمية تفاعلية تجمع بين النظرية والتطبيق العملي، مما يساعد المشاركين على اكتساب المعرفة وتطوير مهارات قابلة للتطبيق الفوري في سوق العمل.
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