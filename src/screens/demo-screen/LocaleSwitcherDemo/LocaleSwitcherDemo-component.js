import React from 'react';
import LocaleSwitcher from '../../../_shared/components/LocaleSwitcher/LocaleSwitcher-component';

const FLocaleSwitcher = (props) => {
    return (
        <div className="flydemo-localeswitcher">
            <LocaleSwitcher/>
        </div>
    );
}

const LocaleSwitcherDemo = React.memo(FLocaleSwitcher);

export default LocaleSwitcherDemo;
