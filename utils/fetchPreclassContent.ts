import axios from 'axios';

const fetchPreclassContent = (): void => {
  axios.get('/path/to/preclass');
};

export default fetchPreclassContent;
