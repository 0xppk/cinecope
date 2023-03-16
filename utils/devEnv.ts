export const devOrProd =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3003"
    : "https://cinecope.vercel.app";
