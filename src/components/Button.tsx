function Button({ Icon, text }: { Icon?: any; text: string }) {
  return (
    <button className="bg-[#48A0E2] text-white rounded-2xl px-4 py-4 text-sm font-medium flex items-center cursor-pointer">
      {Icon && <Icon className="mr-2" />}
      <span>{text}</span>
    </button>
  );
}

export default Button;
