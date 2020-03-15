const TwitchClient = require('twitch').default;
const PubsubClient = require('twitch-pubsub-client').default;
const ChatClient = require('twitch-chat-client').default;
const {
  ACCESS_TOKEN, // accesstoken is for itsdeke. need a seprate accesstoken for a bot channel
  TWITCH_ID,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET
} = require('./config/dev');

const { chatBot } = require('./twitch/chatbot')
const { pubSubBot } = require('./twitch/pubSubBot')
const { twitchWebhooks } = require('./twitch/webhooks')

const { getTwitchUserByID, getTwitchUserByUsername, getMultipleTwitchUsersByID, getMultipleTwitchUsersByUsernams, getStreamByUserId } = require('./twitch/helixAPI')

const twitchClient = TwitchClient.withCredentials(
  TWITCH_CLIENT_ID,
  ACCESS_TOKEN
);

(async () => {
  // Testing Helix API Calls:
  // const userByID = await getTwitchUserByID('170894673', twitchClient);
  // console.log({userByID})
  // const userByUsername = await getTwitchUserByUsername('itsdeke', twitchClient);
  // console.log({userByUsername})
  // const usersByIDs = await getMultipleTwitchUsersByID(['170894673', '32216218', '91244502'], twitchClient);
  // console.log({usersByIDs})
  // const usersByUsernames = await getMultipleTwitchUsersByUsernams(['itsdeke', 'dellec', 'videogameroulette'], twitchClient);
  // console.log({usersByUsernames})
  const streamByUserID = await getStreamByUserId('170894673', twitchClient);
  console.log({streamByUserID})

  // New PubSub File
  pubSubBot(PubsubClient , twitchClient, TWITCH_ID) // For lack of better name

  // New Chatbot File
  chatBot(ChatClient, twitchClient)

  // New Webhooks File
  twitchWebhooks()


  // Take BELOW to twitchWebhooks folder/file
  // // Twitch Webhooks - to come later
  // Need for Followers and Stream Updates(going live/ ending and title/game changes)
  // const WebHookListener = require('twitch-webhooks').default;
  // // ngrok generats random subdomain randomsubdomain.ngrok.io
  // // Will need to hcange every time you restart ngrok server,
  // // or upgrade to premium to get a static subdomain
  // const whListener = await WebHookListener.create(twitchClient, {
  //   hostName: 'xxxxxxxx.ngrok.io', // This url must match that of dev.twitch.tv application url
  //   port: 8090,
  //   reverseProxy: { port: 443, ssl: true }
  // });
  // whListener.listen();

  // Twitch Webhook FOLLOWERS:
  // user = twitch username: "itsdeke" // string
  // or 
  // user = twitch userid: "170894673" // string
  // const followers = await whListener.subscribeToFollowersToUser(user, (followEvent) => {
  //   console.log({followEvent})
  // Save followers to database for custom event list reload

  // })

})();
