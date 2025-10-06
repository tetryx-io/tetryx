require('dotenv').config({ path: `config/env/.env.${process.env.SERVICES_ENV || 'staging'}` });

module.exports = {
  trailingSlash: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.notion.so",
      "rfm.sh",
      "media.atrium.st",
    ],
  },
};
