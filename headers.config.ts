
// Configuration file for custom HTTP headers
interface Header {
  key: string;
  value: string;
}

interface HeaderConfig {
  source: string;
  headers: Header[];
}

interface HeadersConfig {
  headers: HeaderConfig[];
}

const headersConfig: HeadersConfig = {
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
};

export default headersConfig;
