import { WebClient } from '@slack/client';
import { config } from 'dotenv';
import axios from 'axios';

config();

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

const conversationId = process.env.CHANNEL_ID || '';

const fetchResource = async () => {
  try {
    const res = await axios.get('/api/path/to/resource');
    return res.data;
  } catch (e) {
    throw new Error('Failed to Fetch Resource');
  }
};

const postResource = async () => {
  try {
    const res = await web.chat.postMessage({
      channel: conversationId,
      text: 'Hello World'
    });
    console.log('Message sent: ', res);
  } catch (e) {
    console.error(e);
  }
};

export default postResource;
