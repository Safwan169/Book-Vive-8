import toast, { Toaster } from 'react-hot-toast';
// import Wishlist from './Wishlist';
// import Wishlist1 from './Wishlist1';


const Local = () => {
    const data=localStorage.getItem('datas')
    // console.log(data)
   if(data){
    return(JSON.parse(data))

   }
   return []
};

const Local1 = () => {
    const data=localStorage.getItem('data')
    // console.log(data)
   if(data){
    return(JSON.parse(data))

   }
   return []
};
const Lol=(idt,sf)=>{
    let get=Local();
    let get1=Local1();
    const exists=get.find(get=>get===idt)
    const exists1=get1.find(get1=>get1===idt)
    if (!exists&& sf==='sf'&& exists1!==idt) {
        toast.success('Successfully Add for Wishlist');
         
         get.push(idt)
         localStorage.setItem('datas',JSON.stringify(get))}
         
 //    else( toast.error("You are already  read"))
 
 
    // Wishlist(exists,sf,exists1)
    //    else( toast.error("You are already  read"))
// Wishlist1(exists1,sf)
else if (!exists1&& sf==='sf1') {
    toast.success('Successfully Add for read');
     
     get1.push(idt)
     localStorage.setItem('data',JSON.stringify(get1))
     

 }

else( toast.error("You are already added"))
    // return console.log('thik nsi')
}


export  {Local,Local1,Lol};