import React from 'react'

const ShowProfile = ({ userData }) => {
    const { avatar_url, name, login, followers, following, html_url, bio } = userData;
    return (
        <div>
            <div class="card">
                <div class="card-img">
                    <img src={avatar_url} alt={name} />
                </div>
                <div class="card-body">
                    <div class="card-title">{name}</div>
                    <div class="card-subHeading">{login}</div>
                    <div class="card-text">
                        <p>{bio}</p>
                        <p class="follow-section">{followers} followers {following} following</p>
                        <button>
                            <a target="_blank" href={html_url}>
                                Do checkout Profile
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProfile
