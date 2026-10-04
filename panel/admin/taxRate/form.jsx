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
        percentage
        required
    />
    <DateTime
        required
        startDate
    />
    <DateTime endDate />
    <Boolean compound />
</>

export default <DialogForm inputs={inputs} />
