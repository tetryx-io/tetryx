import { gql } from "@apollo/client";

export const detectEmailAndPhone = (entity: any) => {
  try {
    const response: any = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    for (const key in entity) {
      if (emailRegex.test(entity[key] as string)) {
        response["email"] = key;
      }
      if (phoneRegex.test(entity[key] as string)) {
        response["phone_number"] = key;
      }
      if (response?.email && response?.phone_number) {
        break;
      }
    }

    return response;
  } catch (_) {
    return false;
  }
};

export const getPersonQuery = (email: string, phone_number: string) => {
  const fields = `
    _up
    person_detail {
      _up
      full_name
      email
      phone_number
      address
      twitter_url
      linkedin_url
      github_url
      facebook_url
      search_status
    }
  `;

  let baseQuery = gql`
    subscription PersonStream {
      email(where: { email: { _eq: "${email}" } }) {
        ${fields}
      }
    }
  `;

  if (phone_number && !email) {
    baseQuery = gql`
      subscription PersonStream {
        phone_number(where: { phone_number: { _eq: "${phone_number}" } }) {
          ${fields}
        }
      }
    `;
  }

  return baseQuery;
};
