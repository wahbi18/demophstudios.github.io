function publishPost() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) return alert('Fill in both fields');

  const post = {
    id: Date.now(),
    title,
    date: new Date().toISOString().split('T')[0],
    content
  };

  const posts = JSON.parse(localStorage.getItem('demoph_posts') || '[]');
  posts.push(post);
  localStorage.setItem('demoph_posts', JSON.stringify(posts));

  alert('Post published!');
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}
