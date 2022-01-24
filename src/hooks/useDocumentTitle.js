import {useEffect} from 'react';

function useDocumentTitle(count) {
 
    useEffect(()=>{
        window.document.title=`tytul strony ${count}`
    },[count])
}

export default useDocumentTitle;
