//this Will Handle My Server Side
const express=require("express")
const axios =require("axios");// this will help me to get files
const cheerio=require("cheerio")// to handle the html page values like paras
const cors=require("cors")
const app=express()

app.use(cors())// to handle cors Errors

app.get("/api/scape",async (req, res)=>
{
  try {
    const {data} = await axios.get("https://www.bbc.com/");//Get Data From Server
    const $ = cheerio.load(data);// Will Load DATA iN cHEERIO
    const header = [];//Made Array Of Header Later WIll Be Populated
    const paragraphs = []//Later Will Be Populated WIth paras
    //Time To Use Cheerio's Object $ For Seprating Header And Paras
    $('h1,h2,h3,h4,h5,h6').each((_, element) => {
      header.push($(element).text().trim());
    })
    $('p').each((_, element) => {
      paragraphs.push($(element).text().trim());
    })
    //Now both Arrays Holding Values
    res.json({ headers: header, paragraphs });

  }
  catch(error)
  {
    console.log(error)
  }
});
app.listen(3000,()=>{{
  console.log("Server started on port http://localhost:3000")
  console.log("For Scaping Results Click This http://localhost:3000/api/scape")
}});
