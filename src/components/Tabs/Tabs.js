import React from 'react'

import './Tabs.scss'

const Tabs = ({ repos, user }) => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <p className="nav-link mb-0 active">Repositories {repos.length}</p>
        </li>
        <li className="nav-item">
            <a className="nav-link mb-0" href={`https://github.com/orgs/${user.login}/packages`}>Packages</a>
        </li>
        <li className="nav-item">
            <a className="nav-link mb-0" href={`https://github.com/orgs/${user.login}/people`}>People</a>
        </li>
        <li className="nav-item">
            <a className="nav-link mb-0" href={`https://github.com/orgs/${user.login}/projects`}>Projects</a>
        </li>
    </ul>

)

export default Tabs