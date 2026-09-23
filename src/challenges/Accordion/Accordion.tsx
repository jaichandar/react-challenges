import { useState, useEffect, useCallback } from 'react';
import Component from './Component';
import './accordion.css';

export type accordianData = {
    id: string,
    title: string,
    message: string,
    open: boolean,
}

const Accordion = () => {   

    const [data, setData] = useState<accordianData[]>([]);
    const [loading, setLoading] = useState(false);

    const AccordionData = [
        {
            id: crypto.randomUUID(),
            title: 'Accordion 1',
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`,
            open: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'Accordion 2',
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`,
            open: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'Accordion 3',
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`,
            open: false
        }
    ]

    const fetchData = (): Promise<accordianData[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(AccordionData);
            }, 1000);
        })
    }

    useEffect(() => {
        if (!data.length) {
            setLoading(true);
            fetchData().then((data: accordianData[]) => {
                setData(data);
            }).finally(() => {
                setLoading(false)
            })
        }
    }, []);

    const handleOpen = useCallback((id: string) => {
        setData((prev) => (
            prev.map((val) => {
                if(val.id === id) {
                    return {
                        ...val,
                        open: !val.open
                    }
                } else return val;
            })
        ))
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='wrapper'>
            <p className='title'>Accordion</p>
            {
                data.map((val) => (
                    <Component 
                        key={val.id}
                        id={val.id}
                        title={val.title}
                        message={val.message}
                        open={val.open}
                        handleOpen={handleOpen}
                    />
                ))
            }
        </div>
    )
}

export default Accordion;