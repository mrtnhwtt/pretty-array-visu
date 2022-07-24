import ArrayBit from "../ArrayBit/ArrayBit";

const ArrayContainer = ({ targetArray, steps, testid }) => {
    return (
        <>
            <main data-testid={testid}>
                <div className="arrayHolder" > {
                    targetArray.length !== 0 ? (

                        targetArray.map((val) => {
                            return <ArrayBit key={val}
                                index={val}
                                arrayLength={targetArray.length}
                            />
                        })
                    ) : < div className='center-loading' > Loading... </div>
                }
                </div>
            </main>
            <div>
                Steps: {steps}
            </div>
        </>
    );
}

export default ArrayContainer;