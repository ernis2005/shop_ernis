import React, { useEffect, useState } from 'react'
import s from "../Delivery/delivery.module.scss"
function Delivery () {
  let [data,setData]=useState([]);
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("delivery"));
    setData(Data);
  }, []);
   if (!data) {
     data = [{ name: "none" }];
     return (
      <>
        <div  className={s.data_1}>
         <div>
          <p>вы ничего не заказали</p>
          </div>
          
         </div>
       </>
     );
   }


  return (
    <div className={s.block}>
    <div className={s.blockmap}>
    {
      data.map((res,i)=> (
     <div key={i}>
     <h1>{res.email}</h1>
     <p>${res.pres}</p>
    </div>
      ))
     }
    </div>

    </div>
  )
}

export default Delivery