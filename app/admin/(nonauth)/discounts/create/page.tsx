'use client'
import DiscountForm from '@/components/admin/DiscountForm';
import BreadCrumb from '@/components/admin/admin-layout/BreadCrumb';

export default function Create() {
    return (
        <>
         <BreadCrumb linkString='Discounts' linkOne='discounts' linkTwo='Discount'/>
        <DiscountForm/>
        </>
    );
}