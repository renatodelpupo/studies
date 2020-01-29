const readFeed = async (setFeed) => {
  const feedHttp = await fetch('http://localhost:3030/feed')
  const feedJson = await feedHttp.json()
  setFeed(feedJson)
}

export default readFeed