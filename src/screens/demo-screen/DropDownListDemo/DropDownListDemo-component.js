import React from 'react';
import DropDownList, {createDropDownListItem} from '../../../_shared/components/DropDownList/DropDownList-component';

const FDropDownList = (props) => {
    let dropDownItems = [
        createDropDownListItem('pero', 'global.productName'),
        createDropDownListItem('franjo', 'homepage.title'),
        createDropDownListItem('ivica', 'ivica not translated', false)
    ];

    return (
        <div className="flydemo-dropdownlist">
            <DropDownList name="myDemoDropDown" items={dropDownItems}/>
        </div>
    );
}

const DropDownListDemo = React.memo(FDropDownList);

export default DropDownListDemo;