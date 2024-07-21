// import React, { useState } from 'react';
// import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Slider, Typography } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// const CheckList = () => {
//   const [length, setLength] = useState(20);
//   const [hasLower, setHasLower] = useState(true);
//   const [hasUpper, setHasUpper] = useState(true);
//   const [hasNumber, setHasNumber] = useState(true);
//   const [hasSymbol, setHasSymbol] = useState(true);
//   const [password, setPassword] = useState('');

//   const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol,
//   };

//   const handleGenerate = () => {
//     const typesCount = +hasLower + +hasUpper + +hasNumber + +hasSymbol;
//     const typesArr = [{ lower: hasLower }, { upper: hasUpper }, { number: hasNumber }, { symbol: hasSymbol }].filter(
//       (item) => Object.values(item)[0]
//     );

//     if (typesCount === 0) {
//       setPassword('');
//       return;
//     }

//     setPassword(generatePassword(length, typesArr, randomFunc));
//   };

//   const handleCopy = () => {
//     if (!password) return;
//     navigator.clipboard
//       .writeText(password)
//       .then(() => alert('Password copied to clipboard!'))
//       .catch(() => alert('Failed to copy password to clipboard.'));
//   };

//   function generatePassword(length, typesArr, randomFunc) {
//     let generatedPassword = '';
//     const typesCount = typesArr.length;

//     // Check if there are no types selected
//     if (typesCount === 0) {
//       return '';
//     }

//     // Generate password by adding random characters
//     for (let i = 0; i < length; i++) {
//       const type = typesArr[Math.floor(Math.random() * typesCount)];
//       const funcName = Object.keys(type)[0];
//       generatedPassword += randomFunc[funcName]();
//     }

//     return generatedPassword;
//   }

//   function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   }

//   function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   }

//   function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   }

//   function getRandomSymbol() {
//     const symbols = '!@#$%^&*(){}[]=<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
//   }

//   return (
//     <Box className='settings' sx={{ width: '100%', maxWidth: 360, mx: 'auto', p: 2 }}>
//       <FormControl component='fieldset' sx={{ mb: 2 }}>
//         <FormLabel component='legend'>Password Settings</FormLabel>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Slider
//                 value={length}
//                 onChange={(e, newValue) => setLength(newValue)}
//                 min={4}
//                 max={20}
//                 aria-labelledby='length'
//                 valueLabelDisplay='auto'
//                 sx={{ mb: 2 }}
//               />
//             }
//             label='Password Length'
//           />
//           <FormControlLabel control={<Checkbox checked={hasUpper} onChange={() => setHasUpper((prev) => !prev)} />} label='Uppercase letters' />
//           <FormControlLabel control={<Checkbox checked={hasLower} onChange={() => setHasLower((prev) => !prev)} />} label='Lowercase letters' />
//           <FormControlLabel control={<Checkbox checked={hasNumber} onChange={() => setHasNumber((prev) => !prev)} />} label='Numbers' />
//           <FormControlLabel control={<Checkbox checked={hasSymbol} onChange={() => setHasSymbol((prev) => !prev)} />} label='Symbols' />
//         </FormGroup>
//       </FormControl>

//       <Box sx={{ mt: 3, textAlign: 'center' }}>
//         <Button variant='contained' color='primary' size='large' sx={{ px: 4, mb: 2 }} onClick={handleGenerate}>
//           Generate Password
//         </Button>
//         <Typography id='result' sx={{ mb: 2 }}>
//           {password}
//         </Typography>
//         <Button variant='outlined' color='primary' startIcon={<ContentCopyIcon />} onClick={handleCopy}>
//           Copy
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CheckList;

import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Slider, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const CheckList = ({ onPasswordGenerated }) => {
  const [length, setLength] = useState(20);
  const [hasLower, setHasLower] = useState(true);
  const [hasUpper, setHasUpper] = useState(true);
  const [hasNumber, setHasNumber] = useState(true);
  const [hasSymbol, setHasSymbol] = useState(true);

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const handleGenerate = () => {
    const typesCount = +hasLower + +hasUpper + +hasNumber + +hasSymbol;
    const typesArr = [{ lower: hasLower }, { upper: hasUpper }, { number: hasNumber }, { symbol: hasSymbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      onPasswordGenerated('');
      return;
    }

    const generatedPassword = generatePassword(length, typesArr, randomFunc);
    onPasswordGenerated(generatedPassword);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard
      .writeText(password)
      .then(() => alert('Password copied to clipboard!'))
      .catch(() => alert('Failed to copy password to clipboard.'));
  };

  function generatePassword(length, typesArr, randomFunc) {
    let generatedPassword = '';
    const typesCount = typesArr.length;

    if (typesCount === 0) {
      return '';
    }

    for (let i = 0; i < length; i++) {
      const type = typesArr[Math.floor(Math.random() * typesCount)];
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    }

    return generatedPassword;
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  return (
    <Box className='settings' sx={{ width: '100%', maxWidth: 360, mx: 'auto', p: 2 }}>
      <FormControl component='fieldset' sx={{ mb: 2 }}>
        <FormLabel component='legend'>Password Settings</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Slider
                value={length}
                onChange={(e, newValue) => setLength(newValue)}
                min={4}
                max={20}
                aria-labelledby='length'
                valueLabelDisplay='auto'
                sx={{ mb: 2 }}
              />
            }
            label='Password Length'
          />
          <FormControlLabel control={<Checkbox checked={hasUpper} onChange={() => setHasUpper((prev) => !prev)} />} label='Uppercase letters' />
          <FormControlLabel control={<Checkbox checked={hasLower} onChange={() => setHasLower((prev) => !prev)} />} label='Lowercase letters' />
          <FormControlLabel control={<Checkbox checked={hasNumber} onChange={() => setHasNumber((prev) => !prev)} />} label='Numbers' />
          <FormControlLabel control={<Checkbox checked={hasSymbol} onChange={() => setHasSymbol((prev) => !prev)} />} label='Symbols' />
        </FormGroup>
      </FormControl>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button variant='contained' color='primary' size='large' sx={{ px: 4, mb: 2 }} onClick={handleGenerate}>
          Generate Password
        </Button>
      </Box>
    </Box>
  );
};

export default CheckList;
