import React from 'react'
import {cn} from '@bem-react/classname'
import './Loader.scss'
import { CircularProgress } from '@material-ui/core'

function Loader() {

    const loader = cn('loader')

    return (
        <div
            className={loader()}
        >
            <CircularProgress />
        </div>
    )
}

export default Loader
