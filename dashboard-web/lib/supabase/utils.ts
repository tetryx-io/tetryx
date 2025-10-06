const mapUserData = (user: any) => {
  try {
    let name: string, picture: string, email_verified: boolean;
    name = user.user_metadata?.name
      ? user.user_metadata.name
      : user.email.split("@")[0];
    picture = user.user_metadata?.avatar_url
      ? user.user_metadata.avatar_url
      : "";
    if (user.hasOwnProperty("email_verified")) {
      email_verified = user.user_metadata.email_verified;
    } else {
      email_verified = true;
    }
    user = {
      ...user,
      name,
      picture,
      email_verified,
    };
    return user;
  } catch (_) {
    return user;
  }
};

export { mapUserData };
