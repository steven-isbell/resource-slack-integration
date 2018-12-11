import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

import fetchCohorts from './utils/fetchCohorts';

const token: string = process.env.TOKEN || '';
const hook: string = process.env.HOOK || '';

const parseSchedule = async (cohort: string): Promise<Date> => {
  return new Date();
};

const fetchResource = async (topic: string): Promise<string> => {
  try {
    const res = await axios.get(`/api/path/to/${topic}`);
    return res.data;
  } catch (e) {
    throw new Error('Failed to Fetch Resource');
  }
};

const postResource = async (): Promise<void> => {
  try {
    // Fetch the resource (need to know curriculum topic)
    // const resource = await fetchResource('topic');
    const res = await axios.post(
      hook,
      {
        text: 'hello hoomans',
        channel: 'wdl-mentors'
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    //   {
    //   attachments: [
    //     {
    //       fallback: "Today's Resource",
    //       color: '#2eb886',
    //       pretext: "Check out today's resource below!",
    //       author_name: 'Todd Motto',
    //       title: 'Understanding Scope',
    //       title_link:
    //         'https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/',
    //       fields: []
    //     }
    //   ]
    // });
    console.log('Message sent: ', res.data);
  } catch (e) {
    console.error(e);
  }
};

// postResource();
