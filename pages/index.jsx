import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import { useBoolean } from '@chakra-ui/react'

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  


  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },

    {
      id: 2,
      name: 'Basic Tee1',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black1',
    },
    {
      id: 3,
      name: 'Basic Tee2',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black2',
    },
    {
      id: 4,
      name: 'Basic Tee3',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black3',
    },
    {
      id: 5,
      name: 'Basic Tee4',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black4',
    },
    {
      id: 6,
      name: 'Basic Tee5',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black5',
    },
    {
      id: 7,
      name: 'Basic Tee6',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black6',
    },

  ]
  const [flag, setFlag] = useBoolean()

  const Usernnn = (name) => {
    let countries = JSON.parse(localStorage.getItem("mester"));
    if (!countries) {
      countries = [];
    }
    if (countries) {
      countries.filter((item) => item.name.id !== name.name.id);
      countries.push (name);

    } else {

      countries.push(name);
    }
    localStorage.setItem("mester", JSON.stringify(countries));
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    

    
     
  
   
    </div>
  )
}