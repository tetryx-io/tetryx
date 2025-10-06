import axios from "axios";

type MailProps = {
  to_emails: string;
  subject: string;
  content: string;
};

type TemplateMailProps = {
  to_emails: string;
  template_id: string;
  data?: any;
};

export const sendMail = async (payload: MailProps) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-email`,
      payload,
    );
    return res.data;
  } catch (_) {
    return { status: false, message: "Something went wrong" };
  }
};

export const sendTemplateMail = async (payload: TemplateMailProps) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-email`,
      payload,
    );
    return res.data;
  } catch (_) {
    return { status: false, message: "Something went wrong" };
  }
};
