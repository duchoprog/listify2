import { useEffect, useRef, useState } from "react";

export const useFetch = (url, obj) => {
    const [state, setState] = useState({data:null, loading:true, error:null});
    const isMounted = useRef(true);

    useEffect(() => {

    return () => {
        isMounted.current=false
    };
    }, []);

    useEffect(() => {
      fetch (url, obj)
        .then(resp=>resp.json())
        .then(
            data=>{
                setState({
                    data,
                    loading:false,
                    error:null
                })
            }
        )
    
    
    }, []);
    
    return state

};
