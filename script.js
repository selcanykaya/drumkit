// Klavye tuşuna basıldığında ses çalma fonksiyonu
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// Animasyon bittiğinde 'playing' sınıfını kaldırma
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Tüm tuşları seç
const keys = document.querySelectorAll('.key');

// Her tuşa event listener ekle
keys.forEach(key => {
    // Animasyon bittiğinde sınıfı kaldır
    key.addEventListener('transitionend', removeTransition);

    // Tıklama olayını dinle
    key.addEventListener('click', function() {
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            this.classList.add('playing');
        }
    });
});

// Klavye tuşlarını dinle
window.addEventListener('keydown', playSound);
