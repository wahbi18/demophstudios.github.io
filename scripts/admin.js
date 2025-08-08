// File: /assets/js/admin.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://qptbbvoybrukndcuhoip.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdGJidm95YnJ1a25kY3Vob2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTEwOTUsImV4cCI6MjA3MDE4NzA5NX0.NpWuEjax44L5-wjoEHaDh32NQjr5qN3hawRKRHgIbag'
);

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitBtn = document.getElementById('submit');

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
  }
});
