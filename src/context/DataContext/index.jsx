import {useEffect, useState, useContext, createContext, useMemo} from "react";
import io from "socket.io-client";
const BACKEND_URL = 'http://localhost:5000'
export const useData = () => {
    return useContext(DataContext);
};
export const defaultValue = {
    notifications: [],
    socket:undefined,
};
export const DataContext = createContext(defaultValue);

const DataProvider = ({children}) =>{
    // @ts-ignore
    const [socket] = useState(io(BACKEND_URL));
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        socket.on("connection", () => console.log("connected"));
        socket.on("disconnect", () => console.log("disconnected"));
        socket.on('notification', (data) => {
            console.log("soketttt----::: ",data);
            setNotifications(i => [...i, data])
        });


    },[socket])




    const value = useMemo(()=>{
        return {
            notifications, socket,
        }
    }, [notifications, socket])

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider