import React, { useGlobal, setGlobal } from 'reactn';

import Button,  { ButtonVariants, ButtonSizes } from '../../../_shared/components/Button/Button-component';
import arrowLeft from '../../../_images/icons/arrow_left.svg';
import arrowRight from '../../../_images/icons/arrow_right.svg';

import locations from '../mocks/locations';

const Place = React.memo(() => {
    const [ location ] = useGlobal('map');

    const selectedLocation = location ? location.activeLocation : locations[0];

    const {
        title,
        waiting,
        address,
    } = selectedLocation;

    const nextLocation = () => {
        let index = locations.indexOf(selectedLocation);
        if (index === locations.length - 1) {
            setGlobal({
                map: {
                    activeLocation: locations[0],
                },
            });
          } else {
            setGlobal({
                map: {
                    activeLocation: locations[index + 1],
                },
            });
          }
    };

    const previousLocation = () => {
        let index = locations.indexOf(selectedLocation);
        if (index === 0) {
            setGlobal({
                map: {
                    activeLocation: locations[locations.length - 1],
                },
            });
        } else {
            setGlobal({
                map: {
                    activeLocation: locations[index - 1],
                },
            });
        }
    };

    return (
        <div className="place">
            <div className="place__title">{title}</div>
            <div className="place__subtitle">Before you: <span>{waiting}</span></div>
            <div className="place__action">
                <Button variant={ButtonVariants.primary} size={ButtonSizes.normal}>
                    Fly in
                </Button>
            </div>
            <div className="place__address">{address}</div>
            <div className="place__arrow place__arrow--left">
                <img src={arrowLeft} alt="arrow" onClick={previousLocation} />
            </div>
            <div className="place__arrow place__arrow--right">
                <img src={arrowRight} alt="arrow" onClick={nextLocation} />
            </div>
        </div>
    );
});

export default Place;