import { url as generateUrl } from './api-url';

export const api = {
  protocol: 'http',
  baseUrl: 'localhost',
  port: 3000,
  url: (endpoint: string, args: any = null) => {
    return generateUrl(api, endpoint, args);
  }
};
