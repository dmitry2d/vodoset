

import ru from './ru/';

const langs = {
    ru
}

export default function (text, lang, chapter) {
    

    if (!langs [lang]) {
        return text;
    }
    
    if (!chapter) {
        return langs [lang][text] || text;
    }
    
    return langs [lang][chapter]?.[text] || text;
        
}