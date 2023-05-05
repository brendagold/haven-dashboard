import React from 'react'
import { Box, Typography, FormControl, Button, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem } from '@mui/material'

import { FormProps } from '@/interfaces/common'
import CustomButton from './CustomButton'

const Form = ({type, register, handleSubmit, handleImageChange, formLoading, propertyImage} : FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}
      color='#11142d'>
        {type} a Property
      </Typography>
      <Box  mt={2.5} borderRadius='15px' padding='20px' bgColor='#fcfcfc'>
        <form style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}} onSubmit={handleSubmit}>
          <FormControl>
            <FormHelperText sx={{fontWeight: 500, margin: '10px', fontSize: 16,color: '#11142d'}}>Enter Property Name</FormHelperText>
          </FormControl>
        </form>

      </Box>
    </Box>
  )
}

export default Form