import React, {useEffect, useState} from 'react';
import Post from "./Post";
import axios, {Axios} from "axios";

const Posts = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getPosts = ()=> {
        return axios.get("https://jsonplaceholder.typicode.com/photos")
    }

    useEffect(() => {
        getPosts()
            .then(
                (res) => {
                    console.log(res)
                    setPosts(res.data.slice(0,10))
            })
            .catch((e)=>{
                console.log(e)
            })
            .finally(() => [
                setLoading(false)
            ])
    }, [])
    return (
        <div>
            <Post/>
        </div>
    );
};

export default Posts;
