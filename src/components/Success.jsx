export function Success() {
  return (
    <>
    <div className=" w-full lg:w-2/4 my-14">
    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"></div>
    <div className="flex gap-9 align-middle">
    <div className="wrapper">
        {" "}
        <svg
          className="checkmark"
          >
          {" "}
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
            />{" "}
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
        </svg>
      </div>
      <p className="my-auto"> <strong>Email sent!</strong>  Thanks for your time!</p>
    </div>
    </div>
  </div>
</div>
      
    </>
  );
}
