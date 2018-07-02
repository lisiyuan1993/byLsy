import wepy from 'wepy'

const wxRequest = async (params = {}, url) => {
  let data = params.query || {}
  let res
  try {
    res = await wepy.request({
      url: url,
      method: params.method || 'POST',
      data: data,
      header: { 'Content-Type': 'application/x-www-form-urlencoded', 'loginInfo': 'mini' }
    })
  } catch (err) {
    console.log(err.errMsg)
    // tip.error(err.errMsg)
  }
  return res.data
}
module.exports = {
  wxRequest
}
