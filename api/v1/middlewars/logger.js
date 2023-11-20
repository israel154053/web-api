module.exports = (req,res,next)=>{
    confirm.log(`Method:${req.method} Url:${req.url}`);
    next();
};