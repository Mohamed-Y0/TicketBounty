export const getBaseUrl = () => {
  const enviroment = process.env.NODE_ENV;

  const baseUrl =
    enviroment === "development"
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_NETLIFY_URL}`;

  return baseUrl;
};
