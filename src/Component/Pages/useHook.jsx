import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useHook = () => {
const {user} = useContext(AuthContext);
const {data, isPending, refetch} = useQuery({
    queryKey:['borrowBooks'],
    queryFn:async()=>{
        const data = await fetch(`https://cd-library-management-system.web.app/borrowBooks/?email=${user.email}`);
        return await data.json();
    }
})
return [data, isPending, refetch]
};

export default useHook;