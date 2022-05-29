export function togglePlayPause(store, showNextReview) {
  const playPauseButton = document.getElementById('play-pause');
  const images = Array.from(playPauseButton.querySelectorAll('img'));

  const currentState = playPauseButton.dataset.state;

  if (currentState === 'play') {
    playPauseButton.dataset.state = 'pause';
    clearInterval(store.interval);
  } else {
    playPauseButton.dataset.state = 'play';
    store.interval = setInterval(showNextReview, 4000);
  }
  images.forEach((image) => image.classList.toggle('active'));
}

export function pause(store) {
  const playPauseButton = document.getElementById('play-pause');
  if (playPauseButton.dataset.state === 'pause') return;

  const images = Array.from(playPauseButton.querySelectorAll('img'));

  images[0].classList.remove('active');
  images[1].classList.add('active');

  playPauseButton.dataset.state = 'pause';
  clearInterval(store.interval);
}
