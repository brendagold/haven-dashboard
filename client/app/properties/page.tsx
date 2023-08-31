'use client'
import React, {useEffect, useState} from 'react'
import { Add } from '@mui/icons-material'
import axios from 'axios';
import {Box, Stack, MenuItem, Select, TextField,  Typography} from '@mui/material';
import { PropertyCard, CustomButton } from '@/components';
import { useRouter } from 'next/navigation';
import { Property} from '@/interfaces/property';
import getAllProperties from '@/lib/getAllProperties';






const AllProperties = async () => {
  const router = useRouter();
  //const [allProperties, setAllProperties] = useState([])
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(1)
  const [sorter, setSorter] = useState([{field: "price", order: 'asc'}])

  const currentPrice = sorter.find((item) => item.field === 'price')?.order || 'desc';
 
  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === 'asc' ? 'desc' : 'asc' }]);
  };
  const propertiesData: Promise<Property[]> = getAllProperties()
const allProperties = await propertiesData

console.log(allProperties)

  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/v1/properties')
  //     .then(response => {
  //       setAllProperties(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <Box>
       <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142D">
            {!allProperties.length ? 'There are no properties' : 'All Properties'}
          </Typography>
          <Box mb={2} mt={3} display="flex" width="84%" justifyContent="space-between" flexWrap="wrap">
            <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs: '20px', sm: 0 }}>
              <CustomButton
              // ${currentPrice === 'asc' ? '↑' : '↓'}
                title={`Sort price`}
                handleClick={() => toggleSort("price")}
                backgroundColor="#475BE8"
                color="#FCFCFC"
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value='Enter Title'
                // onChange={(e) => {
                //   setFilters([
                //     {
                //       field: 'title',
                //       operator: 'contains',
                //       value: e.currentTarget.value
                //         ? e.currentTarget.value
                //         : undefined,
                //     },
                //   ]);
                // }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue=""
                value='{currentFilterValues.propertyType}'
                // onChange={(e) => setFilters(
                //   [
                //     {
                //       field: 'propertyType',
                //       operator: 'eq',
                //       value: e.target.value,
                //     },
                //   ],
                //   'replace',
                // )}
              >
                <MenuItem value="">All</MenuItem>
                {['Apartment', 'Villa', 'Farmhouse', 'Condos', 'Townhouse', 'Duplex', 'Studio', 'Chalet'].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>{type}</MenuItem>
                ))}
              </Select>
            </Box>
            <CustomButton title="Add Property" handleClick={() => {router.push('/properties/create')}} backgroundColor='#475be8' color='#fcfcfc' icon={<Add />} />

          </Box>
          <Box mb={2} mt={3} display="flex" width="84%" justifyContent="space-between" flexWrap="wrap"></Box>
        </Stack>
       </Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
      </Stack>
      <Box mt='20px' sx={{display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {
          allProperties.reverse().map((property) => (
            <PropertyCard key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo} _id={undefined}/>
          ))
        }
      </Box>
      {allProperties.length ? (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475BE8"
            color="#FCFCFC"
            disabled={!(current > 1)}
          />
          <Box display={{ xs: 'hidden', sm: 'flex' }} alignItems="center" gap="5px">
            Page{' '}<strong> {current} of {pageCount} </strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475BE8"
            color="#FCFCFC"
            disabled={current === pageCount}
          />
          <Select 
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={10}
            onChange={(e) => setPageSize(e.target.value ? Number(e.target.value) : 10)}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>Show {size}</MenuItem>
            ))}
          </Select>
        </Box> 
      ) : null}
    </Box>
  )
}

export default AllProperties