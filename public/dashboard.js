const courses = [
  { title: 'AI & Machine Learning', progress: 72 },
  { title: 'Data Science Foundations', progress: 38 },
  { title: 'Responsible AI Ethics', progress: 100 }
];

function renderDashboard(data = {}) {
  document.querySelector('#student-name').textContent = data.user?.name || 'student';
  document.querySelector('#courses').innerHTML = courses.map((course) =>
    `<article class="course-card"><h3>${course.title}</h3><p>${course.progress}% complete</p><div class="progress" aria-label="${course.progress}% complete"><span style="width:${course.progress}%"></span></div></article>`
  ).join('');
  document.querySelector('#certificates').textContent = courses.some((course) => course.progress === 100)
    ? 'Responsible AI Ethics certificate is ready to view.'
    : 'Complete a course to earn your first certificate.';
}

let deferredInstall;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); deferredInstall = event; document.querySelector('#install').hidden = false;
});
document.querySelector('#install').addEventListener('click', async () => { if (deferredInstall) { deferredInstall.prompt(); deferredInstall = null; } });
document.querySelector('#billing').addEventListener('click', async () => {
  const token = localStorage.getItem('uno_token');
  if (!token) return window.location.href = '/login.html';
  const response = await fetch('/api/subscriptions/portal', { method: 'POST', headers: { Authorization: ['Bearer ', token].join('') } });
  const result = await response.json(); if (result.url) window.location.href = result.url;
});
const token = localStorage.getItem('uno_token');
if (token) fetch('/api/me', { headers: { Authorization: ['Bearer ', token].join('') } }).then((response) => response.ok ? response.json() : {}).then(renderDashboard);
else renderDashboard();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
