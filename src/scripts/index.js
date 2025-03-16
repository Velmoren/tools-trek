import { animateModule } from './modules/animate'
import { tabSelectModule } from './modules/tab-select'
import { splidesModule } from './modules/splides'
import { changeRadioBox } from './modules/change-radio-box'
import { animateImagesFunc } from './modules/animateImages'

animateModule()
tabSelectModule()
splidesModule()
changeRadioBox()
animateImagesFunc({wrapper: '.image--1__el', element: '.image--1__el--item'})
