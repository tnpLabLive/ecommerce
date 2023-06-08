const CookieToken = (res, token, data) => {
  
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  return res
    .status(200)
    .cookie("token", token, options)
    .json({
      data: {
        email: data.email,
        id: data.id,
        role: data.role,
        status: data.status,
        business_id: data.business_id,
      },
      message: "",
      status: true,
    });
};

module.exports = CookieToken;
