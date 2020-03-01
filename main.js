require('newrelic');
require('https-proxy-agent');
const got = require('got');

console.log('Starting main process');

(async () => {
  const response = await got.post('https://reqres.in/api/users', {
    json: {
      foo: 'bar'
    }
  }).json();

  console.log(`The response from 'https://reqres.in/api/users' is ${JSON.stringify(response)}`);
})();
