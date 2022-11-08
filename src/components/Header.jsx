import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle}) => {
  const theme = useTheme()

  return (
    <Box mb='30px'>
      <Typography
        variant="h2"
        color={theme.palette.neutral.main}
        fontWeight='bold'
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.accent.green.main}
        fontWeight='600'
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header