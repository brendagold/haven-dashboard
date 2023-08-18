'use client'
import React, {useEffect, useState} from 'react'
import { Add } from '@mui/icons-material'
import axios from 'axios';
import {Box, Stack, Typography} from '@mui/material';
import { PropertyCard, CustomButton } from '@/components';
import { useRouter } from 'next/navigation';




const AllProperties = () => {
  const router = useRouter();
  const [allProperties, setAllProperties] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/properties')
      .then(response => {
        setAllProperties(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Box>
       <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142D">
            {!allProperties.length ? 'There are no properties' : 'All Properties'}
          </Typography>
          <Box mb={2} mt={3} display="flex" width="84%" justifyContent="space-between" flexWrap="wrap"></Box>
        </Stack>
       </Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <CustomButton title="Add Property" handleClick={() => {router.push('/properties/create')}} backgroundColor='#475be8' color='#fcfcfc' icon={<Add />} />
      </Stack>
      <Box mt='20px' sx={{display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {
          allProperties.map((property) => (
            <PropertyCard key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default AllProperties