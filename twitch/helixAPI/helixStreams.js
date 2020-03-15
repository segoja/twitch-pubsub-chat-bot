const getStreamByUserId = async (userID, client) => {
  // get user data by ID
  return await client.helix.streams.getStreamByUserId(userID);
};

module.exports = {
    getStreamByUserId
};
