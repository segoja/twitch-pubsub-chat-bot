// Chatbot file

const chatBot = async (ChatClient, twitchClient) => {
  // Chat Client, irc chat
  const { handleMessage } = require('./handleChatEvents');
  const chatClient = await ChatClient.forTwitchClient(twitchClient, {
    channels: ['itsdeke', 'dellec'] // Not sending messages to dellec channel atm
  });
  await chatClient.connect(); // connects accesstoken user to twitchbot
  // join array.map() of twitch chats: chatClient.join("twitch username") // Joins a channel.

  // onPrivmsg = chats
  chatClient.onPrivmsg(async (channel, user, message) => {
    const response = await handleMessage(channel, user, message);
    console.log({ response });
    if (response === undefined) return;
    chatClient.say(channel, response);
  });

  // onAction = Fires when a user sends an action (/me) to a channel.
  chatClient.onAction((channel, user, message, msg) => {  
    // Not sure how and what to handle these messages...
   })

  // onBan = Fires when a user is permanently banned from a channel.
  chatClient.onBan((channel, user) => { 
    // Save banned user to chat for easy records
   })
};

module.exports = {
  chatBot
};
