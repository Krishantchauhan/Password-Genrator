// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// import CheckList from './checklist';

// const ResultContainer = () => {
//   return (
//     <>
//       <Box
//         className='result-container'
//         sx={{
//           backgroundColor: 'rgba(0, 0, 0, 0.4)',
//           display: 'flex',
//           justifyContent: 'flex-end', // Align items to the right
//           alignItems: 'center', // Center items vertically
//           position: 'relative',
//           fontSize: '18px',
//           letterSpacing: '1px',
//           padding: '12px 10px',
//           height: '50px',
//           width: '100%',
//         }}>
//         <Typography
//           id='result'
//           sx={{
//             flexGrow: 1,
//             textAlign: 'right', // Align text to the right
//           }}>
//           {/* You can dynamically set this text based on your state */}
//           Result goes here
//         </Typography>
//         <Button
//           id='clipboard'
//           variant='outlined'
//           startIcon={<ContentCopyIcon />}
//           sx={
//             {
//               // Add more styles as needed
//             }
//           }>
//           Copy
//         </Button>
//       </Box>
//       <CheckList />
//     </>
//   );
// };

// export default ResultContainer;

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckList from './checklist'; // Ensure the path and filename are correct

const ResultContainer = () => {
  const [password, setPassword] = React.useState('');

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard
      .writeText(password)
      .then(() => alert('Password copied to clipboard!'))
      .catch(() => alert('Failed to copy password to clipboard.'));
  };

  return (
    <>
      <Box
        className='result-container'
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '18px',
          letterSpacing: '1px',
          padding: '12px 10px',
          height: '50px',
          width: '100%',
        }}>
        <Typography
          id='result'
          sx={{
            flexGrow: 1,
            textAlign: 'right',
          }}>
          {password}
        </Typography>
        <Button id='clipboard' variant='outlined' startIcon={<ContentCopyIcon />} onClick={handleCopy}>
          Copy
        </Button>
      </Box>
      <CheckList onPasswordGenerated={setPassword} />
    </>
  );
};

export default ResultContainer;
