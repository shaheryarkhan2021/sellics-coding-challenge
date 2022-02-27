import axios from "axios";

const requestURL =
  "https://api.unsplash.com//photos/random/?client_id=a6zRytlhrK5JHoutOFggFJQlFWU2XqWtUzx5XdLvrRs";

export async function getRandomPhoto() {
  const resp = await axios
    .get(requestURL)
    .then(function (response) {
      console.log("Random Photo", response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
