// 모든 페이지가 함께 쓰는 코드
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_ANON_KEY, ADMIN_EMAIL } from './config.js';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export { ADMIN_EMAIL };

// 지금 로그인한 사람 (로그인 안 했으면 null)
export async function getUser() {
  const { data } = await supabase.auth.getSession();
  return data.session ? data.session.user : null;
}

// 로그인 필수 페이지에서 사용. 로그인 안 했으면 로그인 페이지로 보냄.
export async function requireLogin() {
  const user = await getUser();
  if (!user) {
    location.replace('login.html');
    return null;
  }
  return user;
}

export function isAdmin(user) {
  return !!user && user.email === ADMIN_EMAIL;
}

export async function logout() {
  await supabase.auth.signOut();
  location.replace('index.html');
}

// 화면 위쪽 헤더를 그립니다. (로그인 상태에 따라 메뉴가 달라짐)
export async function renderHeader(active) {
  const user = await getUser();
  const el = document.getElementById('header');
  if (!el) return user;

  const link = (href, text) =>
    `<a class="nav-link${active === href ? ' is-active' : ''}" href="${href}">${text}</a>`;

  let menu = link('index.html', '상품');
  if (user) {
    menu += link('orders.html', '내 결제내역');
    if (isAdmin(user)) menu += link('admin.html', '관리자');
    menu += '<button class="nav-link nav-btn" id="logout-btn">로그아웃</button>';
  } else {
    menu += link('login.html', '로그인');
  }

  el.innerHTML = `
    <div class="header-inner">
      <a class="logo" href="index.html">굿즈샵</a>
      <nav class="nav">${menu}</nav>
    </div>`;

  const btn = document.getElementById('logout-btn');
  if (btn) btn.addEventListener('click', logout);
  return user;
}

// 이미지가 안 뜰 때 회색 자리표시자로 바꿔줍니다.
export const IMG_FALLBACK =
  "this.onerror=null;this.src='data:image/svg+xml;utf8," +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="#e9ecef"/><text x="150" y="155" font-size="16" fill="#868e96" text-anchor="middle">이미지 없음</text></svg>') +
  "'";

// 화면에 글자를 넣을 때 태그가 실행되지 않도록 막아줍니다.
export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

// 2026-08-28T05:09:30Z -> "2026. 8. 28. 오후 2:09"
export function formatDate(iso) {
  return new Date(iso).toLocaleString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}
