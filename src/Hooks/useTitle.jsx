import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Animagic | ${title}`
    },[title])
}

export default useTitle;