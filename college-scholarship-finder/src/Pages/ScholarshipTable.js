// src/ScholarshipTable.js

import React from 'react';
import './ScholarshipTable.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const scholarshipData = [
    { srNo: 1, scholarshipName: 'International Student Diversity Contest 2022-2023', status: 'Accepted' },
    { srNo: 2, scholarshipName: 'TKS Full-Ride Scholarship', status: 'Rejected' },
    { srNo: 3, scholarshipName: 'Human Resource - Free Course From Windsor University MBA', status: 'Pending' },
    { srNo: 4, scholarshipName: 'Master in Business Administration 80% OFF your Tuition fee-Scholarship', status: 'Accepted' },
    { srNo: 5, scholarshipName: 'Contest Scholarship Programme for international Students 2022', status: 'Pending' },
];

function getStatusColor(status) {
    switch (status) {
        case 'Accepted':
            return 'green';
        case 'Rejected':
            return 'red';
        case 'Pending':
            return 'gold';
        default:
            return 'black';
    }
}

function ScholarshipTable() {
    return (
      <div>
        <Navbar/>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>SR no.</th>
                <th>Scholarship Applied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scholarshipData.map((item) => (
                <tr key={item.srNo}>
                  <td>{item.srNo}</td>
                  <td>{item.scholarshipName}</td>
                  <td style={{ color: getStatusColor(item.status) }}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer/>
      </div>
    );
}

export default ScholarshipTable;
