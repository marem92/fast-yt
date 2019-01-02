import axios from 'axios';

const KEY = 'AIzaSyB4u9gWDMhMwlDiZ9DDiywBdE3LiiCyvHo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
