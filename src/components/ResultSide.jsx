import styled from "styled-components";

const ResultSide = function ({ billAmount, tipPercent, personNumber, reset }) {
    let tip;
    let total;
    let condition = false;

    if (billAmount > 0 && tipPercent > 0 && personNumber > 0) {
        tip = ((billAmount / 100) * tipPercent) / personNumber;
        total = (billAmount + ((billAmount / 100) * tipPercent)) / personNumber;
        condition = true;
    }

    const resetHandler = function () {
        reset();
    }

    return <GreenWrap>
        <div className="parent-flex-container">
            <div className="flex-styling-box">
                <label className="tip-lbl">
                    Tip Amount <br /> <span className="span-lbl">/ person</span>
                </label>
                <span className="amount-lbl">${tip ? tip.toFixed(2) : '0.00'}</span>
            </div>
            <div className="flex-styling-box">
                <label className="tip-lbl">
                    Total <br /> <span className="span-lbl">/ person</span>
                </label>
                <span className="amount-lbl">${total ? total.toFixed(2) : '0.00'}</span>
            </div>
        </div>
        <button disabled={!condition} onClick={resetHandler} className="btn-reset">RESET</button>
    </GreenWrap>
}

export default ResultSide;

const GreenWrap = styled.div`
    background: #00474B ;
    padding: 2.5rem;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .parent-flex-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .flex-styling-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tip-lbl {
       font-weight: 700;
       font-size: 1rem;
       line-height: 1.5rem; 
    }

    .span-lbl {
        color: #7F9D9F;
        font-weight: 700;
        line-height: 19px;
        font-size: 13px;
    }

    .amount-lbl {
        color: #26C2AE;
        font-weight: 700;
        font-size: 3rem;
        line-height: 4.4rem;
        letter-spacing: -1px;
    }

    .btn-reset {
        background: #26C2AE;
        border: none;
        height: 3rem;
        cursor: pointer;
        border-radius: 5px;
        color: #00474B;
        font-weight: 700;
        font-size: 1.3rem;
        text-align: center;
        line-height: 1.9rem;
        transition: all 0.15s;

        &:disabled {
            background: #0D686D;
        }
        &:disabled:active { 
            background: #0D686D;
        }

        &:hover {
            transform: translateY(-3px);
        }

        &:active {
            transform: translateY(0);
            background: #9FE8DF;
        }
    }

    @media (max-width: 28.125em) {
        .amount-lbl {
            font-size: 2rem;
        }
    }
`