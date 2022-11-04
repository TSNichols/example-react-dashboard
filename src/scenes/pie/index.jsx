import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='PIE CHART' subtitle='Simple Pie Chart'/>
      <Box height='75vh'>
        <PieChart />
      </Box>  
    </Box>
  )
}

export default Pie