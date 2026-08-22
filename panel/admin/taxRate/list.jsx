import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>taxationTaxRate</th>
    <th>taxationPercentage</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.percentage}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
