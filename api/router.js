const express= require('express');
const Myuser = require('../connection/model/model');
const router=express.Router();
const bcrypt = require('bcrypt');
const {signtoken}=require('../connection/jwttoken/jwt');
const salt = require('salt');
// router.get('/',(req,res)=>{
//     res.send("Restful Api is working")

//TO FINDOUT THE DATA FROM DATABSE:-
router.get('/',async(req,res)=>{
try {
    const user = await Myuser.find();
    res.json(user)
} catch (error) {
    res.send(`error ${error}`)
}
});

//TO FIND OUT A PARTICULAR ID MEANS (ONLY ONE) THEN WE USE(req.params.id)

router.get('/:id',async(req,res)=>{
    try {
        const user = await Myuser.findById(req.params.id);
        res.json(user)
    } catch (error) {
        res.send(`error ${error}`)
    }
    });


router.post('/',async(req,res)=>{
    const hashpassword=await bcrypt.hash(req.body.password,12)
    const user =new Myuser({
        
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        gender:req.body.gender,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        state:req.body.state
    });
    //SAVE THE DATA TO DATABASE
    try {
        // const hashpassword = await bcrypt.hash(password,12)
       
        const data = await user.save()
        const accesstoken = await signtoken(data.id)
        res.json({accesstoken});
    } catch (error) {
        res.send(`Error: data is not inserted`)
        
    }
})

//UPDATING A DATA BY USING PATCH METHOD:

router.patch('/:id',async(req,res)=>{
    
       
        try {
            const user = await Myuser.findById(req.params.id);
            user.name=req.body.name
        // user.email=req.body.email,
        // user.gender=req.body.gender,
        // user.phoneNumber=req.body.phoneNumber,
        // user.address=req.body.address,
        // user.state=req.body.state

        const data=await user.save()
            res.json(data)
        } catch (error) {
            res.send(`error ${error}`)
        }
    });


//TO UPDATE THE whole DATA FROM PUT METHOD:
    router.put('/:id',async(req,res)=>{
        const id = req.params.id;
         Myuser.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Cannot Update with id ${id}. Maybe id is wrong` })
                } else {
                    
                    res.send({message: "User was updated successfully!"})
                    }
            })
            });

    
    //DELETE THE DATA FROM DATABASE:
    router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
     Myuser.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({message: "User was deleted successfully!"})
                }
        })
        });
        

    

module.exports=router;



