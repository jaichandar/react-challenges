import { useMemo, useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import { users } from './data.json';
import './ems.css';

const Ems = () => {
    const [data, setData] = useState(users);
    const [selectedUser, setSelectedUser] = useState<null | number>(null);
    const [search, setSearch] = useState('');
    const selectedUserDetails = useMemo(() => {
        if (selectedUser) {
            const user = users.find((val) => val.id === selectedUser);
            return user;
        } else {
            return null;
        }
    }, [selectedUser]);

    const handleDelete = (id: number) => {
        const modifiedUser = data.filter((val) => val.id !== id);
        setData(modifiedUser);
    }

    const handleSearch = (e: any) => {
        const value = e.target.value;
        const filteredResult = users.filter((val) => val.firstName.toLowerCase().includes(value.toLowerCase()) || val.lastName.toLowerCase().includes(value.toLowerCase()));
        setData(filteredResult);
        setSearch(value);
    }

    const hideCardNumber = (cardNumber: string): string => {
        console.log(cardNumber.length, "<-- cardNumber")

        let card = '';
        for (let i = 0; i < 10; i++) {
            card += cardNumber[i]
        }

        for (let i = card.length; i < cardNumber.length; i++) {
            card += 'X';
        }
        return card;
    }

    return (
        <div className='container' style={{ border: '1px solid red' }}>
            <p className='my-2 text-center'>EMS</p>
            <div className='container'>
                <input 
                    className='input'
                    onChange={handleSearch}
                    value={search}
                    placeholder='Search User...'
                />
                <button onClick={() => setSelectedUser(null)}>Clear</button>
                <div className='row'>
                    <div className='col-4 p-2 border items-wrapper'>
                        {
                            data.map((val) => (
                                <div className={`d-flex justify-content-between align-items-center p-2 item ${selectedUser === val.id ? 'selected' : ''} `} onClick={() => setSelectedUser(val.id)}>
                                    <p className='mb-0'>{val.firstName} {val.lastName}</p>
                                    <div onClick={() => handleDelete(val.id)} className='pointer'>
                                        <IoMdClose />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-8 p-2 content-wrapper'>
                        <div className='details-wrapper'>
                            {
                                selectedUserDetails && (
                                    <div>
                                        <div className='header-wrapper'>
                                            <p className='mb-0 bold'>Employee: {selectedUserDetails.firstName} {selectedUserDetails.lastName}</p>
                                            <div className='image-wrapper'>
                                                <img src={selectedUserDetails.image} className='image'/>
                                            </div>
                                        </div>
                                        <div className='body-wrapper'>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-3 border p-1 d-flex justify-content-between'>
                                                        <p className='mb-0 bold'>DOB: </p>
                                                        <p className='mb-0'>{selectedUserDetails.birthDate}</p>
                                                    </div>
                                                    <div className='col-3 border p-1 d-flex justify-content-between'>
                                                        <p className='mb-0 bold'>Blood Group: </p>
                                                        <p className='mb-0'>{selectedUserDetails.bloodGroup}</p>
                                                    </div>
                                                    <div className='col-3 border p-1 d-flex justify-content-between'>
                                                        <p className='mb-0 bold'>Gender: </p>
                                                        <p className='mb-0'>{selectedUserDetails.gender}</p>
                                                    </div>
                                                    <div className='col-3 border p-1 d-flex justify-content-between'>
                                                        <p className='mb-0 bold'>Ip: </p>
                                                        <p className='mb-0'>{selectedUserDetails.ip}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='container my-2'>
                                                <div className='row'>
                                                    <div className='col-6 border p-2'>
                                                        <p className='mb-0 bold'>Email: </p>
                                                        <p className='mb-0'>{selectedUserDetails.email}</p>
                                                    </div>
                                                    <div className='col-6 border p-2'>
                                                        <p className='mb-0 bold'>Phone: </p>
                                                        <p className='mb-0'>{selectedUserDetails.phone}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='container my-2'>
                                                <div className='row'>
                                                    <div className='col-6 border p-2'>
                                                        <p className='mb-0 bold'>Card Number: </p>
                                                        <p className='mb-0'>{hideCardNumber(selectedUserDetails.bank.cardNumber)}</p>
                                                    </div>
                                                    <div className='col-6 border p-2'>
                                                        <p className='mb-0 bold'>Expire: </p>
                                                        <p className='mb-0'>{selectedUserDetails.bank.cardExpire}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='container my-2'>
                                                <div className='row'>
                                                    <div className='col-12 border p-2'>
                                                        <p className='mb-0 bold'>Crypto: </p>
                                                        <p className='mb-0'>{JSON.stringify(selectedUserDetails.crypto)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='container my-2'>
                                                <div className='row'>
                                                    <div className='col-12 border p-2'>
                                                        <p className='mb-0 bold'>Address: </p>
                                                        <p className='mb-0'>{JSON.stringify(selectedUserDetails.address)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ems;