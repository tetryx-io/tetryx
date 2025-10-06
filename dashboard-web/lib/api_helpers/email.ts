import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

interface ITemplateMail {
  toEmail: string;
  templateId: string;
  data: any;
}

interface ITextMail {
  toEmail: string;
  subject: string;
  text: any;
}

const sendTemplateMail = async (payload: ITemplateMail) => {
  try {
    const message = {
      to: payload.toEmail,
      from: "team@reframe.is",
      templateId: payload.templateId,
      dynamic_template_data: payload.data,
    };
    await sgMail.send(message);
    return true;
  } catch (error) {
    return false;
  }
};

const sendTextMail = async (payload: ITextMail) => {
  try {
    const message = {
      to: payload.toEmail,
      from: "team@reframe.is",
      subject: payload.subject,
      text: payload.text,
    };
    await sgMail.send(message);
    return true;
  } catch (error) {
    return false;
  }
};

export { sendTemplateMail, sendTextMail };
