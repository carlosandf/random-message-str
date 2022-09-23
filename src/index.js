import fetch from "node-fetch";

const url = 'https://ajith-messages.p.rapidapi.com/getMsgs?category=funny';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9081fc5416msh39094447f86985ep170c44jsn3f8230759def',
    'X-RapidAPI-Host': 'ajith-messages.p.rapidapi.com'
  }
};

const funnyCommit = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const message = data.Message;

    console.log(`\x1b[34m${message}\x1b[89m`);

    return message
  } catch (error) {
    console.error(error)
  }
}

export { funnyCommit };