const HandleDB=(props)=>{
   
    if(localStorage.getItem('break-time')){
        const breakTime = localStorage.getItem('break-time')
        const breakTimeParsed = JSON.parse(breakTime)
        setToLocalStorage(breakTimeParsed,props)

    }
    else{
        const breakTime={}
        setToLocalStorage(breakTime,props)
    }
}

const setToLocalStorage =(props) =>{
    


}