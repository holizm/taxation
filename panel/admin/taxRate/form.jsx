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
