import { useState } from 'react'
import Input from './Input'

function EditNameForm({ isEditing, setIsEditing }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!firstName || !lastName) {
            return
        }
        console.log(firstName, lastName)
        setIsEditing(false)
    }

    function handleCancel() {
        setFirstName('')
        setLastName('')
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
