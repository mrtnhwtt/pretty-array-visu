const ArrayBit = ({ index, arrayLength }) => {
    return (
        <div
            data-testid='arraybits'
            style={{
                width: 100 / arrayLength + "%",
                height: index / arrayLength * 100 + "%",
                backgroundColor: '#282625',
                alignSelf: 'end'
            }}>
        </div>
    );
}

export default ArrayBit;