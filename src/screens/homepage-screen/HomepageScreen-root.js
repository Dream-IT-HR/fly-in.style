import React, { useState } from 'react';
// import ResponsiveImage from '../../_shared components/ResponsiveImage';
// import backgroundImageLarge from '../../_images/landingpage-background-original.png';
// import backgroundImageSmall from '../../_images/landingpage-background-xs.png';

//const Header = lazy(() => import('../header/Header'));
// import Header from '../header/Header';
import useApiCall from '../../_custom hooks/useApiCall';
import valuesService from '../../services/valuesService';

const opt = {name: 'pero'};

function FHomepageRoot() {
    const [options, setSearchTerm] = useState(opt);
    const [error, loading, data] = useApiCall(valuesService.GetValuesAsync, options, 500);
    
    if (error) return <div> {error.message} </div>;
    if (loading) return <div>...loading</div>
    
    let values = '';
    if (data && data.length > 0) {
        values = data.join();
    }

    return (            
    
    <div className="homepage" >
        <input
            placeholder="Test debounce get values"
            onChange={e => setSearchTerm({name: e.target.value})}
        />     
            <div>{values}</div>
{/* 
            <div className="homepage-background">
                <Header/>
                <ResponsiveImage
                    desktopImage={backgroundImageLarge}
                    mobileImage={backgroundImageSmall}
                ></ResponsiveImage>
            </div>     */}

        </div>
    );
}

const HomepageRoot = React.memo(FHomepageRoot);

export default HomepageRoot ;