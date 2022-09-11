export const getNews = () => {
  fetch(
    'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4',
  )
    .then(response => response.json())
    .then(data => console.log(data))
}
