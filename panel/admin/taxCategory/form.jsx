import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='taxationCode'
        property='code'
        required
    />
    <LongText
        placeholder='taxationDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
