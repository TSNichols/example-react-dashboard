import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()

  return (
    <Box width='100%' m='20px' >
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight='bold'
            sx={{
              color: theme.palette.neutral.main,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box display='flex' justifyContent='space-between' mt='2px'>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.accent.green.main, fontWeight: 600, }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle='italic'
          sx={{ color: theme.palette.accent.green.main, fontWeight: 600, }}
        >
          {increase}
        </Typography>
      </Box>

    </Box>
  )
}

export default StatBox