//required packages
const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

//create the express server
const app = express();

//server port number
const PORT = process.env.PORT || 3000;

//set template engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//needed to parse html data
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.post("/convert-mp3", async(req, res) => {
  const videoId = req.body.videoID;
  console.log(videoId);
  if (videoId === undefined || videoId === "" || videoId === null) {
    return res.render("index", {success : false, message : "Please enter a video ID"})
  } else {
    const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
      }
    });

    const fetchResponce = await fetchAPI.json();

    if(fetchResponce.status === "ok")
      return res.render("index", {success: true, song_title: fetchResponce.title, 
      song_link: fetchResponce.link});
    else
      return res.render("index", {success: false, message: fetchResponce.msg});
  }
})

//start the server
app.listen(PORT, () => {
  console.log('Server started on port : %o', `http://localhost:${PORT}`);
})