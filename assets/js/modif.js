let btn_toggle_hide_show = document.querySelectorAll(".tog");
//hide all


    for(var i = 0 ; i<= btn_toggle_hide_show.length; i++){
        let span =   btn_toggle_hide_show[i].previousElementSibling;
     span.style.display = 'none';
    btn_toggle_hide_show[i].addEventListener('click',(e)=>{
        e.preventDefault();
        
            if(span.style.display == 'none'){
                span.style.display = 'block';

                e.target.innerHTML = "voir moins"
                
            }else{
                span.style.display = 'none';
                e.target.innerHTML.innerHTML = "voir plus"
            }
    })
}