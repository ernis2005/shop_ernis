import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Autocomplete, Box,  Checkbox,  Stack, TextField } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import s from '../Puma/puma.module.scss'
function Fila({puma}) {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [data, setData] = useState(puma)
    const [lowerLimit, setLowerLimit] = useState(0);
    const [upperLimit, setUpperLimit] = useState(5000);
    if (!data) {
      return <><div className={s.loader}>ccdg</div> </>
    }
    console.log(data);
    let fg = () => {
      const numAscending = [...data].sort((a, b) => a.attributes.price_1 - b.attributes.price_1);
      setData(numAscending)
    }
    let fb = () => {
      const numAscending = [...data].sort((a, b) => b.attributes.price_1 - a.attributes.price_1);
      setData(numAscending)
    }
    let fga = () => {
      const strDescending = [...data].sort((a, b) =>
        b.attributes.name > a.attributes.name ? -1 : 1,
      );
      setData(strDescending)
    }
    let fgab = () => {
      const strDescending = [...data].sort((a, b) =>
        a.name > b.name ? -1 : 1,
      );
      setData(strDescending)
    }
    const Usernnn = (name) => {
      console.log(name);
      let countries = JSON.parse(localStorage.getItem("mester"));
      if (!countries) {
        countries = [];
      }
      if (countries) {
        countries.filter((item) => item.id !== name.id);
        countries.push(name);
      } else {
        countries.push(name);
      }
      localStorage.setItem("mester", JSON.stringify(countries));
    };
  return (
    <div>
    <div className={s.sort}>
          <div>
            <button title="цена/A" onClick={() => fg()}>цена/A </button>
            <button title="цена/Z" onClick={() => fb()}>цена/Z</button>
            <button title="A/Z" onClick={() => fga()}>A/Z</button>
            <button title="Z/A" onClick={() => fgab()}>Z/A</button>
          </div>
          <Stack className={s.Stack}>
      <Autocomplete
        id={data}
        getOptionLabel={(data) => `${data.attributes.name} `}
        options={data}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        renderOption={(props, data) => (
          <Link href={`/File/${data.id}`}>
          <Box component="li" {...props}>
              <div>
                <h1 className={s.Autocomplete_h1}>{data.attributes.name}</h1>
              </div>
          </Box>
          </Link>
        )}
        renderInput={(params) => <TextField {...params} label="поиск" />}
      />
    </Stack>
        </div>
        <div className={s.inputfilter}>
  
        <input type="number" datatype="100" onChange={(e) => setLowerLimit(e.target.value)} placeholder="min"/>
          <input type="number" onChange={(e) => setUpperLimit(e.target.value)}  placeholder="max"/>
        </div>
       
  
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              nike
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data
              .filter((data) => data.attributes.price_1 > lowerLimit && data.attributes.price_1 < upperLimit)
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
                  <button className={s.button}  >
                    <Link href={`/File/${product.id}`} >
                    подробнее
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Fila
export async function getStaticProps() {
    const res = await axios.get(
      "https://stupendous-string-production.up.railway.app/api/filas?populate=*"
    );
    let puma = res.data.data;
    return {
      props: {
        puma,
      },
      revalidate: 200,
    };
  }