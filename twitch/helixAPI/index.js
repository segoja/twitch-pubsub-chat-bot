const {
  getTwitchUserByID,
  getMultipleTwitchUsersByID,
  getTwitchUserByUsername,
  getMultipleTwitchUsersByUsernams
} = require('./helixUsers');

const { getStreamByUserId } = require('./helixStreams')

module.exports = {
  // User API Calls
  getTwitchUserByID,
  getMultipleTwitchUsersByID,
  getTwitchUserByUsername,
  getMultipleTwitchUsersByUsernams,
  // Stream API Calls
  getStreamByUserId
};
