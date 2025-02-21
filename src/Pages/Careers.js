import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Careers = () => {
    const param = useParams();
    const [paraId, setParamId] = useState(param.id);
    return (
        <div>Careers Page {paraId}</div>
    )
}
