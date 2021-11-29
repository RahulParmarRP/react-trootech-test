import React, { useState } from 'react'

const AgeRange = ({ defaultValue, onChange, ...rest }) => {
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
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default AgeRange