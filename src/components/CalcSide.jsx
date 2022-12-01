import React, { useState } from "react";
import styled from "styled-components";
import DollarIcon from '../assets/icon-dollar.svg';
import PersonIcon from '../assets/icon-person.svg';
import ResultSide from "./ResultSide";

const CalcSide = function () {
    const buttonsArr = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 15 },
        { id: 4, value: 25 },
        { id: 5, value: 50 },
    ];

    const allButtons = document.querySelectorAll('.percent-button');

    const [billAmount, setBillAmount] = useState('');
    const [personNumber, setPersonNumber] = useState('');
    const [error, setError] = useState(false);
    const [tipPercent, setTipPercent] = useState('');


    const billAmountChangeHandler = function (e) {
        if (e.target.value > 0) {
            setBillAmount(+(e.target.value))
        } else { setBillAmount('') }
    }

    const customTipChangeHandler = function (e) {
        const allButtons = document.querySelectorAll('.percent-button');
        allButtons.forEach(eachBtn => {
            eachBtn.classList.remove('active');
        });

        if (e.target.value > 0) {
            setTipPercent(+(e.target.value))
        } else { setTipPercent('') }
    }

    const personNumberChangeHandler = function (e) {
        if (e.target.value > 0) {
            setPersonNumber(+(e.target.value));
            setError(false);
        } else {
            setError(true);
            setPersonNumber('');
        }
    }

    const personNumberBlurHandler = function (e) {
        if (e.target.value > 0) {
            setError(false);
        }
    }

    const percentClickHandler = function (e) {
        allButtons.forEach(eachBtn => {
            eachBtn.classList.remove('active');
        });
        e.target.classList.add('active');
        setTipPercent(+(e.target.value));
    }

    const resetHandler = function () {
        setBillAmount('');
        setPersonNumber('');
        setError(false);
        setTipPercent('');
        allButtons.forEach(eachBtn => {
            eachBtn.classList.remove('active');
        });
    }

    return (<React.Fragment>
        <Container>
            <label>Bill</label>
            <div className="amount-box">
                <img className="dollar-icon" src={DollarIcon} alt="dollar icon" />
                <input value={billAmount} onChange={billAmountChangeHandler} type='number' className="bill-price-input" placeholder="0"></input>
            </div>
            <label className="extralbl">Select Tip %</label>
            <div className="tip-box">
                {buttonsArr.map(eachBtn => {
                    return <button
                        key={eachBtn.id}
                        id={eachBtn.id}
                        value={eachBtn.value}
                        active={eachBtn.active}
                        onClick={percentClickHandler}
                        className='percent-button'
                    >{`${eachBtn.value}%`}</button>
                })}
                <input value={tipPercent} onChange={customTipChangeHandler} className="custom-tip-input" type='number' placeholder="Custom"></input>
            </div>
            <div className="err-box">
                <label>Number of People</label>
                {error ? <label className="errorMSG">Can't be zero</label> : null}
            </div>
            <div className="persons-box">
                <img className="person-icon" src={PersonIcon} alt="Person icon" />
                <input value={personNumber} onBlur={personNumberBlurHandler} onChange={personNumberChangeHandler} className="person-number-input" type='number' placeholder="0"></input>
            </div>
        </Container>
        <ResultSide
            billAmount={billAmount}
            personNumber={personNumber}
            tipPercent={tipPercent}
            reset={resetHandler}
        />
    </React.Fragment >
    )
}

export default CalcSide;


const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .active {
        background-color: #26C2AE !important;
        color: #00474B;
      }

    .err-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
    }

    .errorMSG {
        color: #E17457;
    }

    & label {
        font-weight: 700;
        color: #5E7A7D;
        line-height: 1.5rem;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .extralbl {
        margin-bottom: 1rem;
    }

    .amount-box {
      position: relative;
      border-radius: 5px;  
      height: 3rem;
      width: 23.688rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: #F3F9FA;
      margin-bottom: 2rem;
      
       .dollar-icon {
            position: absolute;
            height: 15.5px;
            width: 10px;
            left: 1rem;
           }

        .bill-price-input {
            width: 100%;
            height: 100%;
            padding-right: 1rem;
            font-weight: 700;
            text-align: right;
            background: #F3F9FA;
            border-radius: 5px;
            color: #00474B;
            line-height: 2.25rem;
            font-size: 1.5rem;
            border: 2px solid transparent;

            &:invalid {
                border: 2px solid #E17052;
            }

            &:focus {
                outline: none;
                border: 2px solid #26C2AE;
            }

            &:focus::placeholder {
                color: transparent;
            }

            &::placeholder {
                color: #9EBBBD;
            }

            &::-webkit-inner-spin-button, 
            &::-webkit-outer-spin-button { 
                 -webkit-appearance: none;
                 -moz-appearance: none;
                 appearance: none;
                 margin: 0;
           } 
        }   
    }

    .tip-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
    }

    & button {
     background: #00474B;
     border-radius: 5px;
     height: 3rem; 
     width: 7.3rem;
     border: none;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1.5rem;
     font-weight: 700;
     color: #FFF;
     cursor: pointer;
     transition: all 0.3s;
    }

    .custom-tip-input {
        height: 3rem;
        width: 7.3rem;
        background: #F3F9FA;
        border: 2px solid transparent;
        border-radius: 5px;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        color: #00474B;

        &:invalid {
            border: 2px solid #E17052;
        }

        &::placeholder { 
            color: #547878;
            font-weight: 700;
            font-size: 1.5rem;
            border: none;
        }

        &:focus {
            outline: none;
            border: 2px solid #26C2AE;
        }

        &:focus::placeholder {
            color: transparent;
        }

        &::-webkit-inner-spin-button, 
            &::-webkit-outer-spin-button { 
                 -webkit-appearance: none;
                 -moz-appearance: none;
                 appearance: none;
                 margin: 0;
           } 
    }

    .persons-box {
        position: relative;
        width: 23.688rem;
        height: 3rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background: #F3F9FA;

        .person-icon {
            position: absolute;
            left: 1rem;
            height: 1rem;
            width: 0.81rem;
        }

        .person-number-input {
            background: #F3F9FA;
            padding-right: 1rem;
            height: 100%;
            color: #00474B;
            border: 2px solid transparent;
            border-radius: 5px;
            font-size: 1.5rem;
            font-weight: 700;
            text-align: right;
            width: 100%;
            
            &:invalid {
                border: 2px solid #E17052;
            }

            &:focus {
                outline: none;
                border: 2px solid #26C2AE;
            }

            &:focus::placeholder {
                color: transparent;
            }

            &::placeholder {
                color: #9EBBBD;
            }

            &::-webkit-inner-spin-button, 
            &::-webkit-outer-spin-button { 
                 -webkit-appearance: none;
                 -moz-appearance: none;
                 appearance: none;
                 margin: 0; 
            }     
        }
    }

    @media (max-width: 28.125em) {
        .tip-box {
            grid-template-columns: repeat(2, 1fr);
        }
        .persons-box {
            width: 100%;
        }
        .amount-box {
            width: 100%;
        }
        & button {
            width: 100%;
        }
        .custom-tip-input {
            width: 100%;
        }
    }
`
