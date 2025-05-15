'use client'
import BulkForm from '@/components/admin/BulkForm';
import NoItems from '@/components/admin/NoItems';
import BreadCrumb from '@/components/admin/admin-layout/BreadCrumb';
import Link from 'next/link';

export default function Order() {
    return (
        <div className="w-full bg-gray-100">
            <BreadCrumb linkString='Items' linkOne='manage-items' linkTwo='Create Items in Bulk' />
            <BulkForm/>
        </div>
    )
}