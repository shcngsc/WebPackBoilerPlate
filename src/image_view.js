import '../style/image_view.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bimage = document.createElement('img');
bimage.src = big;
document.body.appendChild(bimage);