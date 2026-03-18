import express from 'express';

const app = express();
const Big = 10000000000;

app.get("/", (req, res) => {
    let cnt = 0;
    for(let i = 0; i < Big; i++) {
        cnt += 1;
    }
    res.send("Done");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})