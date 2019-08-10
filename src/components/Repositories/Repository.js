import React from 'react';

import './Repositories.scss';

const Repository = ({ repo }) => (
    <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1" />
                <a href="/"><span>{repo.name}</span></a>
            </div>
            <span className="description">{repo.description}</span>
        </div>
        <div className="d-flex">
            <div className="subitem">
                <i className="fa fa-code pr-1" />
                <span>{repo.language}</span>
            </div>
            <div className="subitem">
                <i className="fa fa-star pr-1" />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="subitem">
                <i className="fa fa-exclamation pr-1" />
                <span>{repo.forks_count}</span>
            </div>
        </div>
    </div>
)

export default Repository