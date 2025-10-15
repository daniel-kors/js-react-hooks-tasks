import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
    const [activeButton, setActiveButton] = useState(null);

    const handleLeftClick = () => {
        setActiveButton('left');
    };

    const handleRightClick = () => {
        setActiveButton('right');
    };

    const leftButtonClass = cn('btn', 'btn-secondary', 'left', {
        'active': activeButton === 'left'
    });

    const rightButtonClass = cn('btn', 'btn-secondary', 'right', {
        'active': activeButton === 'right'
    });

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={leftButtonClass}
                onClick={handleLeftClick}
            >
                Left
            </button>
            <button
                type="button"
                className={rightButtonClass}
                onClick={handleRightClick}
            >
                Right
            </button>
        </div>
    );
  // END
};

export default BtnGroup;