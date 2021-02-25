import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddProduct from '../AddProduct/AddProduct'
import './AdminApp.scss'
import AdminHeader from './AdminHeader.js/AdminHeader'

function AdminApp() {

    const page = useParams()

    const getAdminPage = () => {
        switch (page.page) {
            case undefined:
                console.log("undefined");
                return (<AddProduct />)
                break;
            case 'add-product':
                console.log("add Product")
                break;
            case 'view-orders':
                console.log("View Orders")
                break;
        
            default:
                console.error("err")
                break;
        }
    }

    return (
        <div>
            <AdminHeader />
{getAdminPage()}
        </div>
    )
}

export default AdminApp
