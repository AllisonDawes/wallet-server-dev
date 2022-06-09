import "dotenv/config";
import app from "./app";

app.listen(process.env.PORT, () => {
  console.log("server running on port " + process.env.PORT);
});
