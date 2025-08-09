import { usePuterStore } from "lib/puter"
import { useEffect } from "react";
import { useNavigate } from "react-router";

const upload = () => {
  const {auth}=usePuterStore();
  const navigate = useNavigate()
  useEffect(()=>{
    if(!auth.isAuthenticated) navigate('/auth?next=/upload')
  },[auth.isAuthenticated])  
  return (
    <div>upload</div>
  )
}

export default upload