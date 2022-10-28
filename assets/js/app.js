const baseEndPoint = 'https://api.github.com'; 
const usersEndPoint = `${baseEndPoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');
const $l = document.querySelector('location');

async function displayUser(userName) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndPoint}/${userName}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

/**
 * Primero cambié a camelCase las variables
 * Después retiré los signos que estaban de más.
 * Estoy en proceso de saber que está mal :C
 */