import React, { useState } from 'react';
import DetailsHeader from '../../../components/PubHeader';
import Swiper from '../../../components/Swiper';
import './style.less'
import BuyAndFav from '../BuyAndFav';
import Tabs from '../../../components/Tabs';
import Reviews from '../Reviews';

const DetailsView = (props) => {

    let detailsData = props
    const [prodesc, setProdesc] = useState(false)
    
    const handleOnClick = () => {
        setProdesc(!prodesc)
    }
    
    return (
        <div className="detail-page">
            <DetailsHeader title={'Details Page'} />
            <div className="detail-info">
                <div className="left">
                    <Swiper banners={detailsData.imgs} />
                    <Tabs>
                        <div label='Details'>
                            <p>{detailsData.summary}</p>
                            <div className="id">
                                <h2>ID:</h2>
                                <h3>{detailsData.itemId}</h3>
                            </div>
                            <hr />
                            <h1 onClick={handleOnClick} children='Product details >'></h1>
                            <div style={{ display: prodesc ? 'block' : 'none' }}>
                                <h2>Description</h2>
                                <p>{detailsData.prodetails.description}</p>
                                <h2>Designer</h2>
                                <p>{detailsData.prodetails.designer}</p>
                                <h2>Material</h2>
                                <p>{detailsData.prodetails.material}</p>
                                <h2>Care</h2>
                                <p>{detailsData.prodetails.care}</p>
                            </div>
                            <hr />
                        </div>
                        <div label='Review'>
                            <Reviews itemId={detailsData.itemId} />
                        </div>
                    </Tabs>
                </div>
                <div className="right">
                    <h3>{detailsData.info.title}</h3>
                    <ul>
                        <li>{detailsData.info.type}</li>
                        <li>{detailsData.info.description}</li>
                        <b style={{ backgroundColor: detailsData.info.specialPrice ? 'yellow' : 'none' }}>{`$ ${detailsData.info.price}`}</b>
                        <li>{`${detailsData.info.star} (${detailsData.info.commentNum})`}</li>
                    </ul>
                </div>
            </div>
            <BuyAndFav itemId={detailsData.itemId} />
        </div>
    );
}

export default DetailsView;
