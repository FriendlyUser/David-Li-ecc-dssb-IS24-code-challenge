// simple table component
import React from 'react';

const DataTable = ({ data, isLoading, onEdit = () => {}, onDelete = () => {} }) => {

    // {
    //   "productId": 33,
    //   "productName": "Modern Bronze Pants",
    //   "productOwnerName": "Everett Altenwerth",
    //   "Developers": [
    //     "Jill Smith",
    //     "Jill Smith",
    //     "John Doe"
    //   ],
    //   "scrumMasterName": "Andres Bode",
    //   "startDate": "2022/11/28",
    //   "methodology": "Waterfall",
    //   "location": "https://github.com/bcgov/productMaria54"
    // },

    const renderHeader = () => {
        return (
            <tr class="bg-white border-b hover:bg-gray-50">
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Product Number
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> 
                    Product Name
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Scrum Master
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Product Owner
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Developers
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Start Date
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Methodology
                </th>
                <th class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Toolbar
                </th>
            </tr>
        )
    }
    const renderRow = (tableRow) => {
        const startDate = new Date(tableRow.startDate);
        const formattedDate = startDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return (
            <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tableRow.productId}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tableRow.productName}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tableRow.scrumMasterName}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tableRow.productOwnerName}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">
                    {tableRow.Developers.map((developer, index) => {
                        if (index === 0) {
                            return (
                                <div class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mt-3">{developer}</div>
                            );
                        } else if (index === 1) {
                            return (
                                <div class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mt-3">{developer}</div>
                            );
                        } else {
                            return (
                                <div class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 mt-3">{developer}</div>
                            );
                        }
                    })}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formattedDate}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tableRow.methodology}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex items-center gap-2 justify-center">
                        <a href={tableRow.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                        </a>
                        <span class="hover:cursor-pointer" onClick={onEdit(tableRow)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>
                        </span>
                        <span class="hover:cursor-pointer" onClick={onDelete(tableRow)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        </span>
                    </div>
                </td>
            </tr>
        );

    }
    return (
        <div class="mx-auto max-full px-6 lg:px-8 py-12 md:py-16 lg:py-16">
            <div class="border-gray rounded-md overflow-x-auto">
                <table class="border-transparent min-w-full border-separate border-spacing-0">
                    {renderHeader()}
                    {data && data.map((tableRow) => {
                        return renderRow(tableRow);
                    })}
                </table>
            </div>
        </div>
    );
}

export default DataTable;