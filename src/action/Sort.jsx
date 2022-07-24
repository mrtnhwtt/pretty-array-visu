const delay = () => {
    return new Promise(
        resolve => setTimeout(resolve, 0.00001)
    );
};

const BubbleSort = async (targetArray, updateArrayMethod, setRunningState, setStepCount) => {
    setRunningState(true)
    let arr = [...targetArray]
    let step = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            await delay();
            if (arr[j] > arr[j + 1]) {
                step++
                setStepCount(step);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                updateArrayMethod([...arr]);
            }
        }
    }
    setRunningState(false);
}

const handleSort = (sortMethod, targetArray, updateArrayMethod, setRunningState, setStepCount) => {
    switch (sortMethod) {
        case 0:
            BubbleSort(targetArray, updateArrayMethod, setRunningState, setStepCount)
            break;

        default:
            break;
    }
};

export default handleSort;