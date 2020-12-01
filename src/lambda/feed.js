// export function handler(event, context, callback) {
//   console.log(event)
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({msg: "Hello, World!"})
//   })
// }
const Parser = require('rss-parser')

export function handler(event, context, callback) {
  const FEEDS = [
    'https://www.artnews.com/c/art-news/news/feed/'
  ]

  let parser = new Parser()
  const feedRequests = FEEDS.map(feed => {

    return parser.parseURL(feed)

  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
}