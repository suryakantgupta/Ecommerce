import React from 'react'
import {cn} from '@bem-react/classname'
import './AdminHeader.scss'

function AdminHeader() {

    const adminHeader = cn('adminHeader');

    return (
        <header
            className={adminHeader()}
            >
                <div
                    className={adminHeader('logo')}
                >
                    SuryaStoreAdmin
                </div>
                <div>
                    <nav>
                        <ul
                            className={adminHeader('navigation')}
                        >
                            <li
                            className={adminHeader('navLinks')}
                            >
Preview
                            </li>

                            <li
                            className={adminHeader('navLinks')}
                            >
Add-Products
                            </li>

                            <li
                            className={adminHeader('navLinks')}
                            >
View-Orders
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}

export default AdminHeader
