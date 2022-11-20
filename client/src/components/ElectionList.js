import React from "react";
function ElectionList(){
    return(
        <>
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <h1 className="h1Class">ELECTION LIST</h1>
        <table className="tableDecor">
            <thead>
                <tr>
                    <th className="tdDecor">Election Name</th>
                    <th className="tdDecor">District</th>
                    <th className="tdDecor">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tdDecor">PM</td>
                    <td className="tdDecor">New Delhi</td>
                    <td className="tdDecor">Pending</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}
export default ElectionList;
