import axios from 'axios';

import Resource from '../types/Resource';

const token: string | undefined = process.env.TOKEN;
const hook: string | undefined = process.env.HOOK || '';

const postResource = async (
  channel: string,
  resources: Resource[]
): Promise<void> => {
  try {
    const res = await axios.post(
      hook,
      {
        // Send all the fetchedResources for the day
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
