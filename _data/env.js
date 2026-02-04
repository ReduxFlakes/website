export default function () {
  return {
    environment: process.env.BUILD_TYPE || "development",
    host: process.env.HOST_TYPE || "all",
  };
}
