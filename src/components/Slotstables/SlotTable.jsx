import React from 'react'
import './SlotsTable.css'

function SlotTable() {
    return (
        <table className="slotstable">
            <thead className="slotstablehead">
                <tr className="slotstable-row">
                    <th className="slot-headings" scope="col">S.No</th>
                    <th className="slot-headings" scope="col">Slots</th>
                    <th className="slot-headings" scope="col">Booking</th>
                </tr>
            </thead>
            <tbody>
                <tr className="slotstable-row">
                    <td className="slot-content" data-label="S.No">1.</td>
                    <td className="slot-content" data-label="Slots">18:00-18:30</td>
                    <td className="slot-content" data-label="Booking"><button className="book-now">Book now</button></td>
                </tr>
                <tr className="slotstable-row">
                    <td className="slot-content" data-label="S.No">2.</td>
                    <td className="slot-content" data-label="Slots">19:00-19:30</td>
                    <td className="slot-content" data-label="Booking"><button className="book-now">Book now</button></td>
                </tr>
                <tr className="slotstable-row">
                    <td className="slot-content" data-label="S.No">3.</td>
                    <td className="slot-content" data-label="Slots">19:30-20:00</td>
                    <td className="slot-content" data-label="Booking"><button className="book-now">Book now</button></td>
                </tr>
                <tr className="slotstable-row">
                    <td className="slot-content" data-label="S.No">4.</td>
                    <td className="slot-content" data-label="Slots">18:00-18:30</td>
                    <td className="slot-content" data-label="Booking"><button className="book-now">Book now</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default SlotTable