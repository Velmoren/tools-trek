import { animateModule } from './modules/animate'
import { tabSelectModule } from './modules/tab-select'
import { splidesModule } from './modules/splides'
import { changeRadioBox } from './modules/change-radio-box'
import { animateImagesFunc } from './modules/animateImages'

animateModule()
tabSelectModule()
splidesModule()
changeRadioBox()
animateImagesFunc({wrapper: '.quality__item__image.image--1', element: '.image-item', duration: 3000})
animateImagesFunc({wrapper: '.quality__item__image.image--2', element: '.image-item', duration: 1500})
