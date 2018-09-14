# Jetch - fetch JSON

___________
A slightly easier way to fetch json

### Usage

```javascript
import jetch from 'jetch';

try {
  var json = await jetch('http://mydomain.com/endpoint.json');
} catch(failedResponse) {
  //do something with failedResponse
}
//do something with `json`
```

a failed response is any response that is not HTTP status code 200