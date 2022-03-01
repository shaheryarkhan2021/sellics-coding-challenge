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
    return resp
}
