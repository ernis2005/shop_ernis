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
              <Link className={styles.Link} href="#">
                nike
              </Link>
              <Link className={styles.Link} href="#">
                adidas
              </Link>
              <Link className={styles.Link} href="#">
                fila
              </Link>
            </div>
          </div>
          <div className={styles.Basket}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={mapindex} color="secondary">
                <a className={styles.Linka} href="/Basket">
                  <ShoppingCartIcon />
                </a>
              </StyledBadge>
            </IconButton>
          </div>
          <Burger className={styles.Burger} />
        </div>
      </header>
      <div>{children}</div>
      <footer></footer>
    </>
  );
}

export default Navigation;
