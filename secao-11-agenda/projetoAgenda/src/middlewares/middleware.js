exports.middlawareGlobal = (req,res, next) => {
   res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
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