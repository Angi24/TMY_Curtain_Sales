import React from 'react';
import HeaderNav from '../../../components/HeaderNav';
import Swiper from '../../../components/Swiper'
import HomeProList from './HomeProList';
import Banner1 from '../../../assets/images/banner1.jpg';
import Banner2 from '../../../assets/images/banner2.jpg';
import Banner3 from '../../../assets/images/banner3.jpg';
import {useSelector} from 'react-redux';
import FooterNav from '../../../components/FooterNav';

const Home = () => {

    const city = useSelector(state => state.city)

    return (
        <div>
            <HeaderNav cityName={city.cityName} />
            <Swiper banners={[Banner1, Banner2, Banner3]} />
            <HomeProList cityName={city.cityName} />
            <FooterNav/>
        </div>
    )
}

export default Home