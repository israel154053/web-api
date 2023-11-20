module.exports = ((req,res,next)=>{

    if(req.url=='/admin'){
        let ip = req.ip;
        let status = arrip.find((el)=>el==ip);
        if(!status)
        res.status(401).json({msg:'you arenot authoized'});
    }
    next();
});