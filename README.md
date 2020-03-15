# Twitch PubSub & Chat Bot

A nodejs application to connect to Twitch's PubSub and Chat Servers using:

- [Twitch](https://d-fischer.github.io/twitch/)
- [Twitch-PubSub-Client](https://d-fischer.github.io/twitch-pubsub-client/)
- [Twitch-Chat-Client](https://d-fischer.github.io/twitch-chat-client/).

Will interact with custom alerts system later on.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [NodeJS Installed (v10.11.0)](https://nodejs.org/en/)
- [Git Installed (2.14.3)](https://git-scm.com/downloads)

You will also need the following keys to update/create a dev.js file inside of the config folder.

```
    ACCESS_TOKEN: 'TWITCH_ACCESS_TOKEN',
    REFRESH_TOKEN: 'TWITCH_REFRESH_TOKEN',
    TWITCH_CLIENT_ID: 'TWITCH_CLIENT_ID',
    TWITCH_CLIENT_SECRET: 'TWITCH_CLIENT_SECRET',
```

You can generate an Access Token and Refresh Token with out the OAuth flow at the following site: [TwitchTokenGenerator.com](https://twitchtokengenerator.com/)

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
    npm install
```

Then start up node server using:

```
    node index.js
```

or with [Nodemon](https://nodemon.io/):

```
    nodemon index.js
```
