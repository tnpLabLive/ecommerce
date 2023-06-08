const CreateResponse = (res, statusCode, data, message, status) => {
  return res.status(statusCode).json({
    data: data,
    message,
    status,
  });
};

module.exports = CreateResponse;
