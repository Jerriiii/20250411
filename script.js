function showIframe(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('content-frame');
  iframe.src = url; // 設定 iframe 的來源網址
  iframeContainer.style.display = 'block'; // 顯示 iframe 容器
}

function hideIframe() {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('content-frame');
  iframe.src = ''; // 清空 iframe 的來源網址
  iframeContainer.style.display = 'none'; // 隱藏 iframe 容器
}