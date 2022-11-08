import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geo = () => {
  const theme = useTheme()

  return (
    <Box m='20px'>
      <Header title='GEO CHART' subtitle='Simple Geo Chart'/>
      <Box
        height='75vh'
        border={`1px solid ${theme.palette.neutral.main}`}
        borderRadius='4px'
      >
        <GeoChart />
      </Box>  
    </Box>
  )
}

export default Geo