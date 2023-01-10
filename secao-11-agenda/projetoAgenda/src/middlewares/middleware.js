exports.middlawareGlobal = (req,res, next) => {
   res.locals.errors = req.flash('errors');
   res.locals.success = req.flash('success');
   next();
}
exports.outroMiddlaware = (req,res, next) => {
   next();
}
exports.checkCsrfError = (err,req,res, next) => {
   if(err ){
      return res.render('404')
   }
   next()
}
exports.csrfMiddlaware = (req,res, next) => {
   res.locals.csrfToken = req.csrfToken()
   next();
}