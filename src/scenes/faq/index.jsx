import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '../../components/Header'

const FAQ = () => {
  const theme = useTheme()

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
      
      <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={theme.palette.accent.green.main} variant='h5' fontWeight='bold'>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={theme.palette.neutral.main}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quia perferendis consequuntur voluptate distinctio non esse harum rerum vero. Veniam deserunt atque doloremque provident ad, ducimus numquam pariatur iste.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={theme.palette.accent.green.main} variant='h5' fontWeight='bold'>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={theme.palette.neutral.main}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quia perferendis consequuntur voluptate distinctio non esse harum rerum vero. Veniam deserunt atque doloremque provident ad, ducimus numquam pariatur iste.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{ backgroundColor: theme.palette.secondary.main }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={theme.palette.accent.green.main} variant='h5' fontWeight='bold'>
            My Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={theme.palette.neutral.main}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quia perferendis consequuntur voluptate distinctio non esse harum rerum vero. Veniam deserunt atque doloremque provident ad, ducimus numquam pariatur iste.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={theme.palette.accent.green.main} variant='h5' fontWeight='bold'>
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={theme.palette.neutral.main}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quia perferendis consequuntur voluptate distinctio non esse harum rerum vero. Veniam deserunt atque doloremque provident ad, ducimus numquam pariatur iste.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.secondary.main }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={theme.palette.accent.green.main} variant='h5' fontWeight='bold'>
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={theme.palette.neutral.main}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quia perferendis consequuntur voluptate distinctio non esse harum rerum vero. Veniam deserunt atque doloremque provident ad, ducimus numquam pariatur iste.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ