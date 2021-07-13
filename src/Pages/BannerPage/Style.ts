import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 141px;
    display: flex;
    align-items: center;
    
    svg {
        //** Notebook Iilust */
        .cls-1{fill:#2f2e41}
        .cls-2{fill:#0f4c81}
        .cls-3{fill:#d0cde1}
        .cls-4{fill:#3f3d56}
        .cls-5{fill:#fff}
        .cls-6{opacity:.1}
        .cls-7{fill:#ffb8b8}
        .cls-8{opacity:.2}
        .cls-9{fill:#f2f2f2}
        //** Beta Iilust */
        .beta-1,.beta-4,.beta-9{fill:#0f4c81}
        .beta-1,.beta-2,.beta-5,.beta-8{opacity:.1}
        .beta-3{fill:#3f3d56}
        .beta-6{fill:#d0d2d5}
        .beta-7{fill:#fff}
        .beta-8{fill:#444053}
        .beta-9{opacity:.3}
        .beta-10{fill:#fa5959}
        .beta-10,.beta-11,.beta-12{opacity:.8}
        .beta-11{fill:#fed253}
        .beta-12{fill:#8ccf4d}
        .beta-13{fill:url(#linear-gradient)}
        .beta-14{fill:#2f2e41}
        .beta-15{fill:#454b69}
        .beta-16{fill:#fbbebe}
    }
`

export const Wrapper = styled.div`
    margin-left: 30px;

    h2 {

    }
`