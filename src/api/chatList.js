import httpInstance from '@/util/http'

export const getChatListAPI = () => {
  return httpInstance({
    url: '/chat/getmsg',
  })
}

export const addChatListAPI = (data) => {
  return httpInstance({
    url: '/test/sendmsg',
    method: 'POST',
    data
  })
}