import React from 'react';

import './Repositories.scss';
import Repository from './Repository';

const Repositories = ({ repos }) => (
    <section className="repositories">
        {repos.map((repo) => (
            <Repository key={repo.id} repo={repo}/>
        ))}
    </section>
)

export default Repositories