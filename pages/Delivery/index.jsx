import React, { useEffect, useState } from 'react'
import s from "../Delivery/delivery.module.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Delivery () {
  let [data,setData]=useState([]);
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("delivery"));
    setData(Data);
  }, []);
    // if (!data) {
    //  data = [{ name: "none" }];
     
    //  return (
    //   <>
    //     <div  className={s.data_1}>
    //      <div>
    //       <p>вы ничего не заказали</p>
    //       </div>
          
    //      </div>
    //    </>
    //  );
    // }

  return (
    <div className={s.block}>
    <div >
   
    {
      data.map((res,i)=> (
     <div className={s.sa} key={i}>
     <Accordion >
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
       id="panel1a-header"
     >
       <Typography>{res.email}</Typography>
     </AccordionSummary>
     <AccordionDetails>
       <Typography>
       ${res.pres}
       </Typography>
     </AccordionDetails>
   </Accordion>
     
    
    </div>
      ))
     }
    </div>

    </div>
  )
}

export default Delivery