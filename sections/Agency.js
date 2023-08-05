import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='LUNIA AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              {/* <p className='desc-p'>Lunia Agency is a full-service agency that provides a wide range of high-quality freelance services to businesses and individuals looking to improve their online presence and reach their objectives. </p> */}
              <div className='grid-3' style={{marginTop: "70px"}}>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='About LUNIA' />
              <br />
              <p className='misson-p'><span>Lunia Agency is a full-service agency that provides a wide range of high-quality freelance services to businesses and individuals looking to improve their online presence and reach their objectives. Our team of experts specializes in App Development, App Design, Blockchain Development, Content Writing, Graphic Design, Social Media Management, Marketing, Search Engine Optimization (SEO), Video Production, Web Design, and Web Development. All these services can be found in one of the categories on our website.</span>
<br/><br/>
Our services are designed to meet the needs of businesses and individuals across various industries, from startups to established enterprises. At Lunia Agency, we believe in providing outstanding solutions that are tailored to our client's specific needs and exceed their expectations. We understand the importance of staying ahead in today's ever-changing digital world, which is why we stay current on the latest trends and technologies in our respective fields in order to provide our clients with cutting-edge solutions that drive results.<br/><br/>
Our strategy emphasizes innovation, creativity, and customer satisfaction. We take the time to listen to our clients and understand their goals, challenges, and target audience in order to create solutions that are not only visually appealing but also effective in achieving their goals. <br/><br/>

We are dedicated to being your trusted partner for all your digital needs. We strive for excellence, affordability, and timely delivery to help you achieve your goals and stand out from the crowd, whether you need help developing an app, creating a stunning website, building your brand, or driving traffic to your site. ⭐</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
