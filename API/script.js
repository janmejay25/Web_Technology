fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postList = document.getElementById('postList');
    
    data.slice(0, 5).forEach(post => {
      const li = document.createElement('li');
      li.textContent = `${post.title}`;
      postList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));
