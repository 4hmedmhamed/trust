import React from 'react'
import SOCIALMEDIA from '../../../public/assit/about/SOCIAL-MEDIA.jpg'
import SOCIALMEDIA2 from '../../../public/assit/about/communication_technology.jpg'
import Praf from '../../../public/assit/about/praf.png'


import Image from 'next/image'

import { Container } from 'react-bootstrap'
function page() {
  return (
    <div>

      <>


        <div className='row  '>
          <div className="col-12  " style={{height:"40vh"}}>
            <div style={{position:"relative"}}>
              <div style={{position:"absolute" ,width:"100%"}}>

                <Image
                  src={SOCIALMEDIA}
                  style={{
                    width: "100%"
                    , height: "40vh"

                  }}
                />
              </div>
              <div style={{position:"absolute" , width:"100%" , marginTop:"2vh"}}>
                <h3 className='fs-1   text-center ' style={{color:"#deb315"}}>من نحن؟</h3>
                {/* <p className='fs-3 mt-5'>شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والتي نقدمها بأعلى جودة ممكنة وبرعاية فريق عمل متخصص في مختلف مجالات التسويق والدعاية والإعلام وبأسعار تنافسية.</p> */}
              </div>
            </div>
          </div>
         
          <div className="col-12  " >
              <div >
                <h3 className='fs-1 text-primary  text-center border-bottom  mt-4 '  style={{fontWeight:"700"}}>شركة Trust AD</h3>
                {/* <p className='fs-3 mt-5'>شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والتي نقدمها بأعلى جودة ممكنة وبرعاية فريق عمل متخصص في مختلف مجالات التسويق والدعاية والإعلام وبأسعار تنافسية.</p> */}
              </div>
          </div>
         

          {/* <div className='col-md-6 mt-3 d-flex'>
            <div className=' item-why-us m-2 d-flex'>
              <Image
                src={Praf}
                width={150}
                height={150}
              />
              <div className='mt-1'>
                <p className='fs-5  text-muted  mt-4 m-2' >
                  تقديم خدماتنا وفق دورة عمل مُحكمة وبخطوات منظمة تشمل الآتي: إعداد تقرير أداء لمنصات النشاط التجاري لرصد أهم المشكلات التسويقية التي تواجهها.
                </p>
              </div>

            </div>

          </div>
          <div className='col-md-12'></div>
          <div className='col-md-6 mt-3 d-flex'>
            <div className=' item-why-about m-2 d-flex'>
              <Image
                src={Praf}
                width={150}
                height={150}
              />
              <div className='mt-1'>
                <p className='fs-5  text-muted  mt-4 m-2' >
                  تقديم خدماتنا وفق دورة عمل مُحكمة وبخطوات منظمة تشمل الآتي: إعداد تقرير أداء لمنصات النشاط التجاري لرصد أهم المشكلات التسويقية التي تواجهها.
                </p>
              </div>

            </div>

          </div>
          <div className='col-md-12'></div>

          <div className='col-md-3 mt-3 d-flex'>
            <div className=' item-why-about m-2 '>
              <Image
                src={Praf}
                width={200}
                height={200}
              />
              <div className='mt-1'>
                <h3 className='text-primary '>إختيار الخدمات المناسبة لك</h3>
                <p className='fs-5  text-muted '>
                  لدينا مصداقية ووضوح في اختيار الخدمات التي يحتاجها نشاطك التجاري وتسهم في إنجاح عملك وتحقيق أهدافك التسويقية

                </p>
              </div>

            </div>

          </div>
          <div className='col-md-3 mt-3 d-flex'>
            <div className=' item-why-us m-2 '>
              <Image
                src={Praf}
                width={200}
                height={200}
              />
              <div className='mt-1'>
                <h3 className='text-primary '>إختيار الخدمات المناسبة لك</h3>
                <p className='fs-5  text-muted '>
                  لدينا مصداقية ووضوح في اختيار الخدمات التي يحتاجها نشاطك التجاري وتسهم في إنجاح عملك وتحقيق أهدافك التسويقية

                </p>
              </div>

            </div>

          </div> */}


          <div className="col-12 ">
            <Container>
            <p className='fs-3'>
              تقديم خدماتنا وفق دورة عمل مُحكمة وبخطوات منظمة تشمل الآتي:
              إعداد تقرير أداء لمنصات النشاط التجاري لرصد أهم المشكلات التسويقية التي تواجهها.
              <br></br>
              إنشاء  عرض سعر يتضمن أهم الخدمات التسويقية التي تحتاجها هذه المنصات و تشكل حلولا عملية لهذه المشكلات.

              <br></br>
              عمل برييف يتضمن كافة الأسئلة والاستفسارات الخاصة بالمجال وذلك لمساعدتنا في تأسيس الحملة التسويقية.

              <br></br>
              عمل دراسة للمنافسين وذلك لرصد أهم نقاط القوة التي تميزهم والاستفادة منها وكذلك تحليل نقاط الضعف والمشكلات لتفادي الوقوع بها.

              <br></br>
              إعداد استراتيجية عمل واضحة المعالم من حيث مراحل الحملة التسويقية وأهم أهدافها وآليات تنفيذها وأنواع المحتوى المناسب للمجال ومنصات النشر المناسبة إضافة
              <br></br>
              لاقتراح ميزانية التمويل الملائمة وكل هذه العناصر مؤقتة بجدول زمني محدد.
            </p>
            </Container>
            {/* <h3 className='fs-1 text-primary'>وأفضل ما يميزنا:</h3> */}
          </div>
        </div>
      </>
    </div>
  )
}

export default page