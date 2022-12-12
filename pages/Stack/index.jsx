
import s from '../Puma/puma.module.scss'
import Autocomplete from "@mui/material/Autocomplete";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";



import { Box } from "@mui/material";
import Link from "next/link";
import React from 'react'

function Stac({data}) {
  return (
    <div> <Stack className={s.Stack}>
    <Autocomplete
      id={data.id}
      getOptionLabel={(data) => `${data.attributes.name} `}
      options={data}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      renderOption={(props, data) => (
        <Link href={`/Puma/${data.id}`}>
        <Box component="li" {...props}>
          
            <div>
              <h1 className={s.Autocomplete_h1}>{data.attributes.name}</h1>
            </div>
       
        </Box>
        </Link>
      )}
      renderInput={(params) => <TextField {...params} label="поиск" />}
    />
  </Stack></div>
  )
}

export default Stac