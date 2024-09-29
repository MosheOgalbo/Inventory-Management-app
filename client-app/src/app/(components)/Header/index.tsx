type HeaderProps = {
  name: string;
};

export default function Header(props: HeaderProps) {
  return (
    <h1 className="text-2xl font-semibold text-gray-700">
      {props.name}
    </h1>
  );
}
