import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className='lft'>
                <button id="btn_close">+</button>
                <span>IC Today, 31st Jan 2025</span>
            </div>
            <div className='rit'>
                <div>Welcome to Rajasekhar Raju S</div>
                <div>N-IC</div>
                <button>Logout</button>
            </div>
        </header>
    )
}
