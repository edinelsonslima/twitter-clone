import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: .5px solid var(--gray);
    margin-top: 20px;
`

export const Tab = styled.div`
    padding: 11px 0 15px;

    font-weight: bold;
    font-size: 15px;

    outline: 0;
    cursor: pointer;

    color: var(--gray);

    &.active{
        color: var(--twitter);
        border-bottom: 3px solid var(--twitter);
        border-radius: 1px;
    }

    &:hover{
        background: var(--twitter-dark-hover);
    }
`

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`