import React, { memo, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import s  from './navigation.module.scss'
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from 'next/link';
function Burger() {
    let [menu, setMenu] = useState(true)

    return (
        <>
        <IconButton className={s.Burger}>
        <MenuIcon onClick={()=>setMenu(false)} className={s.Burger}/> 
        </IconButton>

        <div  className={menu ? s.bbtn : s.btn}>
            <div className={s.Burger_menu}>
            <div className={s.aa}  >
              <Link className={s.Linkss} href="/Puma">
                puma
              </Link>
        
              
              <Link className={s.Linkss} href="/Nike">
                nike
              </Link>
              <Link className={s.Linkss} href="/Adidas">
                adidas
              </Link>
              <Link className={s.Linkss} href="/Fila">
                fila
              </Link>
            </div>
                  <IconButton >
                  <MenuOpenIcon className={s.MenuOpenIcon} onClick={()=>setMenu(true)}/> 
                  </IconButton>
            </div>
        
        </div>
        </>
    )
}
export default Burger