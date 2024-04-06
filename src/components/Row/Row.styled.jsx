import styled from 'styled-components';

export const RowCss = styled.section`
    color: #fff;
    margin-left: 1rem;
    .row__posters {
        display: flex;
        column-gap: 0.7rem;
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 1.2rem;

        &::-webkit-scrollbar {
            display: none;
        }
        
    }


    .row__poster {
        max-height: 10rem;
        width: 100%;
        transition: transform 250ms ease-in-out;

        &:hover {
            transform: scale(1.08);
            opacity: 1;
        }
    }

    .row__posterLarge {
        max-height: 15rem;
    }
`;