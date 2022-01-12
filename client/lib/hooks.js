import Cookies from 'js-cookie'
import useSWR from 'swr'

const API = process.env.NEXT_PUBLIC_API
export const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useSavedTracks() {
  const { data, error, isValidating, mutate } = useSWR([`${API}get-saved-tracks`, {
    headers: {
      'offset': 0,
      'access_token': Cookies.get('access_token'),
      'uid': Cookies.get('uid')
    }
  }])

  return {
    result: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate
  }
}

export function useSearchTracks(value) {
  const body = { value, access_token: Cookies.get('access_token') }
  const { data, error, isValidating, mutate } = useSWR([`${API}search`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'uid': Cookies.get('uid')
    }
  }])

  return {
    result: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate
  }
}



