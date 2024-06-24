import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-950 text-white">
          <Container>
            <Section className="bg-slate-900 border-white/20 border text-white  my-10 px-10 py-4 rounded-md w-full">
              <Heading className="leading-tight capitalize">
                You received the following message from the contact form
              </Heading>

              <div className="border-white border-2 py-2 px-5 bg-transparent/50 rounded-xl">
                <Text>{message}</Text>
              </div>
              <div className="mt-3">
                <Text>The sender email is: {senderEmail}</Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
