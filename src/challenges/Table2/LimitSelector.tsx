type LimitSelectorProps = {
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const LimitSelector = (props: LimitSelectorProps) => {
    const { limit, setLimit } = props;

    const handleOnChange = (e: any) => {
        const value = e.target.value;
        setLimit(value);
    }

    return (
        <div className="select-wrapper">
            <select value={limit} onChange={handleOnChange}>
                <option value={10}>10</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    )
}

export default LimitSelector;