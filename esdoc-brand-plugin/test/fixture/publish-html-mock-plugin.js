exports.onPublish = function(ev) {
  const html = `
<!DOCTYPE html>
<html>
<head>
<title>Home</title>
</head>
<body>
<header>
  <a href="./index.html">Home</a>
</header>
</body>
</html>
`;
  ev.data.writeFile('index.html', html);
};
