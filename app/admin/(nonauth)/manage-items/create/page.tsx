'use client'
import ItemForm from '@/components/admin/ItemForm';
import BreadCrumb from '@/components/admin/admin-layout/BreadCrumb';

export default function Create() {
    return (
        <>
         <BreadCrumb linkString='Items' linkOne='manage-items' linkTwo='Item'/>
        <ItemForm/>
        </>
    );
}