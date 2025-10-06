import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

interface JsonEditorProps {
  value: any;
  onChange: (newValue: any) => void;
  readOnly?: boolean;
  maxLength?: number;
  validate?: (value: any) => { isValid: boolean; message?: string };
}

const defaultValidate = (value: any, maxLength: number): { isValid: boolean; message?: string } => {
  if (!value) return { isValid: false };
  if (typeof value === 'object') {
    const stringified = JSON.stringify(value);
    return {
      isValid: Object.keys(value).length > 0 && stringified.length <= maxLength,
      message: stringified.length > maxLength ? 
        `Value must not exceed ${maxLength} characters (${stringified.length}/${maxLength})` : undefined
    };
  }
  return {
    isValid: value.trim().length > 0 && value.length <= maxLength,
    message: value.length > maxLength ? 
      `Value must not exceed ${maxLength} characters (${value.length}/${maxLength})` : undefined
  };
};

const JsonEditor: React.FC<JsonEditorProps> = ({ 
  value, 
  onChange, 
  readOnly = false,
  maxLength = 512,
  validate
}) => {
  const [currentValue, setCurrentValue] = React.useState(JSON.stringify(value, null, 2));
  const [syntaxError, setSyntaxError] = React.useState<string | null>(null);
  const [validationError, setValidationError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setCurrentValue(JSON.stringify(value, null, 2));
  }, [value]);

  React.useEffect(() => {
    if (value) {
      const validation = validate ? 
        validate(value) : 
        defaultValidate(value, maxLength);
      
      setValidationError(validation.message || null);
    }
  }, [value, validate, maxLength]);

  return (
    <>
      <AceEditor
        mode="json"
        theme="github"
        name="jsonEditor"
        onChange={(newValue) => {
          if(!readOnly){
            setCurrentValue(newValue);
            try {
              const parsedValue = JSON.parse(newValue);
              const validation = validate ? 
                validate(parsedValue) : 
                defaultValidate(parsedValue, maxLength);

              if (validation.isValid) {
                onChange(parsedValue);
                setSyntaxError(null);
                setValidationError(validation.message || null);
              } else {
                setValidationError(validation.message || null);
              }
            } catch (error) {
              setSyntaxError((error as Error).message);
            }
          }
        }}
        value={currentValue}
        editorProps={{ 
          $blockScrolling: true,
        }}
        setOptions={{
          showLineNumbers: true,
          showPrintMargin: false,
          tabSize: 2,
          readOnly: readOnly,
          highlightActiveLine: true,
          showGutter: true,
          fontSize: 14,
          copyWithEmptySelection: true,
          behavioursEnabled: true,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false
        }}
        style={{
          borderRadius: '6px',
          border: (syntaxError || validationError) ? '1px solid #ef4444' : '1px solid #e5e7eb',
        }}
        width='100%'
        height='200px'
        wrapEnabled={true}
      />
      {syntaxError && (
        <p className="text-sm text-red-500 mt-1">
          {syntaxError}
        </p>
      )}
      {validationError && (
        <p className="text-sm text-red-500 mt-1">
          {validationError}
        </p>
      )}
    </>
  );
};

export default JsonEditor; 