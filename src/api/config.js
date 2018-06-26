export const commonParams = {
  g_tk: 5381,
  dataType: 'JSONP',
  format: 'jsonp',
  incharset: 'utf-8',
  outcharset: 'utf-8',
  notice: 0
}

export const options = {
  param: 'jsonpCallBack'
}

export const ERR_OK = 0

export const jsonp1 = (data) => {
  console.log(data)
}
