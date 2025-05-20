const container = document.getElementById("container");

// 當頁面載入完成，初始化亂數字串
window.onload = () => {
  add_new_chars();
};

// 監聽鍵盤輸入事件
window.addEventListener("keyup", function (e) {
  console.log(e.key);
  
  if (!e.key.match(/^[a-z]$/i)) return; // 忽略非英文字母的按鍵

  const str = container.textContent;

  if (str.charAt(0) === e.key) {
    // 如果第一個字正確，就消除它
    container.textContent = str.substring(1);
  }

  add_new_chars(); // 接上新的亂數英文字
});

// 產生 0~2 個隨機英文字元，接到容器上
function add_new_chars() {
  const length = Math.floor(Math.random() * 3) + 1; // 0~2
  let text = "";
  for (let i = 0; i < length; i++) {
    text += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z
  }
  container.textContent += text;
}
