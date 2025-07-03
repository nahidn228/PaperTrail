import {  useAppSelector } from "@/redux/hooks";

const Books = () => {
  const { value } = useAppSelector((state) => state.books);

  console.log(value);
  return <div>Books</div>;
};

export default Books;
