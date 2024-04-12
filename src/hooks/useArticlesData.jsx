import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useArticlesData() {

    const [articles , setArticles] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            // https://65f2e496105614e6549f327c.mockapi.io/article
            try {
                let res = await axios.get('https://65f294dd034bdbecc76532b2.mockapi.io/posts')
                let data = await res.data
                if(res.statusText === "OK"){
                    setArticles(data)
                }else{
                    setError(res.statusText);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])

  return [articles, loading, error];
}
