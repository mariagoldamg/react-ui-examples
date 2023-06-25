
//import { Accordion } from './Accordion/Accordion';
import { useEffect, useState } from 'react';
//import Tabs from './Tabs/Tabs';
import './App.css';
import LoaderPage from './Loader/LoaderPage';
//import Content from './Modal/Content';
//import Modal from './Modal/Modal';
//import TabInfoOne from './Tabs/TabInfoOne';
//import TabInfoTwo from './Tabs/TabInfoTwo';
//import TabInfoThree from './Tabs/TabInfoThree';
import Swal from 'sweetalert2';

function App() {

  //const [activeTab, setActiveTab] = useState(0);// for Tabs practice
  //const [isOpen, setIsOpen] = useState (false) // for modal practice
const [stateLoader, setStateLoader] = useState(true);

useEffect(()=>{
  const timer = setTimeout(()=>setStateLoader(false), 3000);
  return ()=>clearTimeout(timer)
}, [])


const handleAlert=()=>{
  //insert an example form sweetalert:

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  
}
  return (
    <div className="App">
 {/*<Accordion/>

 <Tabs setActiveTab = {setActiveTab}/>
{activeTab === 0 && <TabInfoOne/>}
{activeTab === 1 && <TabInfoTwo/>}
{activeTab === 2 && <TabInfoThree/>}
  */}

 {/* <button onClick={()=>setIsOpen(true)}>Open Modal</button>

{isOpen && <Modal setIsOpen={setIsOpen}>
<Content setIsOpen={setIsOpen}/>
</Modal>
}
*/}


{stateLoader && <LoaderPage/>}

<button onClick={handleAlert}>ALERT</button>

    </div>
  );
}

export default App;
