import createNextPrev from './lib/createNextPrev';
import { pause, togglePlayPause } from './lib/togglePlayPause';

function initReviews() {
  const store = {
    currentReview: 0,
    interval: null,
  };

  const prevButton = document.getElementById('show-prev-review');
  const nextButton = document.getElementById('show-next-review');
  const playPauseButton = document.getElementById('play-pause');
  const quotesList = document.getElementById('quotes-list');

  const [showNextReview, showPrevReview] = createNextPrev(store);

  prevButton.addEventListener('click', () => {
    showPrevReview();
    pause(store);
  });

  nextButton.addEventListener('click', () => {
    showNextReview();
    pause(store);
  });

  playPauseButton.addEventListener('click', () => {
    togglePlayPause(store, showNextReview);
  });

  ['focusin', 'mouseenter'].forEach((event) =>
    quotesList.addEventListener(event, () => pause(store))
  );

  store.interval = setInterval(showNextReview, 4000);
}

export default initReviews;
