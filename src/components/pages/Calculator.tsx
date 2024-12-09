import React, { useState } from 'react';

interface CalculatorProps {
  theme?: 'light' | 'dark';
}

const Calculator: React.FC<CalculatorProps> = ({ theme = 'light' }) => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleNumberClick = (number: string) => {
    if (number === '.' && currentValue.includes('.')) return;

    if (currentValue.length >= 15) return;

    if (currentValue === '0' && number !== '.') {
      setCurrentValue(number);
    } else {
      setCurrentValue(prev => prev + number);
    }
  };

  const handleOperationClick = (op: string) => {
    if (previousValue) {
      handleEqualsClick(false);
    }
    setPreviousValue(currentValue);
    setOperation(op);
    setCurrentValue('0');
  };

  const handleEqualsClick = (addToHistory: boolean = true) => {
    const prevValue = parseFloat(previousValue);
    const currentValueFloat = parseFloat(currentValue);

    let result: number;
    let calculationString = '';

    switch (operation) {
      case '+':
        result = prevValue + currentValueFloat;
        calculationString = `${previousValue} + ${currentValue} = ${result}`;
        break;
      case '-':
        result = prevValue - currentValueFloat;
        calculationString = `${previousValue} - ${currentValue} = ${result}`;
        break;
      case '*':
        result = prevValue * currentValueFloat;
        calculationString = `${previousValue} × ${currentValue} = ${result}`;
        break;
      case '/':
        if (currentValueFloat === 0) {
          alert("Can't divide by zero!");
          return;
        }
        result = prevValue / currentValueFloat;
        calculationString = `${previousValue} ÷ ${currentValue} = ${result}`;
        break;
      default:
        return;
    }

    const roundedResult = parseFloat(result.toFixed(10));

    setCurrentValue(roundedResult.toString());
    setPreviousValue('');
    setOperation('');

    if (addToHistory) {
      setHistory(prev => [calculationString, ...prev].slice(0, 5));
    }
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation('');
  };

  const handleBackspaceClick = () => {
    setCurrentValue(prev => 
      prev.length > 1 ? prev.slice(0, -1) : '0'
    );
  };

  const themeColors = {
    light: {
      bg: 'bg-white',
      text: 'text-gray-800',
      buttonPrimary: 'bg-green-500 hover:bg-green-600',
      buttonSecondary: 'bg-gray-200 hover:bg-gray-300',
      buttonClear: 'bg-red-500 hover:bg-red-600'
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      buttonPrimary: 'bg-emerald-700 hover:bg-emerald-800',
      buttonSecondary: 'bg-gray-700 hover:bg-gray-600',
      buttonClear: 'bg-red-700 hover:bg-red-800'
    }
  };

  const colors = themeColors[theme];

  return (
    <div className={`${colors.bg} ${colors.text} rounded-2xl p-6 w-96 mx-auto mt-10 shadow-2xl transform transition-all hover:scale-105`}>
      <div className="mb-6">
        <input
          type="text"
          value={currentValue}
          readOnly
          className={`w-full text-right text-4xl ${colors.text} bg-transparent border-b-2 border-gray-300 pb-2 focus:outline-none`}
        />
        {operation && previousValue && (
          <div className="text-sm text-gray-500 text-right">
            {previousValue} {operation}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button 
          className={`${colors.buttonSecondary} text-lg font-medium py-3 rounded-lg`} 
          onClick={handleClearClick}
        >
          AC
        </button>
        <button 
          className={`${colors.buttonSecondary} text-lg font-medium py-3 rounded-lg`} 
          onClick={handleBackspaceClick}
        >
          ←
        </button>
        <button 
          className={`${colors.buttonSecondary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleOperationClick('%')}
        >
          %
        </button>
        <button 
          className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleOperationClick('/')}
        >
          ÷
        </button>

        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
          <button
            key={num}
            className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`}
            onClick={() => handleNumberClick(num.toString())}
          >
            {num}
          </button>
        ))}

        <button 
          className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleNumberClick('.')}
        >
          .
        </button>
        <button 
          className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleOperationClick('+')}
        >
          +
        </button>
        <button 
          className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleOperationClick('-')}
        >
          -
        </button>
        <button 
          className={`${colors.buttonPrimary} text-lg font-medium py-3 rounded-lg`} 
          onClick={() => handleOperationClick('*')}
        >
          ×
        </button>
        <button 
          className={`col-span-2 ${colors.buttonClear} text-lg font-medium py-3 rounded-lg`} 
          onClick={handleEqualsClick as any}
        >
          =
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-4 border-t pt-2">
          <h4 className="text-sm font-semibold mb-2">History</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {history.map((calc, index) => (
              <li key={index}>{calc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;