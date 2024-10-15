"use client";

const FormText = (props) => {
  const { register, className, ...cProps } = props;
  return (
    <input
      {...cProps}
      {...register}
      className={`w-full form-input rounded-lg bg-black/5 border-[1px] border-black/10 p-3 ${className}`}
    />
  );
};

export default FormText;
