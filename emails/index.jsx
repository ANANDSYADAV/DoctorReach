import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";



const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmailTemplate = ({
  UserName,
  Email,
  Time,
  Date,
  doctor,
  Note
}) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <h1>DoctorReach</h1>
        <Text style={paragraph}>Hi {UserName},</Text>
        <Text style={paragraph}>
          Your Appointment with Doctor has booked on {Date.slice(0, 10)} at {Time}
        </Text>
        <Section style={btnContainer}>
          <Text>Check all your booking details</Text>
          <Button style={button} href="https://doctor-reach.vercel.app/my-booking">
            My Bookings
          </Button>
        </Section>
        <Text style={paragraph}>
          Warm Regards,
          <br />
          DoctorReach
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Developed by MedTechPlus
        </Text>
      </Container>
    </Body>
  </Html>
);



export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
