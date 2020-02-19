
const express=require('express');
const webpush=require('web-push');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();

//set static path
app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());



const publicVapidKey='BHBLxSwwOTlaZYwzUNUVhXlGvS9UkdDnDoLCn4UchotDRZtq3WcQmhOB6-X6p5rrBckPjqSIgI1fyIRsNACoU';
const privateVapidKey='TjLKSlds7aR7r0noJsqAmC7dpSMnzNULVjYnpFmw';

webpush.setVapidDetails('mailto:test@test.com',publicVapidKey,privateVapidKey);
//Subscribe route
app.post('/subscribe',(req,res)=>{
    //Get Subscription Object
    const subscription=req.body;
    //send 201- resource created
    res.status(201).json({});
    //Create PayLoad
    const payLoad=JSON.stringify({title:'Push Test'});

    //Pass object into Send Notification
    webpush.sendNotification(subscription,payLoad)
    .catch(err=>console.log(err));
});
const port=5000;
app.listen(port,()=>console.log(`Server started at ${port}`));
