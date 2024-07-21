import ResultContainer from './rescont';


const Boxx = () => {
  // Define inline styles for the component
  const styled = `
  .cont {
    height: 500px;
    width: 500px;
  }



  `;

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div>
        <h2 className='flex justify-center items-center'>Password Generator</h2>

        {/* Inline styles */}
        <style>{styled}</style>

        {/* Ensure ResultContainer is defined or imported */}
        <div className='rounded cont border border-solid border-red-600 text-red-600 '>
          <ResultContainer className='border border-solid border-red-600' />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Boxx;
