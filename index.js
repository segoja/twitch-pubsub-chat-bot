const TwitchClient = require('twitch').default;
const PubsubClient = require('twitch-pubsub-client').default;
const ChatClient = require('twitch-chat-client').default;
const {
  ACCESS_TOKEN, // accesstoken is for itsdeke. need a seprate accesstoken for a bot channel
  TWITCH_ID,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_SECRET
} = require('./config/dev');

const {
  handleSubscription,
  handleRedemption,
  handleBits, handleWhisper
} = require('./handlers/handleEvents');

const { handleMessage } = require('./handlers/handleMessage');

const twitchClient = TwitchClient.withCredentials(
  TWITCH_CLIENT_ID,
  ACCESS_TOKEN
);

(async () => {
  // Pubsub
  const pubSubClient = new PubsubClient();
  await pubSubClient.registerUserListener(twitchClient);

  // onRedemption = Channel Point Reward Redemptions
  await pubSubClient.onRedemption(TWITCH_ID, (message) => {
    const result = handleRedemption(message);
    console.log({ result });
  });

  // onSubscription = Channel Subscriptions
  await pubSubClient.onSubscription(TWITCH_ID, (message) => {
    const result = handleSubscription(message);
    console.log({ result });// console.log result of subscriptionhandler
  });

  // onBits? = Channel bits?
  await pubSubClient.onBits(TWITCH_ID, (message) => {
    const result = handleBits(message);
    console.log({ result }); // console.log result of bitshandler
  });

  // Need Handlers
  // onBits? = Channel bits?
  await pubSubClient.onBitsBadgeUnlock(TWITCH_ID, (message) => {
    // const result = handleBits(message);
    // console.log({ result });
  });

  // Whispers?
  await pubSubClient.onWhisper(TWITCH_ID, (message) => {
    console.log("whisper message", message._data.data_object)
    const result = handleWhisper(message);
    console.log({ result }); // console.log resunt of whisper handle
  });

  // onModAction?
  await pubSubClient.onModAction(TWITCH_ID, (topic, message) => {
    // console.log({topic})
    // console.log({message})
  });

  // Chat Client, irc chat
  const chatClient = await ChatClient.forTwitchClient(twitchClient, {
    channels: ['itsdeke', 'dellec']
  });

  await chatClient.connect();
  chatClient.onPrivmsg((channel, user, message) => {
    const response = handleMessage(channel, user, message);
    console.log({ response });
    if (response === undefined) return;
    chatClient.say(channel, response);
  });
})();
