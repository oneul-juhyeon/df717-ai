
// Configuration file for custom HTTP headers
export interface Header {
  key: string;
  value: string;
}

export interface HeaderConfig {
  source: string;
  headers: Header[];
}

export interface HeadersConfig {
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
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
};

export default headersConfig;
