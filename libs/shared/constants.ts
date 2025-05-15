export const menus = [
    { label: "Orders", link: "/admin/orders" },
    { label: "Manage Items", link: "/admin/manage-items" },
    { label: "Discounts", link: "/admin/discounts" },
    { label: "Reporting", link: "/admin/reporting" },
    { label: "Settings", link: "/admin/settings" },
    { label: "Logout", link: "javascript:;" },
];

export const orderFilters = [
    { label: "Pending", id: "pending", value: "" },
    { label: "Confirmed", id: "confirmed", value: "" },
    { label: "Delivered", id: "delivered", value: "" },
    { label: "Cancelled", id: "cancelled", value: "" }
];

export const sorts = [
    { label: "Name", value: "" },
    { label: "Price: Low to High", value: "" },
    { label: "Price: High to Low", value: "" },
    { label: "Date", value: "" }
];

export const itemFilters =
{
    available: [
        { label: "In Stock", id: "in-stock", value: "" },
        { label: "Out of Stock", id: "out-stock", value: "" }
    ],
    category: [
        { label: "Fruits", id: "fruits", value: "" },
        { label: "Vegetables", id: "vegetable", value: "" }
    ]
};