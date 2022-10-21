const documentationSideData = [
  {
    name: "Get Started",
    path: "/documentation",
  },
  {
    name: "CLI",
    path: "/documentation/cli",
  },
  {
    name: "Packages",
    path: "",
  },
  {
    name: "Features",
    path: "/documentation/feature/",
    subNav: [
      {
        name: "Rest API endpoint",
        path: "/documentation/feature/api",
      },
      {
        name: "Server vs Serverless",
        path: "/documentation/feature/server",
      },
      {
        name: "Authentication system",
        path: "/documentation/feature/authentication",
      },
      {
        name: "Postman integration",
        path: "/documentation/feature/postman",
      },
      {
        name: "Custom routing",
        path: "/documentation/feature/customRouting",
      },
      {
        name: "Localization support",
        path: "/documentation/feature/localization",
      },
    ],
  },
  {
    name: "Examples",
    path: "",
  },
];

const teamData = [
  {
    name: "Ryan Tompson",
    imagePath: "assets/images/member_1.jpg",
    role: "Web Developer",
  },
  {
    name: "Romina Hadid",
    imagePath: "assets/images/member_2.webp",
    role: "Marketing Strategist",
  },
  {
    name: "Alexander Smith",
    imagePath: "assets/images/member_3.png",
    role: "UI/UX Designer",
  },
  {
    name: "John Doe",
    imagePath: "assets/images/member_4.jpg",
    role: "Founder and CEO",
  },
];

const technologyData = [
  {
    name: "Node JS",
    path: "/",
    imageUrl: "assets/images/icons8-node-js-144.png",
  },
  {
    name: "Serverless",
    path: "/",
    imageUrl: "assets/images/icons_serverless.png",
  },
  {
    name: "Express JS",
    path: "/",
    imageUrl: "assets/images/express-js.jpg",
  },
  {
    name: "Javascript",
    path: "/",
    imageUrl: "assets/images/icons8-javascript-144.png",
  },
  {
    name: "Socket.io",
    path: "/",
    imageUrl: "assets/images/socket-io-icon.png",
  },
  {
    name: "Websocket",
    path: "/",
    imageUrl: "assets/images/icons_websocket.png",
  },
  {
    name: "ES6",
    path: "/",
    imageUrl: "assets/images/icons_es6.png",
  },
];

const featureData = {
  restApiFeat: ` Create rest endpoints in seconds using njs2-cli. This creates a
skeleton from where the developer can start writing their business
logic.`,
  serverFeat: `Run it on a classic server via your favorite Express or in AWS
serverless platform. It’s just a matter of few commands.`,
  authenticationFeat: `    To make life simpler we have a built-in authentication system via JWT
and JWT+Database tokens. You just need to configure it in the config
file and start using it.`,
  postmanFeat: `When it comes to testing API’s there is nothing better than our
favorite tool Postman. And to make it more simple we generate a
postman script that can be directly integrated with the postman
editor.`,
  customRoutingFeature: ` Did you change your mind? Need to change your endpoint name now. It’s
much easier now, you can also pass pretty URLs now.`,
  localizationFeat: `Having customers from multiple countries? We got your back!`,
};

const cliTableData = [
  {
    command: 'njs2 install',
    description: 'Used to install the njs2 packages/plugins and generates API structure and configurations'
  },
  {
    command: 'njs2 compile',
    description: 'Used to compile the plugins and generates the build'
  },
  {
    command: 'njs2 create-endpoint',
    description: 'Generates API structure'
  },
  {
    command: 'njs2 update-postman',
    description: 'Generates postman export definitions for all the API endpoints'
  },
  {
    command: 'njs2 create-event',
    description: 'Generates Event structure'
  },
]

const sectionTitle:any = {
  api: "Rest API endpoint",
  authentication: "Authentication system",
  customRouting: "Custom routing",
  localization: "Localization support",
  postman: "Postman integration",
  server: "Server vs Serverless",
  documentation:'Getting started',
  cli: "CLI"
};

const sectionSubHeader: any ={
  cli: "Njs2 command line interface helps to create, compile and maintain Njs2 projects."
}

export {
  documentationSideData,
  teamData,
  technologyData,
  featureData,
  sectionTitle,
  cliTableData,
  sectionSubHeader
};
