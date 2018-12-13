import axios from 'axios';

import Resource from '../types/Resource';

const token: string = process.env.TOKEN || '';
const hook: string = process.env.HOOK || '';

const postResource = async (
  channel: string,
  resources: Resource[]
): Promise<void> => {
  try {
    const res = await axios.post(
      hook,
      {
        attachments: [...resources],
        channel
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log('Message sent: ', res.data);
  } catch (e) {
    console.error(e);
  }
};

export default postResource;
