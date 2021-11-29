import React, { useState } from 'react'

const AgeRange = ({ defaultValue, ref, isEditing, onChange, ...rest }) => {
    const [value, setValue] = useState(defaultValue)
    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    }
    return (
        <div>
            <span>{value}</span>
            <input
                {...rest}
                type="range"
                ref={element => ref = element}
                value={value}
                disabled={!isEditing}
                onChange={handleChange}
            />
        </div>
    )
}

export default AgeRange