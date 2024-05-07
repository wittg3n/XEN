import React from 'react';

function dashboard({ params }) {
  const { userId } = params;

  return (
    <div className='flex justify-center'>
      <h1>welcom {params.userId}</h1>
      <hi>asdasd</hi>
    </div>
  );
}

export default dashboard;