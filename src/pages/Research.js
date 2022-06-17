import React, { Component } from 'react'
import cx from 'classnames'
import { Container, Row, Col, Table, Image} from 'react-bootstrap'

import research1 from '../assets/docs/3.3.2.pdf';
import research2 from '../assets/docs/3.3.3.pdf';

class Research extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const papersData = [
        //     {
        //         title: 'Innovative Teaching Methodologies in Economics',
        //         author: 'Dr Sangeeta Shashikant Shinde',
        //         department: 'Department of Economics',
        //         journal: 'Studies in Indian Place Names',
        //         year: '2019-20',
        //         issn: 'ISSN: 2394-3114 Vol-40-Issue-68-March-2020',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Best Practices in Higher Educational Institute',
        //         author: 'Dr Sangeeta Shashikant Shinde',
        //         department: 'Department of Economics',
        //         journal: 'Studies in Indian Place Names',
        //         year: '2019-20',
        //         issn: 'ISSN: 2394-3114 Vol-40-Issue-68-March-2020',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Opportunities in Apple Production and Processing in Kashmir',
        //         author: 'Dr Sangeeta Shashikant Shinde',
        //         department: 'Department of Economics',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Influence on Pharmaceutical Industries on Kashmir',
        //         author: 'Aparna Vinayak Kedari',
        //         department: 'Department of Science',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Growth and impact of information technology and communication in Kashmir.',
        //         author: 'Rupali Pravinkumar Pawar',
        //         department: 'Department of BBA(CA)',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'A survey of Reactions of people on the revoking of article 370 in Jammu & Kashmir',
        //         author: 'Chetan Chandra Mohan Minocha',
        //         department: 'Department of BBA',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'A Study of Pros and Cons of Abrogation of Article 370 in India',
        //         author: 'Dr. Pallavi Chetan Patil',
        //         department: 'Department of Commerce',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Impact on Jammu & Kashmir Tourism Sector After Article 370 & 35 (A)',
        //         author: 'Dr. Anant Shriram Rathod',
        //         department: 'Department of Economics',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     },
        //     {
        //         title: 'Examining the Effect of Callisthenic Exercise on High Density Lipoprotine Cholesterol in Sedentary Individuals ',
        //         author: 'Dr. Pritam V. Misale',
        //         department: 'Department of Economics',
        //         journal: 'THINK INDIA JOURNAL',
        //         year: '2019-20',
        //         issn: 'ISSN:0971-1260(Volume-22-Issue-3)',
        //         ugclink: 'https://ugccare.unipune.ac.in/Apps1/User/WebA/SearchList'
        //     }
        // ];

        // var papersList = papersData.map(function(data){
        //     return (
        //         <tr>
        //             <td><b>{ data.title }</b></td>
        //             <td>{ data.author }</td>
        //             <td>{ data.department }</td>
        //             <td>{ data.journal }</td>
        //             <td>{ data.year }</td>
        //             <td>{ data.issn }</td>
        //             <td>
        //                 <a href={ data.ugclink } target="_blank"> Click here </a>
        //             </td>
        //         </tr>
        //     );
        // })

        return (
            <Container fluid>
                <Row className={cx("d-none d-md-flex")}>
                    <Col md={5} className={cx("d-flex justify-content-center align-items-center headRow1")}>
                        <h2 className={cx("text-white")}>Research</h2>
                    </Col>
                    <Col md={7} className={cx("headRow2")}>
                        
                    </Col>
                </Row>

                <Row className={cx("d-flex justify-content-center")}>
                    <Col md={9} className={cx("py-4")}>
                        <Row>
                            <Col md={12} className={cx("py-4")}>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <b>Research papers by teachers in the Journals notified on UGC website during the year</b>
                                            </td>
                                            <td>
                                                <a href={ research1 } target="_blank">Click Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during year</b>
                                            </td>
                                            <td>
                                                <a href={ research2 } target="_blank">Click Here</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col md={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="align-top">Title of paper</th>
                                            <th className="align-top">Name of the author/s</th>
                                            <th className="align-top">Department of the teacher</th>
                                            <th className="align-top">Name of journal</th>
                                            <th className="align-top">Year of publication</th>
                                            <th className="align-top">ISSN number</th>
                                            <th className="align-top">Link to the recognition in UGC enlistment of the Journal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { papersList }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Research;