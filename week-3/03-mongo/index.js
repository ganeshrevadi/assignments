const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

<<<<<<< HEAD
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> 44221a6567c34bcb8321268b6c0180e2a2a48d63
});
