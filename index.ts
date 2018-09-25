import { WebClient } from '@slack/client';
import { config } from 'dotenv';

config();

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = process.env.CHANNEL_ID || '';

const postResource = async () => {
  try {
    const res = await web.chat.postMessage({
      channel: conversationId,
      text: 'Hello there'
    });
    console.log('Message sent: ', res);
  } catch (e) {
    console.error(e);
  }
};

export default postResource;
