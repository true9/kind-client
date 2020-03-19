export function url(baseConfig: any, endpoint: string, args: any = null) {
  let apiUrl = baseConfig.protocol + '://';
  apiUrl += baseConfig.baseUrl;

  if (baseConfig.port) {
    apiUrl += ':' + baseConfig.port;
  }

  apiUrl += '/api/';

  if (!args) {
    return apiUrl + endpoint;
  }

  const parts = endpoint.split('/');
  parts.forEach((val, key) => {
    const cleanKey = val.replace(':', '');
    if (args.hasOwnProperty(cleanKey)) {
      parts[key] = args[cleanKey];
    }
  });

  return apiUrl + parts.join('/');
}
