"use client";

import { Box,Typography, Button, Grid, Stack } from "@mui/material";
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from "@/components";

export default function Home() {
  return (
    
    <Box>
      <Typography fontSize={25} fontWeight={700} color="secondary.dark">Dashboard</Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart title="Properties for Sale" value={684} series={[75,25]} colors= {['#275be8', '#c4e8ef']} />
        <PieChart title="Properties for Rent" value={550} series={[60,40]} colors= {['#275be8', '#c4e8ef']} />
        <PieChart title="Total Customers" value={5684} series={[50,50]} colors= {['#275be8', '#c4e8ef']} />
        <PieChart title="Properties for Sale" value={555} series={[35,65]} colors= {['#275be8', '#c4e8ef']} />
      </Box>
      <Stack mt='25px' width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
    
  )
}

