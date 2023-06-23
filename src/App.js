
//import { Accordion } from './Accordion/Accordion';
import { useState } from 'react';
//import Tabs from './Tabs/Tabs';
import './App.css';
import Content from './Modal/Content';
import Modal from './Modal/Modal';
//import TabInfoOne from './Tabs/TabInfoOne';
//import TabInfoTwo from './Tabs/TabInfoTwo';
//import TabInfoThree from './Tabs/TabInfoThree';

function App() {

  //const [activeTab, setActiveTab] = useState(0);// for Tabs practice
  const [isOpen, setIsOpen] = useState (false) // for modal practice

  return (
    <div className="App">
 {/*<Accordion/>

 <Tabs setActiveTab = {setActiveTab}/>
{activeTab === 0 && <TabInfoOne/>}
{activeTab === 1 && <TabInfoTwo/>}
{activeTab === 2 && <TabInfoThree/>}
  */}

  <button onClick={()=>setIsOpen(true)}>Open Modal</button>

{isOpen && <Modal setIsOpen={setIsOpen}>
<Content setIsOpen={setIsOpen}/>
</Modal>
}


    </div>
  );
}

export default App;
