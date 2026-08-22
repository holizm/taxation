import {
    Boolean,
    DateTime,
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='taxationTaxJurisdiction'
        property='taxJurisdiction'
        required
    />
    <Text
        placeholder='taxationTaxCategory'
        property='taxCategory'
        required
    />
    <Numeric
        placeholder='taxationPercentage'
        property='percentage'
        required
    />
    <DateTime
        placeholder='taxationStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='taxationEndDate'
        property='endDate'
    />
    <Boolean
        placeholder='taxationCompound'
        property='compound'
    />
</>

export default <DialogForm inputs={inputs} />
