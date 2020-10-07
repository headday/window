import "./slider";
import modals from './modules/modals'
import tabs from './modules/tabs'
import forms from './modules/forms'
import changeModal from './modules/changeModal'
import timer from './modules/timer'
import images from './modules/images'

window.addEventListener('DOMContentLoaded',() =>{

    let state = {}
    let deadline = '2020-08-18';
    modals();
    changeModal(state)
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img','.big_img > img','do_image_more')
    forms(state);
    timer('.container1',deadline)
    images();
});
