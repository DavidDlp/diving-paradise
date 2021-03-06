import { useState, useLayoutEffect  } from "react";

export default function WindowPosition (id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() =>{
        function updatePosition(){
            const offetSetHeight = window.document.getElementById(id).offsetHeight;
            // console.log("windowpageOffset", window.pageYOffset, offetSetHeight)
                if(window.pageYOffset > offetSetHeight * 0.7) {
                    setAnimation(true)
                }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition) 
    }, [id]);

    return animation
}
   
    

    

