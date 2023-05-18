document.addEventListener('DOMContentLoaded', () => {
  const articlesElement = document.getElementById('articles');

  if (!articlesElement) {
    console.log('Error: articlesElement is null or undefined.');
    return;
  }

  const apiUrl = 'http://localhost:8080/getUrgentNews';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('article-title');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.classList.add('article-content');
        contentElement.textContent = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articlesElement.appendChild(articleElement);
      });
    })
    .catch(error => console.log(error));
});