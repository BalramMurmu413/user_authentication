const json = require ('express')

const userModel = require ('../module/userModel.js')

exports.home = (req,res)=>{res.send("this is home page")}

exports.getUser = async (req,res) =>{
    
    try {
      const getuser =  await userModel.find({})
    res.status(200).json({
        success:true,
        message: getuser
    })
    
  } catch (error) {

    console.log(error.message);
    res.status(400).json({
        success:false,
        message: " failed to get user"
    })
  }
}

exports.signUp = async (req, res) =>{

    try {
        const { name,email,password, confirmPassword} = req.body

        const psd = req.body.password
        const cnfp = req.body.confirmPassword
        const userExits = await userModel.findOne({email})
        if(userExits){
            throw new Error("User already exits")
        }
        
        else if(!cnfp){
            throw new Error(" Please confirm password ")

        }
        else if(psd !== cnfp){
            throw new Error(" Password did not match please enter same password ")
        }
        
        const userData =await userModel.create({name,email,password, confirmPassword})

        res.status(200).json({
            success:true,
            message: "User Successfully Sign Up",
            userData

        })
        
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message: ["failed to register user", error.message]
        
        })
}}

exports.logIn = async (req, res) =>{
    try {
    
        const {email, password} = req.body

        const userExits = await userModel.findOne({email})
if(!email || !password){
    throw new Error("all input field are required")
}else if(!userExits){
    throw new Error("user does not exists! first register yourself")
}else if(req.password !== psd){
    throw new Error("Wrong password! Please enter correct password")
    
}
else if(userExits){

    
    res.status(200).json({
        success:true,
        message: "User Login Successfully",
        userExits
    })
}
} catch (error) {
    console.log(error.message)
    res.status(400).json({
        success: false,
        message : error.message
    })
}


}

