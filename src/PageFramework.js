import React from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function PageFramework() {
    return (
        <div>
            <Header />
            <div>
                <LeftColumn />
                <RightColumn />
            </div>
        </div>
    )
}