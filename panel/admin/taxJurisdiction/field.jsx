import { Browse } from 'form'
import filters from './filters'
import headers from './headers'
import row from './row'

export default <Browse
    display={item => item.title}
    filters={filters}
    headers={headers}
    placeholder='taxationTaxJurisdiction'
    property='taxJurisdiction'
    row={row}
    required
/>
