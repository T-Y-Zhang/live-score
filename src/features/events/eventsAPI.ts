import axios, {AxiosResponse} from 'axios';

/**
* fetchEvents
* @return {Promise<AxiosResponse<any>>}
*/
export function fetchEvents(): Promise<AxiosResponse<any>> {
  return axios.get('https://run.mocky.io/v3/b20b77ab-7e67-4375-b4ea-233d09177da3');
}
