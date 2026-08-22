import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>taxationTaxCategory</th>
    <th>taxationCode</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
