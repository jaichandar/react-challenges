import './index.css';

const Product = (props: any) => {
    const { values } = props;

    return (
        <div className='product-wrap'>
            <div className='title-wrap'>
                <div className='image-wrapper'>
                    <img src={values.images[0]} className='img'/>
                </div>
                <p>{values.title}</p>
            </div>
            <p>Price: {values.price}</p>
        </div>
    )
}

export default Product;