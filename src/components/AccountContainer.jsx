import data from '../data/compte.json'
import Account from '../components/Account'

function AccountContainer() {
    return (
        <div>
            {data.map((account) => (
                <Account key={account.id} account={account} />
            ))}
        </div>
    )
}

export default AccountContainer
