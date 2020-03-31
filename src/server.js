const index = require('./index');

const port = 8080;

index.listen(port, _ => {
  console.log(`Application started in ${ port }`)
});