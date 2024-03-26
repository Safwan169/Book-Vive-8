import toast, { Toaster } from 'react-hot-toast';


const Local = () => {
    const data=localStorage.getItem('datas')
    console.log(data)
   if(data){
    return(JSON.parse(data))

   }
   return []
};
const Lol=(idt)=>{
    let get=Local();
    const exists=get.find(get=>get===idt)
    if (!exists) {
       toast.success('Successfully Add for read');
        
        get.push(idt)
        localStorage.setItem('datas',JSON.stringify(get))

    }
   else( toast.error("You are already added"))
    // return console.log('thik nsi')
}


export  {Local,Lol};