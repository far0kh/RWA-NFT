import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { connectToDb } from '@/utils/connectDb';
import { Subscriber } from '@/models/Subscriber';

const sendMail = async () => {
  await connectToDb();

  // Load HTML email template
  const emailTemplatePath = join(process.cwd(), 'emails/email-template.html');
  const emailHtml = readFileSync(emailTemplatePath, 'utf-8');

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  try {
    // Get all subscribers
    const subscribers = await Subscriber.find({});

    if (subscribers.length === 0) {
      console.log('No subscribers found.');
      return;
    }

    // Send an email to each subscriber
    for (const subscriber of subscribers) {
      const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: subscriber.email,
        subject: 'New Update | BetOrbit',
        html: emailHtml,
      };

      await transport.sendMail(mailOptions);
    }

    console.log('Emails sent successfully to all subscribers.');
  } catch (err) {
    console.error('Failed to send email:', err);
  }
};

export { sendMail };