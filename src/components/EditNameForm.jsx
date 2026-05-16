import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice'
import { updateProfile } from '../services/authService'
import Input from './Input'

function EditNameForm({ isEditing, setIsEditing }) {
    const { token } = useSelector((state) => state.auth)
    const { email } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        if (!firstName || !lastName) {
            return
        }

        try {
            // 1. Appel API pour mettre à jour le profil
            const data = await updateProfile(token, firstName, lastName)

            if (data.status !== 200) {
                setError('Erreur lors de la mise à jour')
                return
            }

            // 2. Met à jour Redux
            dispatch(
                setUser({
                    firstName: data.body.firstName,
                    lastName: data.body.lastName,
                    email,
                })
            )

            // 3. Ferme le formulaire
            setIsEditing(false)
        } catch {
            setError('Une erreur est survenue')
        }
    }

    function handleCancel() {
        setFirstName('')
        setLastName('')
        setError('')
        setIsEditing(false)
    }

    return (
        <>
            {isEditing ? (
                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="edit-form-fields">
                        <Input
                            label=""
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Input
                            label=""
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="edit-form-buttons">
                        <button className="edit-button" type="submit">
                            Save
                        </button>
                        <button
                            className="edit-button"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}
                >
                    Edit Name
                </button>
            )}
        </>
    )
}

export default EditNameForm
