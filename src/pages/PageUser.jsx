import { useState } from 'react'
import AccountContainer from '../components/AccountContainer'
import EditNameForm from '../components/EditNameForm'
import { useSelector } from 'react-redux'

function PageUser() {
    const [isEditing, setIsEditing] = useState(false)
    const { firstName, lastName } = useSelector((state) => state.user)

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    {!isEditing && (
                        <>
                            <br />
                            {firstName} {lastName}!
                        </>
                    )}
                </h1>
                <EditNameForm
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountContainer />
        </main>
    )
}

export default PageUser
