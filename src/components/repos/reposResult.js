import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './repos.css'
import Pagination from '../pagination/pagination';
import './mediaRepos.css'


const ReposResult = (props) => {

    const username = props.username
    const [reposData, setData] = useState([])
    const [targetPage, setTargetPage] = useState(1)
    const reposQuantity = props.reposQuantity



    const prevpage = () => {
        if (targetPage === 1) {
            setTargetPage(1)
        }

        else setTargetPage(targetPage - 1)
    }
    const nextpage = () => {
        if (targetPage >= reposQuantity / 4) {
            setTargetPage(1)
        }
        else setTargetPage(targetPage + 1)
    }
    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}/repos?per_page=4&page=${targetPage}`)
            .then((data) => {
                setData(data.data.map((el) => {
                    return el
                }))

            })
    }, [username, targetPage])

    useEffect(() => {
        setTargetPage(1)
    }, [username])

    return (


        <div className="app">
            {(reposQuantity) ?
                <div className='repos'>
                    {(reposQuantity) ? <div className="repos__tittle">Repositories ({reposQuantity})</div> : <></>}
                    {reposData.map((el, i) => {
                        return (
                            <div className='repos__block' key={i}>
                                <div className="block__tittle"><a href={el.html_url} target="_blank" rel="noreferrer" >{el.name}</a></div>
                                <div className="block__descr">{el.description}</div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className='repos__empty'><img src="/images/empty.png" alt="pusto"></img></div>}
            {(reposQuantity) ?
                <div className="pag">
                    {targetPage * 4 > reposQuantity ? <div className='pagination__info'>{((targetPage * 4) - 3)}-{reposQuantity} of {reposQuantity} items</div>
                        : <div className='pagination__info'>{((targetPage * 4) - 3)}-{targetPage * 4} of {reposQuantity} items</div>}
                    <div className="pagin"><Pagination reposQuantity={reposQuantity}
                        setTargetPage={setTargetPage}
                        targetPage={targetPage}
                        prevpage={prevpage}
                        nextpage={nextpage} /></div>
                </div>
                :
                <div></div>}


        </div>)
}

export default ReposResult