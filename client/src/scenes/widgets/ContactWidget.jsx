import { CallSharp, AlternateEmailSharp, Twitter, Instagram, Facebook } from "@mui/icons-material";
import { CardContent, Card, Typography, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";




const ContactWidget = () => {

  const {palette} = useTheme();
  const dark = palette.neutral.dark;

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
    </WidgetWrapper>
  )
}
export default ContactWidget