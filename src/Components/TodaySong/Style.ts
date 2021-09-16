import styled from 'styled-components';

export const Postioner = styled.div`
    width: 50%;
    height: 70vh;
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PlaylistContainer = styled.div`
    width: 93.3%;
    height: 20vh;
    padding: 3.5% 0 3.5% 6.5%;
    margin: 0 auto;
    display: flex;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 26px;
    font-weight: bold;
    position: sticky;
    top: 0;
    border-radius: 20px;
    background-color: #fff;
`;

export const SongContainer = styled.div`
    margin-top: 2vh;
`;