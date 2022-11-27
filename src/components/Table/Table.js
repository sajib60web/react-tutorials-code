import React from 'react'
import Column from './Column'

const Table = () => {
    return (
        <>
            <h1>Fragment | avoid div soup</h1>
            <hr/>
            <table>
                <tr>
                    <Column />
                </tr>
                <tr>
                    <Column />
                </tr>
            </table>
        </>
    )
}

export default Table