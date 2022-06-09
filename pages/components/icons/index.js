import React from 'react'

function Compliance() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};


function Cover() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};
function External() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 17H8" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 13H8" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 9H9H8" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 2V8H20" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
};

export default { Cover, Compliance, External }