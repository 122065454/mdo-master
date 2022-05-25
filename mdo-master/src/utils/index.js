export function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2])
  } else {
    return null
  }
}

export const getToken = () => {
  if (window.location.href.split('=')[1]) {
    window.localStorage.setItem('S-token', window.location.href.split('=')[1])
  }
  return window.location.href.split('=')[1]
}
