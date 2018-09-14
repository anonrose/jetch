export default async function (endpoint) {
  let response = await fetch(endpoint);
  if (response.status === 200) {
    let json = await response.json();

    return typeof json == 'string' ? JSON.parse(json) : json;
  } else {
    throw response
  }
}
