//no return keyword as it is oneliner arrfunction
module.exports = fn => (req, res, next) => fn(req, res, next).catch(next);
