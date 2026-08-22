import {
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>taxationTaxJurisdiction</th>
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
