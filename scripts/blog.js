const posts = JSON.parse(localStorage.getItem('demoph_posts') || '[]');
const container = document.getElementById('posts');

if (posts.length === 0) {
  container.innerHTML = '<p class="text-gray-500">No posts yet.</p>';
} else {
  posts.reverse().forEach(post => {
    const div = document.createElement('div');
    div.className = 'bg-gray-900 p-4 rounded-xl shadow';
    div.innerHTML = `
      <h2 class="text-xl font-bold">${post.title}</h2>
      <p class="text-gray-500 text-sm">${post.date}</p>
      <p class="text-gray-300 mt-2">${post.content}</p>
    `;
    container.appendChild(div);
  });
}
