import { Browse } from 'form'
import filters from './filters'
import headers from './headers'
import row from './row'

export default <Browse
    filters={filters}
    headers={headers}
    placeholder='taxationTaxCategory'
    property='taxCategory'
    row={row}
    required
/>
