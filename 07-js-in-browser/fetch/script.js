document.addEventListener('DOMContentLoaded', async () => {
  // const url = 'data.json';
  // const url = 'data2.json'; // 404 Not Found error
  // fetch(url);
  // console.log(fetch(url));
  // const response = await fetch(url);
  // console.log(response);
  // console.log(await response.text());
  // console.log(await response.json());
  // console.log((await response.json()).msg);

  const url = '/postExample';

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'name=Genesis&age=27'
    };

    const response = await fetch(url, options);
    // console.log((await response.json()).msg);

    // Response
    // console.log(response.headers.get('Content-Type')); // application/json; charset=UTF-8
    // console.log(response.headers.get('Date'));
    // console.log(response.status); // 200
  } catch (error) {
    console.error(error);
  }
});
