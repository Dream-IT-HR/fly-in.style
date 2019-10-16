import { useState, useEffect } from 'react';
import counterpart from 'counterpart'

const useLocale = () => {
    const [locale, setLocale] = useState(counterpart.getLocale());

    useEffect(()=>
    {
        const handleLocaleChange = (newLocale) => {
            setLocale(newLocale);
        };

        counterpart.onLocaleChange(handleLocaleChange)
        
        const cleanup = () => {
            counterpart.offLocaleChange(handleLocaleChange);
        };

        return cleanup;
    }, []);

    return locale;
};

export default useLocale;