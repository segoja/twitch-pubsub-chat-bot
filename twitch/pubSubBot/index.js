// PubSub Events
const pubSubBot = async (PubsubClient, twitchClient, TWITCH_ID) => {
    const {
        handleSubscription,
        handleRedemption,
        handleBits, handleWhisper
      } = require('./handlePubSubEvents');
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
}

module.exports = {
    pubSubBot
}
    