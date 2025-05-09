import express from "express";
import {bookroute} from './routes/book';
const port =8000;
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.send('Welocme to The Book Management API');
});

app.use("/book", bookroute);

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})