const images = () =>{
    const workSection = document.querySelector('.works'),
         modal = document.createElement('div'),
         modalImg = document.createElement('img');

    workSection.appendChild(modal)
    modal.appendChild(modalImg)
    modal.classList.add('popup')
    modal.style.cssText = `
        
        display:none;
        justify-content:center;
        align-items:center;
    `
    modalImg.style.cssText = `
        display:inline-block;
        width:550px;
        height:550px;
        `
    workSection.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target;
        if(target && target.classList.contains('preview')){
            let path = target.parentNode.getAttribute('href')
            modal.style.display ='flex'
            modalImg.src = path
            document.body.style.overflow = 'hidden'
        }
        if(target && target.matches('div.popup')){
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
    })
}
export default images