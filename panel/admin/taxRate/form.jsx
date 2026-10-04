import {
    Boolean,
    DateTime,
    DialogForm,
    Numeric,
    Title,
} from 'form'
import { ScopesScopeField } from 'scopes'
import TaxCategoryField from '../taxCategory/field'
import TaxJurisdictionField from '../taxJurisdiction/field'

const inputs = <>
    <Title />
    <ScopesScopeField show />
    <TaxJurisdictionField />
    <TaxCategoryField />
    <Numeric
        placeholder='percentage'
        property='percentage'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
    />
    <Boolean
        placeholder='compound'
        property='compound'
    />
</>

export default <DialogForm inputs={inputs} />
