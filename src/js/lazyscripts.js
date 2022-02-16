function addScript(path ,stimeout){  
    if(localStorage.getItem(path)) {
      stimeout=1; 
    }  
    const someJs = document.createElement('script'); 
    someJs.async=true;
    someJs.src=path;  
    setTimeout(() => {
      body.appendChild(someJs);   
    localStorage.setItem(path , true);
  }, stimeout);     
      return ( 
          someJs 
      ) 
}   


    window.addEventListener('load', function(){
        const mediaQuery2 = window.matchMedia('(max-width:768px)').matches;
        let demoLoadingDelay=1;
        const delay = document.querySelector('.demo-delay_js');
        console.log(delay)
        if(delay){
            const addTime= parseInt(delay.dataset.time);
            if(addTime>0){
                demoLoadingDelay=1+ addTime/5;
                if (mediaQuery2) {
                    demoLoadingDelay =addTime;
                }
                addScript('https://assets.calendly.com/assets/external/widget.js' , demoLoadingDelay)

                //demo loading only if   delay datatime > 0
            }
        }
    })


