import { CallSharp, AlternateEmailSharp, Twitter, Instagram, Facebook } from "@mui/icons-material";
import { CardContent, Card, Typography, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";




const ContactWidget = () => {

  const {palette} = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <Card>
        <CardContent >
          <Typography color={dark} variant='h5' fontWeight='500'>
            Contact Us
          </Typography>
          <Divider/>
          <FlexBetween mt='10px'>
            <CallSharp />
            <Typography>800-111-POLL</Typography>
          </FlexBetween>         
          <Divider/>
          <FlexBetween mt='10px'>
            <AlternateEmailSharp />
            <Typography>poll_alert@email.com</Typography>
          </FlexBetween>
          <Divider/>
          <>
          <FlexBetween mt='10px' gap="0.25rem">
              <Twitter/>
              <Facebook />
              <Instagram/>
            </FlexBetween>            
          </>      
        </CardContent>
      </Card>
      {/* <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='http://localhost:5001/assets/info4.jpeg'
        style={{borderRadius: '0.75', margin: '0.75rem 0'}}
      />
      <FlexBetween>
        <Typography color={main}>Mika Cosmetics</Typography>
        <Typography color={medium}>mc.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Get your beauty products here at Mika.
      </Typography> */}
    </WidgetWrapper>
  )
}
export default ContactWidget