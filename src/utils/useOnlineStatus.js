import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() =>{
        window.addEventListener("offline", (event) => {
            console.log("You are not connected to the network.");
            setOnlineStatus(false);
          });

          window.addEventListener("online", (event) => {
            console.log("You are now connected to the network.");
            setOnlineStatus(true);
          });
          
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;