export const PreviewSection = ({
  collegeName,
  collegePlace,
  departmentName,
  logo,
  purpose,
  subjectName,
  subjectCode,
  sem,
  submittedBy,
  yourName,
  enrollNo,
  rollNo,
  submittedTo,
  profName,
}) => {
  return (
    <div className='w-full max-w-[21cm] max-h-[29.7cm] mx-auto bg-white p-8 shadow-lg border border-gray-300 font-bold'>
      <div className='text-center space-y-6'>
        <h1 className='text-2xl'>{collegeName}</h1>
        <h2 className='text-lg'>{collegePlace}</h2>

        <div className='mt-6'>
          <p className='text-xl'>{departmentName}</p>
        </div>

        {logo && <img src={logo} className='mx-auto w-32 h-32 object-contain' alt='Logo' />}

        <div className='mt-8 space-y-4'>
          <p className='text-xl'>{purpose}</p>
          <p className='text-xl'>{subjectName}</p>
          <p className='text-lg'>{subjectCode}</p>
          <p className='text-xl'>{sem}</p>
        </div>

        <div className='mt-12 grid grid-cols-2 text-base'>
          <div className='text-left space-y-4'>
            <p>{submittedBy}</p>
            <p>{yourName}</p>
            <p>{enrollNo}</p>
            <p>{rollNo}</p>
          </div>
          <div className='text-right space-y-4'>
            <p className='font-semibold'>{submittedTo}</p>
            <p>{profName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
