

const TabItem = ({tab,index,setActiveTab})=>{

    return(
        <div>
            <button className="btn_tabs" value={index} onClick = {()=>setActiveTab(index)}>
                {tab}
            </button>
        </div>
    )
}

export default TabItem;