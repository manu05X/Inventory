const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config({path: './config.env'});

app.use(express.json());

const PORT = process.env.PORT;

require('./db/conn')
const Course = require('./model/dataSchema');


app.get('/',(req,res) => {
    res.send(`Hello forom Node`)
});

// No Of Pages
app.get('/coursePages', async(req, res) =>{
    const totalitems = await Course.countDocuments();
    res.json({totalpages: Math.ceil(totalitems/3)});
});

app.get('/course', async(req,res) => {
    const pageNo = req.query.pageNo || 1 ;
    //console.log(pageNo);
    const itemsPerPage = 3;

    const response = await Course.find().limit(itemsPerPage).
    skip(itemsPerPage * (pageNo-1));

    console.log(response);
    res.json(response);
});


app.post('/course', async(req,res) =>{
    const {image, heading, subheading, detail, price, rating, countReview, hours, lectures, levels} = req.body;

    if(!image || !heading || !subheading || !detail || !price || !rating || !countReview || !hours || !lectures || !levels){
        return res.status(422).json({error: "Plz fill the required field"});
    }
    try{
        const myData = new Course({image, heading, subheading, detail, price, rating, countReview, hours, lectures, levels});

        await myData.save();
        res.status(201).json({message: "Data Saved Succesfully" });

    }
    catch(err){
        console.log(err);
    }
});


app.listen(PORT,()=> {
    console.log(`Server is listning at` + PORT  );
})