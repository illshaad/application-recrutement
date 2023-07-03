const Hapi = require("@hapi/hapi");
const { candidates } = require("./data");
const { sendConfirmationEmail } = require("./utils/nodemail");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/candidates",
    options: {
      cors: true,
      handler: (request, h) => {
        try {
          return h.response(candidates).code(200);
        } catch (error) {
          console.error("Error fetching candidates:", error);
          throw Boom.notFound("Error fetching candidates");
        }
      },
    },
  });

  server.route({
    method: "POST",
    path: "/send",
    options: {
      cors: true,
      handler: (request, h) => {
        try {
          sendConfirmationEmail(request.payload);
          return h.response({ message: "Email send" }).code(200);
        } catch (error) {
          console.error("Error sending email:", error);
          throw Boom.notFound("Error sending email");
        }
      },
    },
  }),
    await server.start();
  console.log("Server running on port 3000");
};

init();
