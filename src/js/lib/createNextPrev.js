function createNextPrev(store) {
  const reviewsList = document.querySelector('.quotes__list');
  const reviews = Array.from(document.querySelectorAll('.quotes__list-item'));

  function changeReview(oldReview, newReview) {
    function fadeOut(oldReview) {
      reviews[oldReview].classList.remove('active');
      reviews[oldReview].classList.add('inactive');
    }
    function fadeIn(newReview) {
      reviews[newReview].classList.remove('inactive');
      reviews[newReview].classList.add('active');
      store.currentReview = newReview;
    }

    fadeOut(oldReview);

    reviewsList.addEventListener(
      'animationend',
      () => {
        fadeIn(newReview);
      },
      { once: true }
    );
  }

  function showNextReview() {
    const { currentReview } = store;
    const oldReview = currentReview;
    const newReview = currentReview === reviews.length - 1 ? 0 : currentReview + 1;
    changeReview(oldReview, newReview);
  }

  function showPrevReview() {
    const { currentReview } = store;
    const oldReview = currentReview;
    const newReview = currentReview === 0 ? reviews.length - 1 : currentReview - 1;
    changeReview(oldReview, newReview);
  }

  return [showNextReview, showPrevReview];
}

export default createNextPrev;
