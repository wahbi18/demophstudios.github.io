// File: /assets/js/admin.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

const supabase = createClient(
  'https://qptbbvoybrukndcuhoip.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdGJidm95YnJ1a25kY3Vob2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTEwOTUsImV4cCI6MjA3MDE4NzA5NX0.NpWuEjax44L5-wjoEHaDh32NQjr5qN3hawRKRHgIbag'
);

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitBtn = document.getElementById('submit');
const preview = document.getElementById('preview');
const postsList = document.getElementById('postList');

supabase.auth.getSession().then(({ data }) => {
  if (!data.session) window.location.href = '/su/login.html';
});

submitBtn.addEventListener('click', async () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert('Please enter both title and content');
    return;
  }

  const { error } = await supabase.from('posts').insert([
    {
      title,
      content,
      date: new Date().toISOString()
    }
  ]);

  if (error) {
    alert('Error publishing post: ' + error.message);
  } else {
    alert('Post published!');
    titleInput.value = '';
    contentInput.value = '';
    loadPosts();
  }
});

contentInput.addEventListener('input', () => {
  preview.innerHTML = marked.parse(contentInput.value);
});

async function loadPosts() {
  const { data, error } = await supabase.from('posts').select('*').order('date', { ascending: false });
  postsList.innerHTML = '';
  if (error || !data) return;
  data.forEach(post => {
    const div = document.createElement('div');
    div.className = 'bg-gray-900 p-4 rounded-xl shadow';
    div.innerHTML = `
      <h2 class="text-xl font-bold">${post.title}</h2>
      <p class="text-gray-500 text-sm">${new Date(post.date).toLocaleDateString()}</p>
      <div class="text-gray-300 mt-2">${marked.parse(post.content)}</div>
      <div class="mt-4 space-x-2">
        <button onclick="deletePost(${post.id})" class="bg-red-600 px-2 py-1 rounded">Delete</button>
      </div>
    `;
    postsList.appendChild(div);
  });
}

window.deletePost = async (id) => {
  const confirmDel = confirm('Are you sure you want to delete this post?');
  if (!confirmDel) return;
  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) alert('Error deleting');
  else loadPosts();
};

loadPosts();
