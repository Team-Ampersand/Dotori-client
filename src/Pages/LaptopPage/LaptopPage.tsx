import React, { useState } from 'react';
import { PageTemplate } from '..'
import { MatchType } from '../../Utils/GlobalType';
import { LaptopTable } from '../../Components';
import * as S from './Style';

interface LaptopProps {
    match: MatchType
}

const LaptopContainer: React.FC<LaptopProps> = ({ match }) => {

    return (
        <PageTemplate match={match}>
            <LaptopTable match={match}/>
        </PageTemplate>
    )
}

export default LaptopContainer;