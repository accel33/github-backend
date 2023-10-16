module.exports.handler = async (event) => {
  const repo = 'culqi';
  const owner = 'accel33';
  const url = 'https://api.github.com/repos/' + owner + '/' + repo + '/commits';
  console.log(url);
  const response = await fetch(url);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};
