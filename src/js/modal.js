import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getImageByIdService } from './api';

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);
export async function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  try {
    const data = await getImageByIdService(e.target.id);
    const instance = basicLightbox.create(`
  <div class="modal-windows">
  <h3 class="">${data.Title}</h3>
  <img src="${data.Poster}" alt="${data.Title}">
  <ul>
    <li>Actors: ${data.Actors}</li>
    <li>Awards: ${data.Awards}</li>
    <li>BoxOffice: ${data.BoxOffice}</li>
    <li>Country: ${data.Country}</li>
    <li>Genre: ${data.Genre}</li>
    <li>Language: ${data.Language}</li>
    <li>Plot: ${data.Plot}</li>
  </ul>
</div>
    `);
    instance.show();
  } catch (error) {}
}
