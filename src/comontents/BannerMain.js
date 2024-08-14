import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from "../../public/assit/media/banner.gif"
import Image from 'next/image'
import Link from 'next/link'
function BannerMain() {
  return (
    <Container>
      <div className='mt-1 borer-bottom '>
        <div className='row mt-1'>


          <div className='col-md-6'>
            <div className='text-center'>
              <h1 className='title-banner-main '>شركة Trust AD   </h1>
              <h2 className=''>
                
              شركة متخصصة في تقديم مختلف خدمات التسويق الإلكتروني والميديا برودكشن وإنتاج الكورسات الإعلامية.

تتسم خدماتنا بملائمتها لكافة احتياجات العملاء حيث نقدمها بجودة عالية وبأسعار تنافسية.

               
        

                م الهويات التجارية بالاضافة إلى حلول الويب والبرمجة وخدمات استضافة المواقع.
                </h2>
                <br></br>
                <br></br>
                <br></br>
                <Link href="/"  className='text-light button-banner text-center mt-5 '>اطلب عروضنا </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <Image
              src={Logo}
              alt="FirstBanner"

              // Make the image display full width
              style={{
                width: '100%',

                objectFit: "cover"
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BannerMain