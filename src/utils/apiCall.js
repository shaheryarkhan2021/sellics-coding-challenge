import axios from "axios";

const requestURL =
  "https://api.unsplash.com//photos/random/?client_id=a6zRytlhrK5JHoutOFggFJQlFWU2XqWtUzx5XdLvrRs";

export async function getRandomPhoto() {
  const photoObject={
    id: " ",
    url:" "
  }
  const resp = await axios
    .get(requestURL)
    .then(function (response) {
      photoObject.id =response.data.id
      photoObject.url = response.data.urls.small_s3
    })
    .catch(function (error) {
      console.log(error);
    });
    return resp
}
