import fetch from 'node-fetch'
import { PUUID_ID, TEMP_API_TOKEN, TFT_API_BASE_URL } from '../utils/constants'

export const getMatchListByPuuid = async () => {
  const matchNumberLimit = 10
  const matchIdList = await fetch(`${TFT_API_BASE_URL}/matches/by-puuid/${PUUID_ID}/ids?count=${matchNumberLimit}`, {
    headers: { 'X-Riot-Token': TEMP_API_TOKEN },
  }).then((response) => response.json())

  const matchRequestList = matchIdList.map((matchId) => getMatchById(matchId))
  return Promise.all(matchRequestList)
}

export const getMatchById = async (matchId) => {
  return fetch(`${TFT_API_BASE_URL}/matches/${matchId}`, {
    headers: { 'X-Riot-Token': TEMP_API_TOKEN },
  }).then((response) => response.json())
}
