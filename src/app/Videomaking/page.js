import React from 'react'
import { Container } from 'react-bootstrap'
import video from "../../../public/assit/aboerd/add.png"
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
                            src={video}
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
                            إنتاج وصناعة الفيديو

                        </h2>
                        <br></br>
                        <div className='text-muted fs-3 '>



                            <div className='d-flex'>
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p >
                                    نقوم بتصوير وإنتاج العديد من الفيديوهات البرامجية والإعلانية والتشويقية والتي تضم ( البرامج الإعلانية ، البروموهات ، الفيديوهات المعلوماتية ، الأفلام الترويجية، فيديوهات سيمبل موشن جرافيك).
                                </p>
                            </div>
                            <div className='d-flex'>

                                <p className='text-center text-primary fs-3'>

                                    تصوير وإنتاج العديد من الفيديوهات البرامجية والإعلانية والتشويقية التي تشمل الآتي:

                                </p>
                            </div>

                            {/*  */}
                            <div className='d-flex' >

                                <p className='text-danger'>
                                    البرامج الإعلانية:
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - إنتاج فيديوهات إعلانية متكاملة تستهدف الترويج للمنتجات أو الخدمات.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    إعداد السيناريو وتصوير وإخراج الفيديو بطريقة احترافية.-
                                </p>
                            </div>

                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - إنتاج فيديوهات إعلانية متكاملة تستهدف الترويج للمنتجات أو الخدمات.

                                </p>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className='d-flex' >

                                <p className='text-danger'>
                                    البروموهات:
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - إنتاج مقاطع تشويقية تروج لبرامج أو أحداث أو منتجات جديدة
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>

                                    - التركيز على إبراز النقاط الجاذبة والرئيسية للمنتج أو الحدث
                                </p>
                            </div>

                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - استخدام تقنيات التحرير المتقدمة لتقديم محتوى مشوق وجاذب
                                </p>
                            </div>
                            {/*  */}

                            {/*  */}
                            <div className='d-flex' >

                                <p className='text-danger'>
                                    الفيديوهات المعلوماتية:
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - إنتاج فيديوهات تثقيفية وتعليمية تشرح مواضيع معقدة بطريقة مبسطة.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - استخدام الرسوم التوضيحية والجرافيك لتوضيح المعلومات.
                                </p>
                            </div>

                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - التركيز على تقديم معلومات دقيقة وموثوقة بطريقة سلسة وجذابة.
                                </p>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className='d-flex' >

                                <p className='text-danger'>
                                    الأفلام الترويجية:
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    -إنتاج أفلام قصيرة تهدف للترويج لمؤسسات أو مشاريع أو خدمات.
                                </p>
                            </div>
                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    -إعداد القصص والسيناريوهات التي تبرز القيمة الفريدة للمنتج أو الخدمة.
                                </p>
                            </div>

                            <div className='d-flex' >
                                <span className='mx-3'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ width: "20px", color: "green" }} />
                                </span>
                                <p>
                                    - استخدام تقنيات تصوير متقدمة لتحسين جودة الصورة والصوت.
                                </p>
                            </div>
                            {/*  */}

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page