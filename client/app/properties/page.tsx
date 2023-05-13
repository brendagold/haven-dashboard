'use client'
import React from 'react'
import { Add } from '@mui/icons-material'
import {Box, Stack, Typography} from '@mui/material';
import { PropertyCard, CustomButton } from '@/components';
import { useRouter } from 'next/navigation';




const AllProperties = () => {
  const router = useRouter();
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography fontSize={25} fontWeight={700} color='#11142d'>
          All Properties
        </Typography>
        <CustomButton title="Add Property" handleClick={() => {router.push('/properties/create')}} backgroundColor='#475be8' color='#fcfcfc' icon={<Add />} />
      </Stack>
    </Box>
  )
}

export default AllProperties