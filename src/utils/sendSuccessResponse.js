function sendSuccessRespose({
      res,
      data,
      message='OK',
      code=200,
      total=0
 }) {
      res.status(code).json({
            payload: data,
            message,
            total
      })
};
module.exports = sendSuccessRespose;