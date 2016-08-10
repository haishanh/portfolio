## Portfolio

A simple portfolio web page built with React.

```sh
$ git clone https://github.com/haishanh/portfolio.git
$ cd portfolio
$ npm install
```

After the page loaded, it will fetch `data.json`. That `data.json` is generated using `data.yml`, simply:

```sh
$ node generateDataJson.js
```

Start the webpack dev server:

```sh
$ npm start
```

Then open `http://localhost:3000` in your browser.

To build for production usage:

```sh
$ npm run build
```