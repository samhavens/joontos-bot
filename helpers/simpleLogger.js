const simpleLogger =
  (routeName) =>
    (req, res, next) => {
      console.log('Route: ', routeName);
      console.log('Query: ', req.query);
      console.log('Time: ', Date.now());
      next()
    };

module.exports = simpleLogger;
