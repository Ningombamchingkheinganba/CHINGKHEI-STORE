const expores = require("express");
const mongoose = require("mongoose");
const app = expores();
const port = 3000;
const categoryRoute = require("./routes/category");
const brandRoute = require("./routes/brand");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const cors = require("cors");

app.use(cors());

app.use(expores.json());

app.get("/", (req, res)=>{
   res.send("Server Running");
})

app.use("/category", categoryRoute);
app.use("/brand", brandRoute);
app.use("/product", productRoute);
app.use("/customer", customerRoute);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "Chingkhei-store-db"
    });
    console.log("mongo db connected");
}

connectDb().catch((err)=> {
    console.error(err);
})

app.listen(port,()=> {
    console.log("Server running on the port", port);
})
