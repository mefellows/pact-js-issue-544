const { Verifier } = require ("@pact-foundation/pact");
const path =require("path");
const { server } =require("../server");

server.listen(8001, () => {
  console.log("GraphQL API listening on http://localhost:8001")
})

describe("provider pact tests", () => {
  it("should validate pact provider", () => {
    const opts = {
      pactUrls: [
        path.resolve(process.cwd(), "test/pacts/consumer-producer.json"),
      ],
      provider: "producer",
      providerBaseUrl: "http://localhost:8001",
      // pactBrokerUrl: "https://xx.pactflow.io/",
      // pactBrokerToken: "xx",
      // publishVerificationResult: false,
      providerVersion: "1.0.0",
      // verbose: true,
      providerVersionTags: ["local"]
    };

    return new Verifier(opts).verifyProvider().then((output) => {
      console.log(output);
    });
  });
});
