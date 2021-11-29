import React, { useState } from 'react'

const AgeRange = ({ defaultValue, ref, isEditing, ...rest }) => {
    const [age, setAge] = useState(defaultValue)
    return (
        <div>
            <span>{age}</span>
            <input
                {...rest}
                type="range"
                ref={element => ref = element}
                value={age}
                disabled={!isEditing}
                onChange={(e) => setAge(e.target.value)}
            />
        </div>
    )
}

export default AgeRange