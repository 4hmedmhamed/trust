import React from 'react'
import { Container } from 'react-bootstrap'



import Link from 'next/link'
import Image from 'next/image'
import Face from "../../../public/assit/media/facebook.png"
import inestgram from "../../../public/assit/media/inestgram.jpg"
import youtube from "../../../public/assit/media/youtube.png"
import twitter from "../../../public/assit/media/twitter.png"
import snap from "../../../public/assit/media/snap.jpeg"
import linkend from "../../../public/assit/media/linkend.png"
import Tiktok from "../../../public/assit/media/tiktok1.png"
import email from "../../../public/assit/media/email.png"
import call from "../../../public/assit/media/call.png"

function page() {
  return (
    <div className='h-100'>
      <Container>
        <div className='row'>


          <div className=' col-6 col-md-3 '>
            <div className='item-connect'>
              <Link href="https://www.facebook.com/TrustAdAgency">
                <Image
                  src={Face}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "20px" }}

                />
              </Link>

            </div>

          </div>
          <div className=' col-6 col-md-3 '>
            <div className='item-connect'>

              <Link href="https://www.instagram.com/trust_adagency/">
                <Image
                  src={inestgram}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "20px" }}
                  className=''
                />
              </Link>
            </div>

          </div>
          <div className='col-6 col-md-3 '>
            <div className='item-connect'>

              <Link href="https://www.youtube.com/channel/UCEiCzFuBhQPLaB860nOLM7A">
                <Image
                  src={youtube}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className='col-6 col-md-3  '>
            <div className='item-connect'>

              <Link href="https://twitter.com/trustad_company">
                <Image
                  src={twitter}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className=' col-6 col-md-3'>
            <div className='item-connect'>

              <Link href="https://www.linkedin.com/company/trust-ad-agency">
                <Image
                  src={linkend}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className='col-6 col-md-3'>
            <div className='item-connect'>

              <Link href="https://www.tiktok.com/@trustadagency">
                <Image
                  src={Tiktok}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className='col-6 col-md-3'>
            <div className='item-connect'>

              <Link href="mailto:info.trustad@gmail.com">
                <Image
                  src={email}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className='col-6 col-md-3'>
            <div className='item-connect'>

              <Link href={"tel:0109522777"}>
                <Image
                  src={call}
                  alt="Picture of the author"
                  width={150}
                  height={150}
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>

          </div>
          <div className='row text-center'>
          <h2 className=' fs-2 ' >
                            TRUST
                            <span className='text-danger'>
                                {" "}
                                AD
                            </span>
                        </h2>

<form action="mailto:someone@example.com" method="post" enctype="text/plain">
<div className='row'>

<div className='col-md-6'>

<input type="text" className='form-control' name="name"  placeholder='الاسم'/><br/>
</div>
<div className='col-md-6'>

<input type="text" className='form-control' name="mail" placeholder='ادخل الايميل' /><br/>
</div>
<textarea  className='form-control h-100' name="comment" placeholder='ادخل الايميل'   >

</textarea>
</div>
<br />
<input type="submit" className='btn btn-primary' value="ارسال" />
</form>
      </div>

        </div>
      </Container>
    </div>
  )
}

export default page