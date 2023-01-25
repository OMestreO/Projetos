export default function cors(request, response, next) {
  response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.header('Access-Control-Allow-Headers', '*');
  response.header('Access-Control-Allow-Methods', '*');
  response.header('Access-Control-Max-Age', '10');

  next();
}
