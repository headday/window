import checkNumInputs from './checkNumInputs'

const changeModal = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidht = document.querySelectorAll('#width'),
          windowHieght = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')


    function bindAction(event,elem,prop){
        
        elem.forEach((item,i)=>{
            item.addEventListener(event,()=>{
                switch(item.nodeName){
                    case 'SPAN': state[prop] = i
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            //i == 0 ? state[prop]='Холодное' : state[prop] = 'Теплое';
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";

                            elem.forEach((box,j) =>{
                                box.checked = false;
                                if( i == j ){
                                    box.checked = true;
                                }
                            })
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value
                        break;
                }
                console.log(state)   
            });
            
        });
        
    }
    bindAction('click',windowForm,'form');
    bindAction('input',windowWidht,'widht');
    bindAction('input',windowHieght,'height');
    bindAction('change',windowProfile,'profile'); 
    bindAction('change',windowType,'type');
   
    


}
export default changeModal;