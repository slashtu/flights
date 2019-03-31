const renderer = () => (req, res) => {
  // for SSR
  const html = '';

  res.send(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My App</title>
            <link rel="stylesheet" href="main.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          </head>
          <body>
            <div id="app">${html}</div>
            <script src="main.js"></script>
          </body>
        </html>`);
};

export default renderer;
