const ErrorHandler=require('../utils/errorHandler');

module.exports=(err,req,res,next)=>{
    err.statuscode=err.statuscode||500;
    err.message=err.message||"Internal server Error";


    //  wrong mondodb id error
    if(err.name=='CastError'){
        const msg=`Resource not found Invalid:${err.path}`;
        err.path=new ErrorHandler(message,400);
    }

    
  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }
  
    res.status(err.statuscode).json({
        success:false,
        error:err.message
    }); 
}
