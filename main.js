

const btn_2  = document.getElementById('btn_2')
const show_2 = document.getElementById('show_2')


show_2.style.display = "none"

btn_2.addEventListener('click', (event) => {
        if(show_2.style.display == "none"){
                show_2.style.display = "block"    
        }else{
                show_2.style.display = "none"
        }
})




// ........................... menu bar
const btn_bar = document.querySelector('.btn_bar')
const nav_list  =document.querySelector('#open')


btn_bar.addEventListener('click', () => {
        if(nav_list.style.display == 'none'){
                nav_list.style.display = "block"
                nav_list.style.marginLeft = '160px'
                nav_list.style.transition = '0.5s all'
        }else{
                nav_list.style.display = 'none'
        }
})
