module.exports = ({ env }) => ({
  url: env("PUBLIC_STRAPI_API_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
