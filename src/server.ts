import express from "express";

const app = express();

/*registering express.json middleware, without it the raw data that any route receives will not be converted to json and
will not be appended to the request body. Also the order matters. Had it been app.post before app.use then no middleware
would have been registered and raw data would be undefined.
*/
app.use(express.json());

/*
    If the routes do not send anything in return then the request becomes a hanging request and client will not receive
    any response in return. Also it will keep hanging until the request time outs.
*/
app.post("/save", async (req, res) => {
  console.log("Body:", req.body);
  res.json({ status: "ok" });
});

app.get("/", async(req, res) =>{
    console.log("Hellom", req.body);
    res.json({status: "ok"});
})

app.listen(1995, () => {
  console.log("Server started");
});