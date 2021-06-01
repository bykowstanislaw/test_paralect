import React from 'react'

import ReposResult from '../repos/reposResult'
import './userspace.css'
import './mediaUser.css'


const Container = (props) => {

    const name = props.name
    const avatar = props.avatar
    const followers = props.followers
    const following = props.following
    const username = props.username



    return (
        <>
            {(!username) ? <div className="start">
                <img src="/images/image.png" alt='loopa' width="64px" height="64px"></img>
                <div className="start__text">Start with searching a github user</div>

            </div>


                : <div className="main"><div className='container'>
                    <div className="user">
                        {(avatar) ? <div className="user__photospace" ><img src={avatar} className="user__photo" alt='jesus' /></div>
                            : <div></div>
                        }
                        <div className="user__info"> <div className='user__name'>{name}</div>
                            <div className="user__username"><a href={props.url} target="_blank" rel="noreferrer" >{username}</a></div>
                            <div className="user__connections">
                                <div className="user__followers">
                                    <img src="/images/shared.png" alt='followers' className="follower__pic" />
                                    <div className="pl6">{followers} followers</div>
                                </div>
                                <div className='user__following'>
                                    <img src="/images/provate.png" alt='following' />
                                    <div className="pl6">{following} following</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='repos'>
                        <ReposResult username={username}
                            reposQuantity={props.reposQuantity}
                        />
                    </div>

                </div>
                </div>
            }
        </>)
}

export default Container