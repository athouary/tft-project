import fetch from 'node-fetch'
import { PUUID_ID, TFT_API_BASE_URL } from '../utils/constants'

export const getMatchListByPuuid = async () => {
  const matchNumberLimit = 20;

  return fetch(`${TFT_API_BASE_URL}/matches/by-puuid/${PUUID_ID}/ids?count=${matchNumberLimit}`, {
    headers: { "X-Riot-Token": "RGAPI-b652e2de-10bc-4304-b9b5-715248c1d121" }
  }).then((response) => response.json());
}
