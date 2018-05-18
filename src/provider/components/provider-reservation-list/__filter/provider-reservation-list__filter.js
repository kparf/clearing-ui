import React from 'react';
import MultiSelect from '../../../../common/components/multi-select/multi-select';
import MultiSelect__ListItem
    from '../../../../common/components/multi-select/multi-select__list-item/multi-select__list-item';
import './provider-reservation-list__filter.css';
import label from '../../../../common/components/label/label';

const LabelMultiSelect = label(MultiSelect);

function ProviderReservationList__Filter({services, filter, onChange}) {

    console.log('filter');
    console.log(filter);

    return (
        <div className='provider-reservation-list__filter'>
            <LabelMultiSelect label='Services' onSave={(val) => onChange({ services: val })}>
                { services.map(service =>
                    <MultiSelect__ListItem
                        key={service.id}
                        value={service.id}
                        selected={ filter.services.includes(service.id) }
                    >{service.name}</MultiSelect__ListItem>) }
            </LabelMultiSelect>

            <LabelMultiSelect label='Statuses' onSave={(val) => onChange({ statuses: val })}>
                <MultiSelect__ListItem
                    key='NEW'
                    value='NEW'
                    selected={ filter.statuses.includes('NEW') }>new</MultiSelect__ListItem>
                <MultiSelect__ListItem
                    key='CONFIRMED'
                    value='CONFIRMED'
                    selected={ filter.statuses.includes('CONFIRMED') }>Confirmed</MultiSelect__ListItem>
                <MultiSelect__ListItem
                    key='CANCELLED'
                    value='CANCELLED'
                    selected={ filter.statuses.includes('CANCELLED') }>Cancelled</MultiSelect__ListItem>
            </LabelMultiSelect>
        </div>
    )
}

export default ProviderReservationList__Filter;
