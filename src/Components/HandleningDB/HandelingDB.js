const HandleDB=(props)=>{
   
    if(localStorage.getItem('break-time'))
    {
        let time = localStorage.getItem('break-time')
        time = props;
        localStorage.setItem('break-time',time)
    }
    else{
        localStorage.setItem('break-time',props)
    }

}


const getValueFromLocalStorage = () =>{
    const time = localStorage.getItem('break-time')
    return time
  
}


export {HandleDB, getValueFromLocalStorage}