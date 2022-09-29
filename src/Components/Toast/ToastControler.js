function toastHandle (){
    const toast = document.getElementById('toast')
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", "hidden"); }, 3000);
}
export {toastHandle}