import React, { useState } from 'react';
import './style.less'
import DefaultImg from '../../../../assets/images/default.png';
import { loadImageAsync } from '../../../../utils/loadImg';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const data = props.data

    // Placeholder with default image, to avoid view clutter caused by slow image loading
    const [currentImg, setCurrentImg] = useState(DefaultImg)
    
    // After the image is loaded, save it in currentImg
    loadImageAsync(data.img).then(
        res => setCurrentImg(res)
    ).catch(
        error => console.log(error)
    )

    return (
        <div className="list=item">
            <Link to={`/details/${data.id}`}>
                {/* Render loaded image */}
                <img src={currentImg} alt="No image" />
                <div className="mask">
                    <div className="left">
                        <p>{data.title}</p>
                        <p>{data.type}</p>
                        <p dangerouslySetInnerHTML={{__html:data.description}}></p>
                        <b style={{ backgroundColor: data.specialPrice ? 'yellow' : 'none' }}>{`$ ${data.price}`}</b>
                        <p>{data.status}</p>
                        <p>{`${data.star} (${data.commentNum})`}</p>
                    </div>
                    {/* <div className="right">
                        <div className="btn">
                            {data.star}
                        </div>
                    </div> */}
                </div>
            </Link>
        </div>
    );
}

export default Item;
