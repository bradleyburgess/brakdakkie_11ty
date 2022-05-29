const http = require('http')
const https = require('https')

const url = "https://www.tripadvisor.com/Hotel_Review-g469393-d2519506-Reviews-Brakdakkie_Prince_Albert-Prince_Albert_Prince_Albert_Municipality_Western_Cape.html"
// const url = "http://localhost:8080"

const protocol = url.startsWith('https:') ? https : http

protocol.get(url, {
  headers: {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MRA58N) AppleWebKit/537.36(KHTML, like Gecko) Chrome/69.0.3464.0 Mobile Safari/537.36",
    "Accept": "*/*",
    "Connection": ""
  }
}, (res) => console.log(res.statusCode))
