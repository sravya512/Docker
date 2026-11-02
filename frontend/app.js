const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const URL = process.env.BACKEND_URL || "http://backend:5000/submit";

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", async (req, res) => {
    try {
        const { name, password } = req.body;

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });

        const data = await response.json();

        res.status(response.status).json(data);

    } catch (error) {
        console.log("Error connecting to Flask:", error);

        res.status(500).json({
            error: "Unable to connect to Flask backend"
        });
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Ares listening on port 3000");
});