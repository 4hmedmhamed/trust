import React from 'react'
import SOCIALMEDIA from '../../../public/assit/about/SOCIAL-MEDIA.jpg'
import astratige from '../../../public/assit/about/astratige.png'
import Praf from '../../../public/assit/about/praf.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


import Image from 'next/image'

import { Container } from 'react-bootstrap'
function page() {
  return (
    <div>

      <>
        <div className=" " style={{ height: "40vh" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", width: "100%" }}>

              <Image
                src={SOCIALMEDIA}
                style={{
                  width: "100%"
                  , height: "40vh"

                }}
              />
            </div>
            <div style={{ position: "absolute", width: "100%", marginTop: "2vh" }}>
              <h3 className='fs-1   text-center ' style={{ color: "#deb315" }}>من نحن؟</h3>
              {/* <p className='fs-3 mt-5'>شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والتي نقدمها بأعلى جودة ممكنة وبرعاية فريق عمل متخصص في مختلف مجالات التسويق والدعاية والإعلام وبأسعار تنافسية.</p> */}
            </div>
          </div>
        </div>
        <Container>
          <div className='row  '>
            <div className="col-12  " >
              <div >
                <h3 className='fs-1 text-primary  text-center border-bottom  mt-4 ' style={{ fontWeight: "700" }}>شركة Trust AD</h3>
                {/* <p className='fs-3 mt-5'>شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والتي نقدمها بأعلى جودة ممكنة وبرعاية فريق عمل متخصص في مختلف مجالات التسويق والدعاية والإعلام وبأسعار تنافسية.</p> */}
              </div>
            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-us m-2 '>
                <Image
                  src={Praf}
                  width={150}
                  height={150}
                />
                <div className=''>
                  {/* <h3 className='text-primary'>فهم ودراسة نشاطك التجاري</h3> */}
                  <p className='fs-5  text-muted m-2' >
                    تقديم خدماتنا وفق دورة عمل مُحكمة وبخطوات منظمة تشمل الآتي: إعداد تقرير أداء لمنصات النشاط التجاري لرصد أهم المشكلات التسويقية التي تواجهها.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-about  '>
                <Image
                  src={astratige}
                  width={300}
                  height={180}
                />
                <div className=''>

                  <p className='fs-5  text-muted m-1 ' >
                    إعداد استراتيجية عمل واضحة المعالم من حيث مراحل الحملة التسويقية وأهم أهدافها وآليات تنفيذها وأنواع المحتوى المناسب للمجال ومنصات النشر المناسبة إضافة
                  </p>
                </div>

              </div>

            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-us m-2 '>
                <Image
                  src={Praf}
                  width={150}
                  height={150}
                />
                <div className=''>
            
                  <p className='fs-5  text-muted m-2' >
                    عمل دراسة للمنافسين وذلك لرصد أهم نقاط القوة التي تميزهم والاستفادة منها وكذلك تحليل نقاط الضعف والمشكلات لتفادي الوقوع بها.
                  </p>
                </div>

              </div>

            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-about m-2 '>
                <Image
                  src={Praf}
                  width={150}
                  height={150}
                />
                <div className=''>
            
                  <p className='fs-5  text-muted m-2' >
                    عمل برييف يتضمن كافة الأسئلة والاستفسارات الخاصة بالمجال وذلك لمساعدتنا في تأسيس الحملة التسويقية.
                  </p>
                </div>

              </div>

            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-us m-2 '>
                <Image
                  src={Praf}
                  width={150}
                  height={150}
                />
                <div className='mt-1'>
                 
                  <p className='fs-5  text-muted m-2' >
                    إنشاء عرض سعر يتضمن أهم الخدمات التسويقية التي تحتاجها هذه المنصات و تشكل حلولا عملية لهذه المشكلات.
                  </p>
                </div>

              </div>

            </div>
            <div className='col-md-4 mt-3 text-center'>
              <div className=' item-why-about m-2 '>
                <Image
                  src={Praf}
                  width={150}
                  height={150}
                />
                <div >
              
                  <p className='fs-5  text-muted m-2' >
                    لاقتراح ميزانية التمويل الملائمة وكل هذه العناصر مؤقتة بجدول زمني محدد.
                  </p>
                </div>

              </div>

            </div>
            <div className="col-12 ">
            </div>
          </div>
          {/*  */}
          <div className="col-12  " >
              <div >
                <h3 className='fs-1 text-primary  text-center border-bottom  mt-4 ' style={{ fontWeight: "700" }}>شركة Trust AD</h3>
                {/* <p className='fs-3 mt-5'>شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والتي نقدمها بأعلى جودة ممكنة وبرعاية فريق عمل متخصص في مختلف مجالات التسويق والدعاية والإعلام وبأسعار تنافسية.</p> */}
              </div>
            </div>
          <p className='fs-3 text-muted'>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
              تقديم خدماتنا وفق دورة عمل مُحكمة وبخطوات منظمة تشمل الآتي:
              إعداد تقرير أداء لمنصات النشاط التجاري لرصد أهم المشكلات التسويقية التي تواجهها.
            </p>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
              إنشاء  عرض سعر يتضمن أهم الخدمات التسويقية التي تحتاجها هذه المنصات و تشكل حلولا عملية لهذه المشكلات.
            </p>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
            عمل برييف يتضمن كافة الأسئلة والاستفسارات الخاصة بالمجال وذلك لمساعدتنا في تأسيس الحملة التسويقية.
            </p>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
            عمل دراسة للمنافسين وذلك لرصد أهم نقاط القوة التي تميزهم والاستفادة منها وكذلك تحليل نقاط الضعف والمشكلات لتفادي الوقوع بها.
            </p>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
            إعداد استراتيجية عمل واضحة المعالم من حيث مراحل الحملة التسويقية وأهم أهدافها وآليات تنفيذها وأنواع المحتوى المناسب للمجال ومنصات النشر المناسبة إضافة
            </p>
            <p className='d-flex'>
              <span className='text-success d-flex  m-1'>*</span>
            لاقتراح ميزانية التمويل الملائمة وكل هذه العناصر مؤقتة بجدول زمني محدد.
            </p>    </p>

        </Container>
      </>
    </div>
  )
}

export default page