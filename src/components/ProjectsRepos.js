import React, { useEffect, useState } from 'react'

const ProjectRepos = ({ repo }) => {
    console.log(repo);

    const [Repos, setRepos] = useState([]);
    const [SortSelect, SetSortSelect] = useState("");
    useEffect(() => {
        setRepos(repo)
    })

    console.log(SortSelect);
    return (
        <div>
            <div className="sort-container">
                <span className="headline">Top repositories by: </span>
                <select id="sortOption" onChange={e => SetSortSelect(e.target.value)}>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="size">Size</option>
                </select>
            </div>

            {repo.map((rep) => {
                return <div className="repoCard">

                    <div className="card" >
                        <div className="card-body">
                            <div className="card-title">{rep.name}</div>
                            {
                                rep.description == null
                                    ? <div className="card-description">No Description</div>
                                    : <div className="card-description">{rep.description}</div>
                            }
                            <div className="card-subHeading"> <span>{
                                rep.language
                            }</span>
                                <span> <i className="fa-solid fa-code-fork"></i> {
                                    rep.forks
                                }</span>
                                <span> <i className="fa-solid fa-star"></i> {
                                    rep.stargazers_count
                                }</span>
                                <span>{rep.size} Kb</span>
                            </div>
                            <div className="card-text">
                                <button>
                                    <a target="_blank" href={
                                        rep.html_url
                                    }>
                                        Do checkout Project
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div >
    )
}
export default ProjectRepos;
