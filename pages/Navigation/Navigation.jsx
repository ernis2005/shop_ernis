import { useBoolean } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Burger from "./Burger";
import styles from "./navigation.module.scss";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

import { TbBasketOff } from "react-icons/tb";
function Navigation({ children }) {
  let [returnFormData, setReturnFormData] = useState([]);
  if (!returnFormData) {
    returnFormData = [{ none: "none" }];
  }
  const [mapindex, setmapindext] = useState();
  let nadleMapindex = () => {
    let map = returnFormData.map((res, index) => index);
    let maps = map[map.length - 1];

    setmapindext(maps);
  };
  useEffect(() => {
    nadleMapindex();
  });

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("mester"));
    setReturnFormData(Data);
  }, []);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.logo_img}>
            <Image
              className={styles.logo_img_imge}
              alt="logo"
              width={150}
              height={150}
              src="/ernis2.png"
            />
          </div>
          <div className={styles.Links}>
            <div>
              <Link className={styles.Link} href="/Puma">
                puma
              </Link>
              <Link className={styles.Link} href="/Nike">
                nike
              </Link>
              <Link className={styles.Link} href="/Adidas">
                adidas
              </Link>
              <Link className={styles.Link} href="/Fila">
                fila
              </Link>
            </div>
          </div>
          <div className={styles.info_block}>
          <Link className={styles.info_block_linck}  href="/Delivery">
          Заказы 
          </Link>
          <div className={styles.Basket}>
         
            <IconButton aria-label="cart">
            
              <StyledBadge badgeContent={mapindex} color="secondary">
                <Link className={styles.Linka} href="/Basket">
                  <ShoppingCartIcon />
                </Link>
              </StyledBadge>
            </IconButton>
          </div>
          </div>
         
         
          <Burger className={styles.Burgera} />
        </div>
      </header>
      <div>{children}</div>
      <footer>
        <div className={styles.footer}>
          <div className={styles.block1}>
            <Link className={styles.Linksss} href="/Puma">
              puma
            </Link>
            <Link className={styles.Linksss} href="/Nike">
              nike
            </Link>
            <Link className={styles.Linksss} href="/Adidas">
              adidas
            </Link>
            <Link className={styles.Linksss} href="/Fila">
              fila
            </Link>
          </div>
          <div className={styles.block2}>
            <p>Cоцсети</p>
            <div>
              <a href="https://www.instagram.com/ernis0.0/">
                <AiOutlineInstagram />
              </a>
              <a href="https://www.instagram.com/ernis0.0/">
                <AiOutlineInstagram />
              </a>
              <a href="https://t.me/Ernis00">
                <TbBrandTelegram />
              </a>
            </div>
          </div>
          <div className={styles.block3}>
<p>
  контакты
</p>
<div>
  <p >+(966) 00000000</p>
</div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Navigation;
