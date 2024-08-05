import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    preview: 'path/to/small-image1.jpg',
    original: 'path/to/large-image1.jpg',
    description: 'Image 1 description',
  },
  {
    preview: 'path/to/small-image2.jpg',
    original: 'path/to/large-image2.jpg',
    description: 'Image 2 description',
  },
];

const galleryContainer = document.getElementById('gallery');

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery-item">
                <a class="gallery-link" href="${original}">
                    <img class="gallery-image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `;
    })
    .join('');
}

galleryContainer.innerHTML = createGalleryItems(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
