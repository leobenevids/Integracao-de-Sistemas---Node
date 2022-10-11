const express = require("express");
const PORT = 5000;

const app = express();

app.use(express.json());

const UserRoutes = require("./routes/UserRoutes");
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
