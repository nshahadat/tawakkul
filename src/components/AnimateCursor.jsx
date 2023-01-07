import React from 'react'
import AnimatedCursor from 'react-animated-cursor';

const AnimateCursor = () => {

    return (
        <AnimatedCursor
            innerSize={20}
            outerSize={60}
            color='247, 38, 132'
            outerAlpha={0.4}
            innerScale={0.8}
            outerScale={2}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                'svg',
                'b'

            ]}
        >

        </AnimatedCursor>
    )
}

export default AnimateCursor