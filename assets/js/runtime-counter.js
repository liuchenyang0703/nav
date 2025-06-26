// static/js/runtime-counter.js
(() => {
  const startStr = document.getElementById('site-start-date').textContent.trim();
  const start = new Date(startStr);

  function pad(n) { return String(n).padStart(2, '0'); }

  function update() {
    const now = new Date();
    const delta = Math.floor((now - start) / 1000);

    const ss = pad(delta % 60);
    const mm = pad(Math.floor(delta / 60) % 60);
    const hh = Math.floor(delta / 3600) % 24;
    const days = Math.floor(delta / 86400);

    const years = Math.floor(days / 365);
    const remainingDays = days % 365;

    let output = `已运行 : ${days} 天 ${hh} 时 ${mm} 分 ${ss} 秒 `;
    if (years > 0) {
      output = `已运行 : ${years} 年 ${remainingDays} 天 ${hh} 时 ${mm} 分 ${ss} 秒 `;
    }
    output += `<span class="heartbeat">ღゝ◡╹)ノ♡</span>`;

    document.getElementById('runtime-counter').innerHTML = output;
  }

  // 初始化 + 每秒更新
  update();
  setInterval(update, 1000);

  // 心跳动画（上下跳动）
  function animateHeartbeat() {
    const heart = document.querySelector('.heartbeat');
    if (!heart) return;

    // 使用 CSS 动画
    heart.style.animation = 'heartbeat 1s ease-in-out infinite';
  }

  // 确保 DOM 加载完成后启动动画
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateHeartbeat);
  } else {
    animateHeartbeat();
  }
})();