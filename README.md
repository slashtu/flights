# Simple React App

## Getting started
- yarn
- node ^10.13.0

```sh
yarn install
yarn dev
```
Then open http://localhost:3000/ to see your app.

### `yarn prod`

Build production, minify CSS and JS.<br>
Convert class name to game controller emoji.

![Game](https://user-images.githubusercontent.com/4737130/55671483-1a065380-58c3-11e9-8987-23562a76f3bf.png)


### `yarn test`

Run testing

### `yarn analytics`

Analysis bundle JS 

![Analytics](https://user-images.githubusercontent.com/4737130/55671041-1de3a700-58be-11e9-8fa5-c62ac6b3f58d.png)

## What’s Included?

- React
- React-Router
- Redux
- Redux-Saga
- Lodash
- Axios
- Redux-Form
- Material-UI
- Jest
- Enzym
- Workbox


## Folder Structure

#### Route
```
src
└── pages
    ├── Flight   -> '/flight'
    ├── Home     -> '/'
    └── NoMatch  -> 404 not found
```

#### Reducer
```
src
└── modules
    └── flights
```

#### Selector
Get state from redux store by selector functions.<br>
For unit testing and caching. https://github.com/reduxjs/reselect

```
src
└── selectors
    ├── form.js
    └── flights.js
```

## PWA

Support offline mode

![Offline](https://user-images.githubusercontent.com/4737130/55671180-bdee0000-58bf-11e9-8286-358ecba81cd4.gif)

![Workbox](https://user-images.githubusercontent.com/4737130/55671043-20de9780-58be-11e9-8990-91cf4d592631.png)

## ToDo
- Security https://github.com/slashtu/web/blob/master/security/article.md
- Code splitting
- PostCSS
