import React from 'react'
import Image from 'next/image'

import hand from "../../public/assit/meber/hand.jpg"
import alnel from "../../public/assit/meber/alnel.jpg"
import alqahra from "../../public/assit/meber/alqahra.jpg"
import alspha from "../../public/assit/meber/alspha.jpg"
import astampol from "../../public/assit/meber/astampol.jpg"
import moham from "../../public/assit/meber/moham.jpg"
import { Container } from 'react-bootstrap'
import Link from 'next/link'

function Customers() {
  return (
    <div >
        <Container>
          <section className='mt-5'>
            <div>

          <h4 className='text-center  fs-2   text-primary'>
            عملاء وثقوا بفريق  تراست اد
          </h4>
          
          <div className='row   '>
        
           
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' '   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={alqahra}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                  
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2'>
                    <Link href={'https://www.facebook.com/share/SxDFz1V5gwDw16rQ/?mibextid=qi2Omg'}>
                    مركز القاهرة
                    </Link>
                  </h3>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' border_that'   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={alspha}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2'>
                  <Link href={'https://www.facebook.com/share/UERd3t9eA2AHM9KK/?mibextid=qi2Omg'} >
                  مركز الصفا</Link>
                  </h3>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' border_that'   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={hand}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2'>
                    <Link href={'https://www.facebook.com/share/UERd3t9eA2AHM9KK/?mibextid=qi2Omg'}>
                    كشري هند
                    </Link>

                  </h3>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' border_that'   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={astampol}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2' >
                    <Link href={'https://www.facebook.com/share/BgMrYj2xXLDsnMjm/?mibextid=qi2Omg'}>
                    اسطنبول للمشويات
                    </Link>
                  </h3>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' border_that'   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={alnel}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2'>
<Link href={"https://www.facebook.com/share/USdGviMw2jHAcJ1i/?mibextid=qi2Omg"}>
مركز قصر النيل 
</Link>
                  </h3>
                </div>

              </div>
            </div>
            <div className='col-md-2 col-6 d-flex  '    >
              <div className=' border_that'   >
                <div className='d-flex justify-content-center border_that_item'>
                  <Image
                    src={moham}
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                </div>
                <div className='mt-1 text-center '>
                  <h3 className='fs-2'>
                    <Link href={"https://www.facebook.com/profile.php?id=61560650095724&mibextid=ZbWKwL"}>
                    دكتور محمد </Link>
                  </h3>
                </div>

              </div>
            </div>
          </div>
            </div>
        </section>
        </Container>
    </div>
  )
}

export default Customers