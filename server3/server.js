//this Will Handle My Server Side
const express=require("express")
const axios =require("axios");// this will help me to get files
const cheerio=require("cheerio")// to handle the html page values like paras
const cors=require("cors")
const app=express()

app.use(cors())// to handle cors Errors

app.get("/api/scape",(req, res)=>
  {

  }
)

