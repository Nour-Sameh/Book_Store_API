import { Router } from "express";
import {book} from "../module/book"
import {validator} from "../middleware/validator"
const  bookroute=Router();

let books:book[]=[];

bookroute.get('/',(req,res)=>{
    res.status(200).json(books);
})

bookroute.get('/:id',(req,res)=>{
    const iD=req.params.id;
    const valid = books.find(x=>x.id===parseInt(iD));
    if(!valid){
        res.status(404).json({message:"Book not found"});
    }
    else{
        res.status(200).json(valid);
    }
})
bookroute.post('/',validator,(req,res)=>{
    const {id,title,author}=req.body;
    if(id!==undefined&&title !== undefined&&author!==undefined){
        const newbook:book={id,title,author};
        books.push(newbook);
        res.status(201).json(newbook);
    }
})
bookroute.put('/:id',(req,res)=>{
    const id=(req.params.id);
    const {title,author}=req.body;
    if(id!==undefined&&title !== undefined&&author!==undefined){
        const valid =books.findIndex(x=>x.id===parseInt(id));
        if(valid!==-1){
            books[valid]={id:parseInt(id),title:title,author:author};
            res.status(200).json("Book Updated")
        }
        else{
            res.status(404).json("Book not found");
        }
    }
})
bookroute.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=books.findIndex(book=>book.id===id);
    if (index!==-1){
        books.splice(index,1);
        res.status(200).json("Book deleted successfully");
    } else {
        res.status(404).json("Book not found");
    }
});


export{bookroute};