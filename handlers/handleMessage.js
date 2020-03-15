const handleMessage = (channel, user, message) => {
  if (message.startsWith('!')) {
    switch (message) {
      case '!twitter':
        return 'Follow Deke on Twitter: https://twitter.com/itsDeke_';
        break;
      case '!instagram':
        return 'Follow Deke on Instagram: https://instagram.com/itsDeke_';
        break;
      case '!github':
        return `Checkout Deke's projects on GitHub: https://github.com/itsdeke`;
        break;
      case '!website':
        return `Checkout Deke's Portfolio at: https://itsDeke.com`;
        break;
      case '!youtube':
        return `Checkout Deke's Youtube: https://youtube.com/`;
        break;
      default:
        return `Sorry @${user}, I did not recongize that command...`;
        break;
    }
  } else {
    return
    console.log('Message did not start with "!"');
  }
};

module.exports = {
  handleMessage
};
