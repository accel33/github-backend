module.exports.handler = async (event) => {
  const repo = 'culqi';
  const repo2 = 'github-backend';
  const owner = 'accel33';
  const url = 'https://api.github.com/repos/' + owner + '/' + repo + '/commits';
  const url2 =
    'https://api.github.com/repos/' + owner + '/' + repo2 + '/commits';
  const response = await fetch(url);
  const response2 = await fetch(url2);
  const jsonResponse = await response.json();
  const jsonResponse2 = await response2.json();
  const finalResponse = [...jsonResponse2, ...jsonResponse];
  console.log(finalResponse);
  return finalResponse;
};
