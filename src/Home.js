import React from 'react'
import Table from 'react-bootstrap/Table'



class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let tableSize = this.props.isMobile ? "sm" : ""
        return(
            <div>
                <Table striped bordered hover size={tableSize}>
                    <thead>
                    <tr>
                        <th width="60px">#</th>
                        <th width="150px">Pakistan Time</th>
                        <th width="150px">UK Time</th>
                        <th colSpan="4">Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2.45 pm</td>
                        <td>9.45 am</td>
                        <td colSpan="4">Introduction - Channel 1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3 pm</td>
                        <td>10 am</td>
                        <td>Service Development Channel I </td>
                        <td>Health Financing Channel II</td>
                        <td>Infections / Vaccination Channel III</td>
                        <td>Universal Education Channel IV</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3 pm</td>
                        <td>10 am</td>
                        <td colSpan="4">Rough model - can be improved greatly. Home and Welcome navigation links work</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Home;