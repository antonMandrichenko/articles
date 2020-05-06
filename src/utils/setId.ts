import { ids } from '../constants/ids'
export const setId = () => {
  return ids[Math.floor(Math.random() * ids.length)]
}
