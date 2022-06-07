import initTabs from './lib/initTabs';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm';

function initCottages() {
  initTabs();
  const galleries = document.querySelectorAll('.cottages__gallery');
  Array.prototype.forEach.call(galleries, (gallery) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: gallery,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
  });
}

export default initCottages;
