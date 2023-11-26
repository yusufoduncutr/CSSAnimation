// Animasyonları tanımla
const animations = ['bounce', 'rotate', 'fade', 'shake', 'scale'];

// Kutucukları oluştur
const container = document.getElementById('animation-container');
for (let i = 1; i <= 20; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.textContent = i; // Kutucuk numarasını ekle (opsiyonel)
  box.addEventListener('click', function() {
    runAnimation(this, animations[i % animations.length]);
  });
  box.addEventListener('mouseenter', function() {
    startAnimation(this, animations[i % animations.length]);
  });
  container.appendChild(box);
}

// Animasyon başlatma fonksiyonu
function startAnimation(element, animationName) {
  element.classList.add(animationName);

  // Animasyonun bitmesini bekleyip sonra sınıfı kaldır
  setTimeout(function() {
    element.classList.remove(animationName);
  }, 600); // 600 milisaniye, animasyon süresine göre ayarlayabilirsiniz
}

// Animasyon çalıştırma ve kodu kopyalama fonksiyonu
function runAnimation(element, animationName) {
  // Animasyonu başlat
  startAnimation(element, animationName);

  // Animasyon kodunu al
  const animationCode = getCodeForAnimation(animationName);

  // Kopyala ve bilgi mesajını göster
  copyToClipboard(animationCode);
  showInfoMessage(`Animasyon ${animationName} başlatıldı!\n\nAnimasyon kodu kopyalandı:\n${animationCode}`);
}

// Animasyon kodunu al
function getCodeForAnimation(animationName) {
  return `@keyframes ${animationName} {
  /* Animasyon kodu buraya gelir */
}`;
}

// Kopyala ve bilgi mesajını göster
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Animasyon kodu kopyalandı:', text);
  }, function(err) {
    console.error('Animasyon kodu kopyalanırken hata oluştu:', err);
  });
}

// Bilgi mesajını gösterme fonksiyonu
function showInfoMessage(message) {
  alert(message);
}
