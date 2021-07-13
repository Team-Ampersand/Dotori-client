import React from 'react';

import { Home, Notice, Laptop, Song, Point, Setting, School, Slack, Bug } from '../Assets/Svg';    

export const useRouterNameChangeMenuImage = (routerName: String) => {
    switch (routerName) {
        case "Home":
            return <Home />
        case "Notice":
            return <Notice />
        case "Laptop":
            return <Laptop />
        case "Song":
            return <Song />
        case "Point":
            return <Point />
        case "Setting":
            return <Setting />
        case "School":
            return <School />
        case "Slack":
            return <Slack />
        case "Bug":
            return <Bug />
        default:
            break;
    }
}