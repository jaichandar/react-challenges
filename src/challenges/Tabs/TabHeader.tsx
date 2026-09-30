const TabHeader = (props: { tab: string, setTab: React.Dispatch<React.SetStateAction<string>> }) => {
    const { tab, setTab } = props;

    return (
        <div style={{ width: '250px', display: 'flex' }}>
            <p className="mb-0" style={ tab === 'tab1' ? { background: 'red', color: 'black' } : {}} onClick={() => setTab('tab1')}>Tab-1</p>
            <p className="mb-0" style={ tab === 'tab2' ? { background: 'red', color: 'black' } : {}} onClick={() => setTab('tab2')}>Tab-2</p>
            <p className="mb-0" style={ tab === 'tab3' ? { background: 'red', color: 'black' } : {}} onClick={() => setTab('tab3')}>Tab-3</p>
        </div>
    )
}

export default TabHeader;