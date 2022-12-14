import Head from "next/head";

import styles from "../styles/Home.module.scss";
import { useBoolean } from "@chakra-ui/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Image from "next/image";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import axios from "axios";
import Link from "next/link";
export default function Home({puma,puma2,puma3,puma4}) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const Usernnn = (name) => {
    let countries = JSON.parse(localStorage.getItem("mester"));
    if (!countries) {
      countries = [];
    }
    if (countries) {
      
      countries.push(name);
    } else {
      countries.push(name);
    }
    localStorage.setItem("mester", JSON.stringify(countries));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ernis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ernis2.png" />
      </Head>
      <header  className={styles.header}>
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          puma
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {puma.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.attributes.img.data[0].attributes.url}
                    alt="ernis_1"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Checkbox
                        onClick={() => Usernnn(product)}
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />

                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        />
                        {product.attributes.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.attributes.price_1}
                  </p>
                </div>
                <button className={styles.button}>
                  <Link href={`/Puma/${product.id}`}>??????????????????</Link>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
        <div><div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            nike
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {puma2
      
            .map((product) => (

              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.attributes.img.data[0].attributes.url}
                    alt="ernis_1"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Checkbox
                        onClick={() => Usernnn(product)}
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.attributes.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.attributes.price_1}
                  </p>
                </div>
                <button className={styles.button}  >
                  <Link href={`/Nike/${product.id}`} >
                  ??????????????????
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div></div>
        <div><div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Fila
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {puma3
            
            .map((product) => (

              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.attributes.img.data[0].attributes.url}
                    alt="ernis_1"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Checkbox
                        onClick={() => Usernnn(product)}
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.attributes.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.attributes.price_1}
                  </p>
                </div>
                <button className={styles.button}  >
                  <Link href={`/Fila/${product.id}`} >
                  ??????????????????
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div></div>
        <div>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                nike
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {puma4
                  .map((product) => (

                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src={product.attributes.img.data[0].attributes.url}
                                    alt="ernis_1"
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Checkbox
                                            onClick={() => Usernnn(product)}
                                            {...label}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                        />
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.attributes.name}
                                        </a>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {product.attributes.price_1}
                                </p>
                            </div>
                            <button className={styles.button}  >
                                <Link href={`/Adidas/${product.id}`} >
                                    ??????????????????
                                </Link>
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    </div>
        </div>
      </header>
    </div>
  );
}
         
export async function getStaticProps() {
  const res4 = await axios.get(
    "https://stupendous-string-production.up.railway.app/api/adidasq?populate=*"
  );
  let puma4 = res4.data.data;
  const re3 = await axios.get(
    "https://stupendous-string-production.up.railway.app/api/filas?populate=*"
  );
  let puma3 = re3.data.data;
  const res2 = await axios.get(
    "https://stupendous-string-production.up.railway.app/api/nikes?populate=*"
  );
  let puma2 = res2.data.data;
  const res = await axios.get(
    "https://stupendous-string-production.up.railway.app/api/pumas?populate=*"
  );
  let puma = res.data.data;
  return {
    props: {
      puma,
      puma2,puma3,puma4
    },
    revalidate: 200,
  };
}

