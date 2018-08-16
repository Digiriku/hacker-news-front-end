# Front End Hacker News Task

Demo hosted on heroku: [Demo](https://sleepy-mesa-30516.herokuapp.com/)

Remote Git Repo: [Repo](https://github.com/Digiriku/hacker-news-front-end)

### Tech

This app uses the following:

- [React] - I have chosen to react as it provides a simple approach to decalre UI elements in a self-contained manner. The modular nature of react components has previously provided me with a good introduction to unit and integration testing.

- [Styled Components] - I have chosen to use styled-components to style the app. This library provides a CSS in JS apporach. It provides predictablity and consistency, in the sense that, styles are scoped to the component. As a result the likelhood of styles leaking/clashing with other DOM elemnts, is dramatically reduced. In addition to this, styled-components uses a familiar CSS syntax and it provides SASS support. This is appealing, as my chosen pre-processor would normally be SCSS.

- [Create React App] - Used to Bootstrap this app
- [axios] - Used to make HTTP requests to Hacker News API

## Installation, Running &amp; Build

#### To install the dependencies and devDependencies:

```sh
$ yarn
```

#### To run:

```sh
$ yarn run start
```

#### To test:

```sh
$ yarn run test
```

#### To Build

```sh
$ yarn run build
```

### Todos/Up-Next

- [ ] Write more test
- [ ] Make use of a static type checker like Flow
- [ ] Expand tiles on click
- [ ] Refactor HN API fetch functionality (perhaps using redux + local storage to persist state and cache fetched data)
- [ ] Add pagination
