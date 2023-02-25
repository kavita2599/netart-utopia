import axios from "axios";
const printErrorText = (err) => {
  console.log("------------------------------------------");
  console.log("                                          ");
  console.log(" ███████ ██████  ██████   ██████  ██████  ");
  console.log(" ██      ██   ██ ██   ██ ██    ██ ██   ██ ");
  console.log(" █████   ██████  ██████  ██    ██ ██████  ");
  console.log(" ██      ██   ██ ██   ██ ██    ██ ██   ██ ");
  console.log(" ███████ ██   ██ ██   ██  ██████  ██   ██ ");
  console.log("                                          ");
  console.log("------------------------------------------");
  console.log(err);
  console.log("------------------------------------------");
};

const printNetArt = () => {
  console.log("----------------------------------------------------------");
  console.log(" __    __             __       ______              __     ");
  console.log(
    "|  \\  |  \\           |  \\     /      \\            |  \\    "
  );
  console.log("| $$\\ | $$  ______  _| $$_   |  $$$$$$\\  ______  _| $$_   ");
  console.log(
    "| $$$\\| $$ /      \\|   $$ \\  | $$__| $$ /      \\|   $$ \\  "
  );
  console.log(
    "| $$$$\\ $$|  $$$$$$\\\\$$$$$$  | $$    $$|  $$$$$$\\\\$$$$$$  "
  );
  console.log("| $$\\$$ $$| $$    $$ | $$ __ | $$$$$$$$| $$   \\$$ | $$ __ ");
  console.log("| $$ \\$$$$| $$$$$$$$ | $$|  \\| $$  | $$| $$       | $$|  \\");
  console.log(
    "| $$  \\$$$ \\$$     \\  \\$$  $$| $$  | $$| $$        \\$$  $$"
  );
  console.log(
    " \\$$   \\$$  \\$$$$$$$   \\$$$$  \\$$   \\$$ \\$$         \\$$$$ "
  );
  console.log("                                                          ");
  console.log("----------------------------------------------------------");
};

const dev_URL = "https://admin.netart.io";
const graphqlClient = axios.create({
  baseURL: dev_URL + "/graphql",
  headers: { "Content-Type": "application/json" },
  method: "POST",
});

graphqlClient.interceptors.response.use(
  function (response) {
    printNetArt(); //for printing the NetArt text in console
    return response;
  },
  function (error) {
    printErrorText(error);
    return;
  }
);

export const GraphqlClient = graphqlClient;
