export default ({ amount, rate }) => <span class='taxAmount'>
    {amount * rate / 100}
</span>
