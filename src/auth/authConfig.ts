export const msalConfig = {
    auth: {
      clientId: '<YOUR-APP-ID>',
      authority: 'https://login.microsoftonline.com/<YOUR-TENANT-ID>',
      redirectUri: window.location.origin + '/auth-callback'
    }
  };
  export const loginRequest = {
    scopes: ['https://<YOUR-ORG>.crm.dynamics.com/.default']
  };
export const tokenRequest = {
    scopes: ['https://<YOUR-ORG>.crm.dynamics.com/.default'],
    forceRefresh: false // Set to true to force a new token request
  };  