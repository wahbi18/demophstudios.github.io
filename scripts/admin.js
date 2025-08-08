// File: /assets/js/admin.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

const supabase = createClient(
  'https://qptbbvoybrukndcuhoip.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdGJidm95YnJ1a25kY3Vob2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTEwOTUsImV4cCI6MjA3MDE4NzA5NX0.NpWuEjax44L5-wjoEHaDh32NQjr5qN3hawRKRHgIbag'
);

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitBtn = document.querySelector('#post-form button[type=submit]');
const preview = document.getElementById('preview');
const postsList = document.getElementById('postList');
const logoutBtn = document.getElementById('logout');

supabase.auth.getSession().then(({ data }) => {
  if (!data.session) window.location.href = '/su/login.html';
});

logoutBtn?.addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = '/su/login.html';
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
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
      date: new Date().toISOString(),
    },
  ]);

  if (error) {
    alert('Error publishing post: ' + error.message);
  } else {
    alert('Post published!');
    titleInput.value = '';
    contentInput.value = '';
    preview.innerHTML = '';
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
  data.forEach((post) => {
    const div = document.createElement('div');
    div.className = 'bg-gray-900 p-4 rounded-xl shadow';
    div.innerHTML = `
      <h2 contenteditable="true" class="text-xl font-bold">${post.title}</h2>
      <p class="text-gray-500 text-sm">${new Date(post.date).toLocaleDateString()}</p>
      <div contenteditable="true" class="text-gray-300 mt-2">${marked.parse(post.content)}</div>
      <div class="mt-4 space-x-2">
        <button class="bg-red-600 px-2 py-1 rounded delete-btn">Delete</button>
      </div>
    `;
    // Edit handlers
    const titleEl = div.querySelector('h2');
    const contentEl = div.querySelector('div.text-gray-300');
    const deleteBtn = div.querySelector('.delete-btn');

    let editTimeout;
    titleEl.addEventListener('input', () => {
      clearTimeout(editTimeout);
      editTimeout = setTimeout(() => updatePostTitle(post.id, titleEl.innerText.trim()), 1000);
    });

    contentEl.addEventListener('input', () => {
      clearTimeout(editTimeout);
      editTimeout = setTimeout(() => updatePostContent(post.id, contentEl.innerText.trim()), 1000);
    });

    deleteBtn.addEventListener('click', async () => {
      if (!confirm('Are you sure you want to delete this post?')) return;
      const { error } = await supabase.from('posts').delete().eq('id', post.id);
      if (error) alert('Error deleting post: ' + error.message);
      else loadPosts();
    });

    postsList.appendChild(div);
  });
}

async function updatePostTitle(id, newTitle) {
  if (!newTitle) return;
  await supabase.from('posts').update({ title: newTitle }).eq('id', id);
}

async function updatePostContent(id, newContent) {
  if (!newContent) return;
  await supabase.from('posts').update({ content: newContent }).eq('id', id);
}

loadPosts();
