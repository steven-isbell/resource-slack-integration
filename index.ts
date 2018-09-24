import { WebClient } from '@slack/client';
import { config } from 'dotenv';

config();

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = process.env.CHANNEL_ID || '';

const postResource = () =>
  web.chat
    .postMessage({ channel: conversationId, text: 'Hello there' })
    .then((res: Object) => {
      console.log('Message sent: ', res);
    })
    .catch(console.error);

export default postResource;
