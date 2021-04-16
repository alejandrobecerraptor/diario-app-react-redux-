import React from 'react'
import {Sidebar} from './Sidebar'
import {NothingSelected} from './NothingSelected'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            {/* <h1>JournalScreen</h1> */}

            <Sidebar />

            <main>
                <NothingSelected />
            </main>
        </div>
    )
}
