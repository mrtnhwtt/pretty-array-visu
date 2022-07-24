import './button.css'
const Button = ({ children, onClickAction, desactivated, testid }) => {
    return (
        <div>
            <button data-testid={testid} disabled={desactivated} className="custom-button" onClick={onClickAction}>{children}</button>
        </div>
    );
}

export default Button;