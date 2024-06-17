import { getImageByIdService, getImagesService } from './js/api';
import { markup } from './js/markup';
import { openModal } from './js/modal';

const searchForm = document.querySelector('.search-form');
const list = document.querySelector('.list');

searchForm.addEventListener('submit', getImages);
list.addEventListener(`click`, openModal);

async function getImages(e) {
  e.preventDefault();
  const { search } = e.currentTarget.elements;
  console.log('gghhk');
  try {
    const { Search } = await getImagesService(search.value);

    console.log(Search);
    list.innerHTML = Search.map(markup).join('');
  } catch (error) {}
}

getImageByIdService('tt0312528').then(console.log);

//getImagesService("cat").then(console.log)
