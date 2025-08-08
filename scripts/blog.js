// File: /assets/js/blog.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

const supabase = createClient(
  'https://qptbbvoybrukndcuhoip.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdGJidm95YnJ1a25kY3Vob2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTEwOTUsImV4cCI6MjA3MDE4NzA5NX0.NpWuEjax44L5-wjoEHaDh32NQjr5qN3hawRKRHgIbag'
);

const container = document.getElementById('posts');

async function loadPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    container.innerHTML = `<p class="text-red-500">Failed to load posts: ${error.message}</p>`;
    return;
  }

  if (!data.length) {
    container.innerHTML = '<p class="text-gray-500">No posts yet.</p>';
    return;
  }

  container.innerHTML = '';
  data.forEach((post) => {
    const div = document.createElement('article');
    div.className = 'bg-gray-900 p-4 rounded-xl shadow';
    div.innerHTML = `
      <h2 class="text-xl font-bold">${post.title}</h2>
      <p class="text-gray-500 text-sm">${new Date(post.date).toLocaleDateString()}</p>
      <div class="text-gray-300 mt-2">${marked.parse(post.content)}</div>
    `;
    container.appendChild(div);
  });
}

loadPosts();
