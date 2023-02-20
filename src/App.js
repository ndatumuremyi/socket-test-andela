import {useData} from "./context/DataContext";
import {useEffect} from "react";

function App() {
    const {notifications} = useData();
    useEffect(() => {
        console.log(notifications)
    }, [notifications])
  return (
    <div className="px-10 flex flex-col">
        <h3 className="text-xl mb-10"> Notifications </h3>
        {
            notifications.map((each, index) => {
                return(<div className="flex">
                    <span>{index} . </span>
                    <div>
                        {JSON.stringify(each)}
                    </div>

                </div>)
            })
        }
    </div>
  );
}

export default App;
