import { useMsal } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from '../auth/authConfig';

export async function fetchContacts() {
  const { instance } = useMsal();
  const token = await instance.acquireTokenSilent(loginRequest);
  const resp = await axios.get(
    'https://<YOUR-ORG>.crm.dynamics.com/api/data/v9.2/contacts',
    { headers: { Authorization: `Bearer ${token.accessToken}` } }
  );
  return resp.data.value;
}
export async function fetchDataverseData(entity: string) {
  const { instance } = useMsal();
  const token = await instance.acquireTokenSilent(loginRequest);
  const resp = await axios.get(
    `https://<YOUR-ORG>.crm.dynamics.com/api/data/v9.2/${entity}`,
    { headers: { Authorization: `Bearer ${token.accessToken}` } }
  );
  return resp.data.value;
}