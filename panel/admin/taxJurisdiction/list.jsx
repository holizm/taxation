import { List } from 'list'
import filters from './filters'
import form from './form'
import headers from './headers'
import row from './row'

export default <List
    create={form}
    filters={filters}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
