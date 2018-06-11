import { data as articles } from '../lib/data.json';

const TOP_STORIES = 'https://hacker-news.firebaseio.com/v0/topstories.json';

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case TOP_STORIES:
        return Promise.resolve({
          data: articles
        });
    }
  })
};