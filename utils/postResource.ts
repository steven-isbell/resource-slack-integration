import axios from 'axios';

const token: string = process.env.TOKEN || '';
const hook: string = process.env.HOOK || '';

const postResource = async (
  channel: string,
  resource: string
): Promise<void> => {
  try {
    const res = await axios.post(
      hook,
      {
        text: 'hello hoomans',
        channel
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

export default postResource;
