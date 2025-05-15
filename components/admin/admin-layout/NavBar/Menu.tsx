import React from 'react';
import { useRouter } from 'next/navigation'
import { menus } from '@/libs/shared/constants';
import MenuItem from '@/components/ui/MenuItem';

const Menu = ({ type }: {
    type: string
}) => {
    return (
        <>
            {menus.map((item, index) => (
                <MenuItem type={type} link={item.link} label={item.label} />
            ))}
        </>
    );
};

export default Menu;