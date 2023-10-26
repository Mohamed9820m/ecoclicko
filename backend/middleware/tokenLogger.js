const logTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      console.log('Tokennnn:', token);
    } else {
      console.log('Token not found in headers');
    }
    next();
  };
  
  module.exports = logTokenMiddleware;