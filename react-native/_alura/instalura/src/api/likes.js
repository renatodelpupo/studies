const likePhoto = (likes, liked) => {
  liked ? likes-- : likes++
  return [!liked, likes]
}

const setLikeImage = (liked) => {
  return liked
    ? require('../../res/img/s2-checked.png')
    : require('../../res/img/s2.png')
}

export { likePhoto, setLikeImage }