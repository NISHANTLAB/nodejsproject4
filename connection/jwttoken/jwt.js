const { reject } = require('bcrypt/promises');
const jwt=require('jsonwebtoken');

module.exports={
    signtoken:(userid)=>{
        return new Promise((resolve,reject)=>{
            const payload={}
            const secret ="some super secret"
            const option ={
                expiresIn:"1h",
                issuer:"pankajsingh.com",
                audience:userid

            }
            jwt.sign(payload,secret,option,(error,token)=>{
                if(error) reject(err)
                resolve(token)
            })
        })
    }
}