/* eslint-disable arrow-body-style */
module.exports = fn => {
  return (req, res, next) => {
    return fn(req, res, next).catch(err => {
      return res.status(404).json({
        status: 'error',
        data: err,
      });
    });
  };
};
