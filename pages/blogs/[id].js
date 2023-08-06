import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title={post.title} />
              <p className='desc-p' dangerouslySetInnerHTML={{__html:post.desc}}></p>
            </div>
          </div>
          <Banner />

          {/* <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Integer a justo vitae arcu fermentum...' />

              <p className='desc-p'> Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.</p>
              
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default SinglePost
