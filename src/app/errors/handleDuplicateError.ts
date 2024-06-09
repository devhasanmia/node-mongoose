import { TErrorSource, TGenericErrorResponse } from '../interface/error';

// Use Regex
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  let match = err.message.match(/"([^"]*)"/);
  const extractedMsg = match && match[1];

  const errorSources: TErrorSource = [
    {
      path: '',
      message: `${extractedMsg} already exists`,
    },
  ];

  return {
    status: 400,
    message: 'Duplicate Entry',
    errorSources,
  };
};

export default handleDuplicateError;
