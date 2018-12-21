import axios from 'axios';
import retry from 'async-retry';

import Resource from '../types/Resource';

const token: string | undefined = process.env.TOKEN;
const hook: string | undefined = process.env.HOOK;

const postResource = async (
  channel: string,
  resources: Resource[]
): Promise<void> => {
  if (!token || !hook) {
    throw new Error('.env not configured. Please add a .env file.');
  }
  await retry(
    async bail => {
      try {
        const res = await axios.post(
          hook,
          {
            // Send all the fetchedResources for the day
            attachments: [...resources],
            channel,
            text:
              resources.length > 1
                ? 'Check out todays resources!'
                : 'Check out todays resource!'
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Message sent: ', res.data);
        return res.data;
      } catch (e) {
        console.error(e);
        if (e.status === 403 || e.status === '401') {
          bail(new Error('Bad Token'));
        }
        return e;
      }
    },
    { retries: 5 }
  );
};

export default postResource;
