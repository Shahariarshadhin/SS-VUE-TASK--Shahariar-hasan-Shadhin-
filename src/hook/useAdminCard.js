import { useEffect, useState } from "react"

const useAdminCard = () => {

    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('admin.json')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, []);
    return [admin, setAdmin];
}

export default useAdminCard;