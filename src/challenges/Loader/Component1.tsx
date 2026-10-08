import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Component1 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, []);

    return (
        <div className='child'>
                {
                    loading ? (
                        <RotatingLines 
                            height={50}
                            width={50}
                        />
                    ) : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus minus similique atque voluptatem, quam minima enim dicta quas deleniti. Voluptatum rerum omnis, reiciendis, iusto eius vel quae beatae a numquam delectus, neque ipsa commodi at ex! Quidem eveniet distinctio libero! Officia deserunt enim fugit rerum, labore porro ex hic eligendi ducimus vel numquam iure laborum. Repudiandae, ab architecto, fugit distinctio accusamus accusantium quaerat ipsum hic similique laboriosam quis, corrupti molestiae deserunt dignissimos harum enim! Facere, provident, explicabo incidunt, quaerat deleniti dolor labore consectetur porro libero blanditiis nulla reprehenderit sunt quis voluptates ex quae sequi. Distinctio veritatis quibusdam aliquam commodi, rerum quidem quod dolorem quasi quaerat saepe! Rem ab nulla et illo ratione explicabo at, corrupti eius sequi maxime nisi ducimus alias ea fugiat officia eos ipsum exercitationem aspernatur eligendi similique est. Repellendus est ea doloribus iste nisi, laborum repellat consectetur molestiae? Unde iusto laborum ipsum repudiandae minus dignissimos ipsam odit fuga neque ullam repellendus ea nobis commodi omnis officia enim soluta inventore, blanditiis quia quam. Quo et, consequatur dolor odio assumenda accusamus vitae facilis. Dolore, quibusdam non! Omnis nihil sapiente inventore. Explicabo quasi voluptates dolorum alias adipisci corrupti veniam fuga recusandae inventore! Sequi provident numquam eum vitae debitis ea.</p>
                }
            </div>
    )
}

export default Component1;