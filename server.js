const express = require("express")
const bodyParser = require("body-parser")
const server = express()
server.use(bodyParser.json())

// Register a new Animal for the service
server.post("/graphql", (req, res) => {
  // Normally res.json({...}) is all you need, but it will specify a charset thus breaking _this_ pact
  res.writeHeader(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({
    "data": {
      "get": {
        "id": "sample-id"
      }
    }
  }))
  res.end()
})

module.exports = {
  server
}