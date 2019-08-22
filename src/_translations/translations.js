import counterpart from 'counterpart';
import translationsEn from './en/translations-en';
import translationsHr from './hr/translations-hr';

counterpart.registerTranslations('en', translationsEn);
counterpart.registerTranslations('hr', translationsHr);

counterpart.setLocale('en');