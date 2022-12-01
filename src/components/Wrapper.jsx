import styled from "styled-components";
import logo from '../assets/logo.svg';

const Wrapper = function (props) {
    return (
        <Layout>
            <div className="img-div">
                <img className="splitter-img" src={logo} alt="splitter logo" />
            </div>
            <WhiteSpace>
                {props.children}
            </WhiteSpace>
        </Layout>
    )
}

export default Wrapper;

const Layout = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin-top: 3rem;

    .splitter-img {
        margin-top: 7rem;
        height: 3.321rem;
        width: 5.416rem;
    }
    
    @media (max-width: 28.125em) {
        gap: 3rem;
        margin-top: 0rem;

        .splitter-img {
            margin-top: 3rem;
        }
    }
`

const WhiteSpace = styled.div`
    height: 30rem;
    width: 57.5rem;
    background: #FFFFFF;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px;

    @media (max-width: 28.125em) {
        width: 100vw;
        height: 55rem;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`