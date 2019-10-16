import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart'

const useTranslationDefault = true;
export function createDropDownListItem(value, translateLabel, useTranslation = useTranslationDefault) {
    return {
        value,
        translateLabel,
        useTranslation
    }
}

function FDropDownList(props) {
    let {name, items} = props;

    let dropDownItems = items.map(function(item){
        let translatedLabel = item.translateLabel;

        if (item.useTranslation) {
            translatedLabel = counterpart.translate(item.translateLabel);
        }
        
        return (
            <option key={item.value} value={item.value}>
                {translatedLabel}
            </option>
        );
    })
    return (
    <div className="flydropdownlist">
        <select name={name}>
            {
                dropDownItems
            }
        </select>
    </div>
  );
}

const DropDownList = React.memo(FDropDownList);

export default DropDownList;

DropDownList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            translateLabel: PropTypes.string.isRequired,
            useTranslation: PropTypes.bool
        })).isRequired,
    
    name: PropTypes.string.isRequired,
};