const allHelixCalls = async (twitchClient) => {
    const { getTwitchUserByID, getTwitchUserByUsername, getMultipleTwitchUsersByID, getMultipleTwitchUsersByUsernams, getStreamByUserId } = require('./twitch/helixAPI')
    
    // const userByID = await getTwitchUserByID('170894673', twitchClient);
  // console.log({userByID})

  // const userByUsername = await getTwitchUserByUsername('itsdeke', twitchClient);
  // console.log({userByUsername})

  // const usersByIDs = await getMultipleTwitchUsersByID(['170894673', '32216218', '91244502'], twitchClient);
  // console.log({usersByIDs})

  // const usersByUsernames = await getMultipleTwitchUsersByUsernams(['itsdeke', 'dellec', 'videogameroulette'], twitchClient);
  // console.log({usersByUsernames})

//   const streamByUserID = await getStreamByUserId('170894673', twitchClient);
//   console.log({streamByUserID})
}

module.exports = {
    allHelixCalls
}