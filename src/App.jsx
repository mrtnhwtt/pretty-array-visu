import React, { useState, useEffect } from 'react';
import './App.css';
import ArrayBit from './components/ArrayBit/ArrayBit'
import Button from './components/Button/Button'
import { Slider, MenuItem, Select } from '@mui/material';

function App() {

    const [r_array, setRArray] = useState([]);
    const [rangeValue, setRangeValue] = useState(35);
    const [isRunning, setIsRunning] = useState(false);
    const [sortMethod, setSortMethod] = useState(0);
    const [steps, setSteps] = useState(0);

    const createUnsortedArray = () => {
        setSteps(0)
        for (var array = [], i = 0; i < rangeValue; ++i) array[i] = i;
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        array = array.map((val) => {
            return ++val;
        });
        setRArray(array);
    };

    const BubbleSort = () => {
        let arr = [...r_array]
        let step = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                setTimeout(() => {
                    step++
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        setRArray([...arr]);
                        setSteps(step)
                    }
                }, 0.00001)
            }
        }
    }

    const handleSort = () => {
        switch (sortMethod) {
            case 0:
                BubbleSort()
                break;

            default:
                break;
        }
    }

    const handleSelectSort = (event) => {
        setSortMethod(event.target.value)
    }

    const regenerateArray = () => {
        createUnsortedArray()
    };

    const handleSliderUpdate = (event, newValue) => {
        setRangeValue(newValue)
    }

    useEffect(() => {
        if (r_array.length === 0) {
            createUnsortedArray()
        }
    }, [r_array]);

    // console.log('rendering');

    return (
        <div className="App" >
            <header className="App-header" >
                <div className="nav-container" >
                    <div className="App-title" > Pretty Array Visualisation </div>
                    <div className="array-settings-container" >
                        <div className="slider-container" >
                            <Slider aria-label="ArraySize"
                                defaultValue={35}
                                valueLabelDisplay="auto"
                                step={1}
                                min={15}
                                max={150}
                                onChange={handleSliderUpdate}
                            />
                            <div className="button-container">
                                <Button onClickAction={regenerateArray}>Regenerate</Button> </div> <div className="button-container" >
                            </div>
                        </div>
                        <div>
                            <Select
                                id="sort-select"
                                value={sortMethod}
                                onChange={handleSelectSort}
                            >
                                <MenuItem value={0}>Bubble Sort</MenuItem>
                            </Select>
                        </div>
                        <div className="button-container">
                            <Button onClickAction={handleSort} >Launch Sort</Button> </div>
                    </div>
                </div >
            </header>
            <main>
                <div className="arrayHolder" > {
                    r_array.length !== 0 ? (

                        r_array.map((val) => {
                            return <ArrayBit key={val}
                                index={val}
                                arrayLength={r_array.length}
                            />
                        })
                    ) : < div className='center-loading' > Loading... </div>
                }
                </div>
            </main >
                <div>
                    Steps: {steps}
                </div>
        </div>
    );
}

export default App;