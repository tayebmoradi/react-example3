import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useArticlesData from "../../hooks/useArticlesData";
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import Create from './Create';
import { useContext, useEffect, useState } from 'react';
import { addArticleContext } from "../../context/addArticleContext"
import axios from 'axios';
import Edit from './Edit';

function Index()
{
    // const [articles, loading, error] = useArticlesData();

    const [articles , setArticles] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const url = new URL('https://65f2e496105614e6549f327c.mockapi.io/article/');
    
    useEffect(() => {
      const fetchData = async ()=>{
          setLoading(true);
          let urlGetArticle = url;
          urlGetArticle.searchParams.append('sortBy', 'id');
          urlGetArticle.searchParams.append('order', 'desc');
          try {
              let res = await axios.get(urlGetArticle)
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

    if (error) toast.error(error)
    
    const handelAdd = async (title)=>
    {
      try {
        const response = await axios.post(url, title)
        let data = await response.data
        setArticles([...articles, data])
      } catch (error) {
        toast.error('Error adding data: ', error);
      } 
    }

    const handelEdit = async (title)=>
    {
      console.log('Edit Test')
    }

    const handleDelete = async (idArticle) => {
      try {
        const response = await axios.delete(url+idArticle);
        let data = await response.data
          if(response.statusText === "OK"){
            let data = articles.filter((item) => {
              return idArticle != item.id 
            })
            setArticles(data)
            toast.success("Success Delete Article")
            
          }else{
            console.log(response.statusText)
            toast.error(response.statusText)
          }
      } catch (error) {
        toast.error(error)
      }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-bold leading-6 text-gray-900">
                Manage Articles
              </h1>
              <p className="mt-2 text-sm text-gray-700">
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
             
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10">
                    {/* <addArticleContext.Provider value={handelAdd}> */}
                      <Create className="mt-10" handelAdd={handelAdd} />
                    {/* </addArticleContext.Provider> */}
                    
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 table-auto">
                    <thead className="bg-gray-50">
                      <tr className="">
                        <th scope="col" className="py-3.5 pl-4 w-3/5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          title 
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          datetime
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        operation
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 justify-self-start">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {
                      articles.length != 0 ?
                      articles.map((article) => (
                        <tr key={article.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {article.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {article.createdAt}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-xs  sm:pr-6">
                            <a href="#" className="flex text-indigo-600 hover:text-indigo-900">
                              <Edit handelEdit={handelEdit} />
                              <TrashIcon onClick={() => {handleDelete(article.id)}} className='h-6 w-6 shrink-0 text-rose-600'/>
                            </a>
                          </td>
                        </tr>
                      ))
                    :
                    <tr >
                          <td colSpan={3} className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                            <span>There is not data available</span>
                          </td>
                    </tr>
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}


export default Index;