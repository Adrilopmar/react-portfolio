export function Success() {
  return (
    <>
    <div className=" w-full lg:w-2/4 my-14">
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"></div>
    <div className="flex gap-9 align-middle">
    <div class="wrapper">
        {" "}
        <svg
          class="checkmark"
          >
          {" "}
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
            />{" "}
          <path
            class="checkmark__check"
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
