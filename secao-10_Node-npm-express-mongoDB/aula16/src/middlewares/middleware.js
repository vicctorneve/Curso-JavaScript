exports.middlawareGlobal = (req,res, next) => {
   res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
   next();
}
exports.outroMiddlaware = (req,res, next) => {
   next();
}