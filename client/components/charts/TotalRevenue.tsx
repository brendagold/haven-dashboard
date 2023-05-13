import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="column"
      borderRadius="15px"
      id="chart"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>
      <Stack my='20px' direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          $236,535
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
          <Stack>
            <Typography fontSize={15} color="#475BE8">
              0.8%
            </Typography>
            <Typography
              fontSize={12}
              color="#808191
"
            >
              Than last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Chart
          series={TotalRevenueSeries}
          type="bar"
          height={310}
          options={TotalRevenueOptions}
        />
    </Box>
  );
};

export default TotalRevenue;
