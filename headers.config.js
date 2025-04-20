
// Configuration file for custom HTTP headers
export default {
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
