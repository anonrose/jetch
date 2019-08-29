export default async function (...args) {
  let response = await fetch(...args);
  if (response.status === 200) {
    let json = await response.json();

    return typeof json == 'string' ? JSON.parse(json) : json;
  } else {
    throw response
  }
}
