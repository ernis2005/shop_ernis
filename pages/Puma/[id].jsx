import React, { useState } from 'react'
import s from "./puma.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,FreeMode } from "swiper";
import axios from "axios";
function Pumaa({data,data2}) {
  const [first, setfirst] = useState(data.attributes.img.data[0].attributes.url)
  console.log(data);
let hoverImage1=()=>{
  setfirst(data.attributes.img.data[0].attributes.url)
}
let hoverImage2=()=>{
  setfirst(data.attributes.imge_2.data[0].attributes.url)
}
let hoverImage3=()=>{
  setfirst(data.attributes.imge_3.data[0].attributes.url)
}
  return (
    <>
    
    <div className={s.idheder}>
    <div className={s.blockid}>
    <div className={s.imgs}>
      <div onMouseOver={()=>hoverImage1()}>
        <img src={data.attributes.img.data[0].attributes.url} alt="" /></div>
      <div  onMouseOver={()=>hoverImage2()}>
      <img src={data.attributes.imge_2.data[0].attributes.url} alt="" />
      </div>
      <div onMouseOver={()=>hoverImage3()}>
      <img src={data.attributes.imge_3.data[0].attributes.url} alt="" />
      </div>
  </div>
  <div className={s.imgs_info}>
  <img src={first} alt="" />
  </div>
    

    </div>
    <div className={s.infoid}>
 <div>
  <h1>{data.attributes.name}</h1>
  <div>
    <h2>
    Description
    </h2>
    <p>{data.attributes.info}</p>
    <div>
      <h4>${data.attributes.price_1}</h4>
      <button onClick={()=> alert(" ты лох")}>Заказать</button>
    </div>
  </div>
 </div>

    </div>

    </div>

    <h1 className={s.puma_id}> puma</h1>
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        360: {
          width: 360,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        822:{
          width: 1000,

          slidesPerView: 3,
        }
      }}
      modules={[FreeMode, Pagination]}
      className={s.Swiper}
      >
{data2.map((res, i)=>{
 return ( <SwiperSlide  key={i}>
 <Link href={`/Puma/${res.id}`} >
 <div className={s.SwiperSlide_div} >
    <img src={res.attributes.img.data[0].attributes.url} alt="" />
    <h1>
    {res.attributes.name}
    </h1>

    </div>
   
                  </Link>
   
  </SwiperSlide>
 )

})}
      </Swiper>
      
     
      </>
   
  )
}

export default Pumaa
export async function getStaticPaths() {

    const res = await axios.get(
      "https://stupendous-string-production.up.railway.app/api/puma2s?populate=*"
    );
    let paths = res.data.data.map((res) => {
      return {
        params: { id: String(res.id) },
      };
    });
    return {
      paths,
      fallback: false,
    };
  }
export async function getStaticProps({ params: { id } }) {
    const res2 = await axios.get(
      "https://stupendous-string-production.up.railway.app/api/puma2s?populate=*"
    );
    let data2 = res2.data.data;
  
    const res = await axios.get(
      `https://stupendous-string-production.up.railway.app/api/puma2s/${id}?populate=*`
    );
    let data = res.data.data;
    return {
      props: {
        data2,
        data,
      },
      revalidate: 2,
    };
  }