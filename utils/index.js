const AuthHeader = require('./AuthHeader');
const Events = require('./Events');
const toggleFullScreen = require('./toggleFullScreen');
const PayloadJwt = require('./PayloadJwt');

module.exports = () => (  
  AuthHeader,
  Events,
  toggleFullScreen,
  PayloadJwt
);
