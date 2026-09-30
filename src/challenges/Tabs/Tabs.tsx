import { useState } from "react";
import TabHeader from "./TabHeader";
import TabBody from "./TabBody";

const Tabs = () => {
    const [tab, setTab] = useState('tab1');
    
    return (
        <div>
            <TabHeader tab={tab} setTab={setTab} />
            <TabBody tab={tab} />
        </div>
    )
}

export default Tabs;