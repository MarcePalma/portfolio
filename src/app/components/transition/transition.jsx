import React from 'react'

export default function Transition() {
    return (
        <>
            <motion.div className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}

            />
            <motion.div className="slide-out"
                initial={{ scaleY: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}

            />
        </>
    )
}
