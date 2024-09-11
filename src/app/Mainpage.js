import Image from 'next/image'
import React from 'react'
import Slove from "../../public/assit/media/solve.png"
import Price from "../../public/assit/Mainpage/price.png"
import Time from "../../public/assit/Mainpage/time.jpg"
import Made from "../../public/assit/Mainpage/made.jpg"
import innovate from "../../public/assit/Mainpage/innovate.jpg"
import eim from "../../public/assit/Mainpage/eim.jpg"
import understand from "../../public/assit/Mainpage/understand.jpg"


import vidoe from "../../public/assit/aboerd/video.png"
import Seo from "../../public/assit/aboerd/SEO.png"
import version from "../../public/assit/aboerd/web.png"
import made_c from "../../public/assit/aboerd/made-c.png"
import mannage from "../../public/assit/aboerd/mannage.png"
import design_G from "../../public/assit/aboerd/design_G.png"
import corss from "../../public/assit/aboerd/corss.png"
import advance from "../../public/assit/aboerd/advance.png"


import { Container } from 'react-bootstrap'
import Link from 'next/link'
function Mainpage() {
  return (
    <>
      <div style={{ backgroundColor: "#f6f6f6", height: "100" }}>
        <Container>
          <section style={{ backgroundColor: "#f6f6f6" }}>
            <br></br>
            <h2 className='text-center'>لماذا يجب أن تكون شركتنا إختيارك الأول؟</h2>
            <div className='row text-center'>
              <div className='col-md-4 mt-3 '>
                <div className=' item-why-us m-2' >
                  <Image
                    src={understand}
                    width={350}
                    height={200}

                  />
                  <div className='mt-1'>
                    <h3 className='text-primary '>فهم ودراسة نشاطك التجاري</h3>
                    <p className='fs-5  text-muted '>
                      نسعى جاهدين لفهم أهدافك واحتياجاتك ثم نقوم بوضع تصور مناسب للحملة التسويقية المناسبة لك.
                    </p>
                  </div>

                </div>

              </div>

              <div className='col-md-4 mt-3'>
                <div className=' item-why-us m-2'>
                  <Image
                    src={eim}
                    width={350}
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


              <div className='col-md-4 mt-3'>
                <div className='item-why-us m-2'>
                  <Image
                    src={innovate}
                    width={350}
                    height={200}
                  />
                  <div className='mt-1'>
                    <h3 className='text-primary ' >   نبتكر تصاميم جذابة </h3>
                    <p className='fs-5  text-muted '>
                      نمتلك رؤية إبداعية في ابتكار وتنفيذ مختلف أشكال التصاميم الجذابة التي تعبر عن نشاطك التجاري ، وتستطيع من خلالها الوصول لعملائك .
                    </p>
                  </div>

                </div>

              </div>
              <div className='col-md-4 mt-3'>
                <div className='item-why-us m-2'>
                  <Image
                    src={Made}
                    width={350}
                    height={200}
                  />
                  <div className='mt-1'>
                    <h3 className='text-primary ' >
                      نصنع محتوى مناسب لعميلك
                    </h3>
                    <p className='fs-5  text-muted '>
                      متخصصون في عمل استراتيجيات محتوى احترافية تتضمن أهم الأفكار والخطوات و الحلول التي تسهم في التسويق لنشاطك التجاري.
                    </p>
                  </div>

                </div>

              </div>

              <div className='col-md-4 mt-3'>
                <div className='item-why-us m-2'>
                  <Image
                    src={Time}
                    width={350}
                    height={200}
                  />
                  <div className='mt-1'>
                    <h3 className='text-primary ' >
                      الإلتزام بالمواعيد
                    </h3>
                    <p className='fs-5  text-muted '>

                      نضع خطط وتقارير أداء دورية لمختلف الخدمات التي نقدمها لعملاءنا وفق جدول زمني محدد يلتزم به كلا الطرفين.

                    </p>
                  </div>

                </div>

              </div>


              <div className='col-md-4 mt-3'>
                <div className='item-why-us m-2'>
                  <Image
                    src={Price}
                    width={300}
                    height={200}
                  />
                  <div className='mt-1'>
                    <h3 className='text-primary ' >
                      أسعار تنافسية
                    </h3>
                    <p className='fs-5  text-muted '>
                      نجحنا بفضل الله في تقديم أعلى جودة من الخدمات التسويقية وبأسعار تناسب مختلف احتياجات العملاء  عمل عروض  لعملاءنا المميزين.
                    </p>
                  </div>

                </div>

              </div>

            </div>



          </section>
        </Container>
      </div>
      <Container>
        <section className=' border-bottom'>
          <br></br>
          <h2 className='text-center text-primary'>  خدمات شركه تراست آد  </h2>
          <h4 className='text-center'>نقدم استراتيجيات الخدمة المتكاملة لكل عميل من عملائنا</h4>
          <div className='row'>

            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={version}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    تصميم وإستضافة المواقع
                  </h3>
                  <p className='fs-5 text-muted '>
                    يعد تصميم وإستضافة المواقع الإلكترونية من أهم وسائل تفوق الشركات في جميع الأنشطة التجارية
                  </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/" className='servec-main-link' >عرض خدمتنا </Link>
                </div>
              </div>

            </div>

            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={Seo}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    متميزين في السيو
                  </h3>
                  <p className='fs-5 text-muted '>
                    نوفر لك فرصة ظهور نشاطك التجاري بمحركات البحث الأولى مما يسهل على عملائك إمكانية الوصول إليك.
                  </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="./SEO" className='servec-main-link' >5عرض خدمتنا </Link>
                </div>
              </div>

            </div>



            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={made_c}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    صناعة المحتوى
                  </h3>
                  <p className='fs-5 text-muted '>
                    لدينا متخصصين في صناعة وتنفيذ المحتوى التسويقي بمختلف أشكاله
                    <br></br>
                    (المرئي ، المسموع ، المكتوب).                               </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/Contentcreation" className='servec-main-link' >عرض خدمتنا </Link>
                </div>
              </div>

            </div>


            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={mannage}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3 className='fs-5' style={{ fontWeight: "700" }}>
                    إدارة منصات التواصل الاجتماعي
                  </h3>
                  <p className='fs-5 text-muted '>
                    نقدم إدارة احترافية لمنصات التواصل الاجتماعي تشمل تأسيس الصفحات وإثرائها بكافة المعلومات   وإدارتها                     </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/SocialMedia" className='servec-main-link'>عرض خدمتنا </Link>
                </div>
              </div>

            </div>


            {/*  */}

            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={design_G}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    تصميم الجرافيك
                  </h3>
                  <p className='fs-5 text-muted '>
                    لدينا فريق عمل مميز يقوم بتنفيذ العديد من التصميمات الاحترافية التي تتسم بأفكارها الإبداعية وآليات تنفيذها المتجددة والتي تختلف حسب طبيعة العلامة التجارية والهوية البصرية المميزة لها.
                  </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/GraphicDesign" className='servec-main-link' >عرض خدمتنا </Link>
                </div>
              </div>

            </div>

            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={corss}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    كورسات متخصصة
                  </h3>
                  <p className='fs-5 text-muted '>
                    لدينا قسم خاص بإنتاج الكورسات المتخصصة في مجال التسويق الإلكتروني خاصة في مجال كتابة المحتوى وإعداد الاسكريبتات.
                    لكي يودي الي التمميز في كتابه المحتوي في جميع المجالات
                  </p>
                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/courses" className='servec-main-link'>عرض خدمتنا </Link>
                </div>
              </div>

            </div>
            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={vidoe}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    إنتاج وصناعة الفيديو
                  </h3>
                  <p className='fs-5 text-muted '>

                    نقوم بتصوير وإنتاج العديد من الفيديوهات البرامجية والإعلانية والتشويقية والتي تضم ( البرامج الإعلانية ، البروموهات ، الفيديوهات المعلوماتية ، الأفلام الترويجية، فيديوهات سيمبل موشن جرافيك)
                  </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/Videomaking" className='servec-main-link' >عرض خدمتنا </Link>
                </div>
              </div>

            </div>
            <div className='col-md-3 mt-3'>
              <div className=''>
                <Image
                  src={advance}
                  width={300}
                  height={200}
                />
                <div className='mt-1 text-center '>
                  <h3>
                    الحملات الإعلانية
                  </h3>
                  <p className='fs-5 text-muted '>
                    لدينا فريق عمل مميز يقوم بتنفيذ العديد من التصميمات الاحترافية التي تتسم بالإبداعية وآليات تنفيذها  والتي تختلف حسب طبيعة العلامة التجارية والهوية البصرية المميزة لها.
                    لتحقيق اهداف والمنافسه القويه.
                  </p>

                </div>
                <div className='servec-main-buttom d-flex justify-content-center'>
                  <Link href="/Advertising " className='servec-main-link' >عرض خدمتنا </Link>
                </div>
              </div>

            </div>


          </div>
          <br></br>
        </section>
      </Container>


    </>
  )
}

export default Mainpage