const getTwitchUserByID = async (userID, client) => {
  // get user data by ID
  return await client.helix.users.getUserById(userID);
};

const getMultipleTwitchUsersByID = async (userIDs, client) => {
  // get user data by username
  // Takes array, sends back array
  return await client.helix.users.getUsersByIds(userIDs);
};

const getTwitchUserByUsername = async (username, client) => {
  // get user data by username
  return await client.helix.users.getUserByName(username);
};

const getMultipleTwitchUsersByUsernams = async (usernames, client) => {
  // get user data by username
  // Takes array, sends back array
  return await client.helix.users.getUsersByNames(usernames);
};

module.exports = {
  getTwitchUserByID,
  getMultipleTwitchUsersByID,
  getTwitchUserByUsername,
  getMultipleTwitchUsersByUsernams
};
