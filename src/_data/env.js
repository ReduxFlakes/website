export default function () {
  return {
    environment: process.env.BUILD_TYPE || "development",
  };
}
