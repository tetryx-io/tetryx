// @ts-nocheck
import sgMail from "@sendgrid/mail";

import { uuidv7 } from "@kripod/uuidv7";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

import { ManagementClient, AuthenticationClient } from "auth0";

const auth0 = new ManagementClient({
  domain: "nnext.us.auth0.com",
  clientId: "dRfBRseH0qzsPJdFVysgcjNEk6xMgY25",
  clientSecret:
    "mK7yJLYqXBcTvSObWmr0coHlA1n8Uwskha9uN1ggzl7CBBggnnJ7kZCjwWV6UbpP",
  scope: "read:users update:users create:users create:user_tickets",
});

export async function send_verification_email({ user_id, result_url, email }) {
  console.log("send_verification_email: ", user_id, result_url, email);

  const params = {
    user_id,
    result_url,
  };

  const verify_email_res = await auth0.createEmailVerificationTicket(params);

  const sg_msg = {
    personalizations: [
      {
        to: [
          {
            email,
          },
        ],
      },
    ],
    from: {
      email: "team@reframe.is",
      name: "Team Reframe",
    },
    trackingSettings: {
      clickTracking: {
        enable: true,
        enableText: false,
      },
      openTracking: {
        enable: true,
        substitutionTag: "%open-track%",
      },
      subscriptionTracking: {
        enable: false,
      },
    },
    template_id: "d-dff67fb99dc94a8698f3a0bd2560ca09",
    dynamic_template_data: {
      subject: "Testing Templates & Stuff",
      name: 'Some "Testing" One',
      city: "<b>Denver<b>",
      ticket_url: verify_email_res.ticket,
    },
  };

  const sg_res = await sgMail.send(sg_msg);
}
