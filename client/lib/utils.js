import { differenceInSeconds } from 'date-fns'

export const parseMs = (ms) => {
  let minutes = Math.floor(ms / 60000),
    seconds = ((ms % 60000) / 1000).toFixed(0)

  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

export const formatDate = (date) => {
  let timeDiffrence = differenceInSeconds(new Date(), new Date(date))
  let m = (timeDiffrence / 60).toFixed()
  let h = (timeDiffrence / (60 * 60)).toFixed()
  let d = (timeDiffrence / (60 * 60 * 24)).toFixed()

  if (timeDiffrence < 60) {
    return 'för ' + timeDiffrence + ' sekunder sedan'
  }

  if (m < 60) {
    return 'för ' + m + ' minuter sedan'
  }

  if (h < 24) {
    return 'för ' + h + ' timmar sedan'
  }

  return 'för ' + d + ' dagar sedan'
}

export const API = 'http://localhost:1337'