import React from 'react';
import cleaningCompanies from './cleaning-companies.json';

function CleaningCompanyList() {
    const companies = cleaningCompanies.map( company => {
        return (
            <div key={company.id}>
                <div>{company.name}</div>
                <div>{company.email}</div>
                <div>{company.status}</div>
            </div>
        )
    });

    return (
        <div>
            {companies}
        </div>
    )
}

export default CleaningCompanyList;