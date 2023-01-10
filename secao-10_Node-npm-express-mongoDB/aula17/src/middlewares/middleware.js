exports.middlawareGlobal = (req,res, next) => {
   res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
   next();
}
exports.outroMiddlaware = (req,res, next) => {
   next();
}
exports.checkCsrfError = (err,req,res, next) => {
   if(err && err.code === "EBADCSRFTOKEN"){
      return res.render('404')
   }
}
exports.csrfMiddlaware = (req,res, next) => {
   res.locals.csrfToken = req.csrfToken()
   next();
}