import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Container from './Container'


const Result = (props) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [following, setFollowing] = useState('')
    const [followers, setFollowers] = useState('')
    const [reposQuantity, setQuantity] = useState('')
    const [url, setUrl] = useState('')
    const isFirstRun = useRef(true);


    const backtoback = () => {
        setLoading(false)
    }



    useEffect(() => {
        const dataFunction = () => {
            if (isFirstRun.current) {
                isFirstRun.current = false;
                return;
            }
            axios.get(`https://api.github.com/users/${props.inputValue}`)
                .then((data) => {

                    setUrl(data.data.html_url)
                    setName(data.data.name)
                    setUsername(data.data.login)
                    setAvatar(data.data.avatar_url)
                    if (data.data.followers >= 10000) {
                        setFollowers((data.data.followers / 1000).toFixed(1) + "k")
                    }
                    else { setFollowers(data.data.followers) }
                    setFollowing(data.data.following)
                    setQuantity(data.data.public_repos)
                    setError(false)
                    setLoading(true)

                },
                    (error) => {
                        setError(error)
                    })


        }
        dataFunction()
        setTimeout(backtoback, 1000)
    }, [props.inputValue, props.targetPage])


    return (<>

        {(loading === true) ? <div className="loader">Loading...</div> :
            (error) ? <div className="error">
                <img src="/images/user.png" alt='error'></img>
                <h3>User not found</h3>

            </div>


                :
                <Container
                    username={username}
                    avatar={avatar}
                    name={name}
                    followers={followers}
                    url={url}
                    following={following}
                    reposQuantity={reposQuantity}

                />

        }

    </>
    )
}

export default Result