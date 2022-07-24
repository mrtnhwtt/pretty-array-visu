import React, { useState, useEffect } from 'react';
import { Slider, MenuItem, Select } from '@mui/material';
import ArrayContainer from './components/ArrayContainer/ArrayContainer';
import Button from './components/Button/Button'
import handleSort from './action/Sort'
import './App.css';

const App = () => {

    const [r_array, setRArray] = useState([]);
    const [rangeValue, setRangeValue] = useState(35);
    const [isRunning, setIsRunning] = useState(false);
    const [sortMethod, setSortMethod] = useState(0);
    const [steps, setSteps] = useState(0);
    const sliderLabel = [
        {
            value: 20,
            label: 'Fast'
        },
        {
            value: 200,
            label: 'Slow'
        }
    ]
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

    const handleSelectSort = (event) => {
        setSortMethod(event.target.value)
    }

    const regenerateArray = () => {
        createUnsortedArray()
    };

    const handleSliderUpdate = (event, newValue) => {
        setRangeValue(newValue)
    }

    const handleSortLaunch = () => {
        handleSort(sortMethod, r_array, setRArray, setIsRunning, setSteps)
    }

    useEffect(() => {
        if (r_array.length === 0) {
            createUnsortedArray()
        }
    }, [r_array]);

    return (
        <div className="App" >
            <header className="App-header" >
                <div className="nav-container" >
                    <div className="App-title" > Pretty Array Visualisation </div>
                    <div className="settings-container" >
                        <div className="opt-container" >
                            <Slider aria-label="ArraySize"
                                defaultValue={35}
                                valueLabelDisplay="auto"
                                step={5}
                                min={20}
                                max={200}
                                onChange={handleSliderUpdate}
                                sx={{
                                    width: 180,
                                    color: '#282625',
                                }}
                                data-testid='arraySizeSlider'
                            />
                            <div className="button-container">
                                <Button
                                    onClickAction={regenerateArray}
                                    desactivated={isRunning}
                                    testid='regenerateArrayButton'
                                >
                                    Regenerate
                                </Button>
                            </div>
                            <div className="button-container" >
                            </div>
                        </div>
                        <div className='opt-container'>
                            <Select
                                id="sort-select"
                                value={sortMethod}
                                onChange={handleSelectSort}
                                sx={{
                                    width: 180,
                                    color: '#282625',
                                }}
                                data-testid='sortMethodSelect'
                            >
                                <MenuItem value={0}>Bubble Sort</MenuItem>
                            </Select>
                            <div className="button-container">
                                <Button
                                    onClickAction={handleSortLaunch}
                                    desactivated={isRunning}
                                    testid='launchSortButton'
                                >
                                    Launch Sort
                                </Button>
                            </div>
                        </div>
                    </div>
                </div >
            </header>
            <ArrayContainer
                targetArray={r_array}
                steps={steps}
                testid='arrayDisplay'
            />
        </div>
    );
}

export default App;