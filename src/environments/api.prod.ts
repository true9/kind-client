import { url as generateUrl } from './api-url';

export const api = {
  protocol: 'https',
  baseUrl: 'api.kind.t9staging.co.uk',
  port: null,
  url: (endpoint: string, args: any = null) => {
    return generateUrl(api, endpoint, args);
  }
};
