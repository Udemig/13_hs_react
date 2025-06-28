import type { JSX, FC } from "react";

interface IProps {
  text: string;
}

// type PropsType = {
//  text: string;
//};

//class ClassProps {
//  text: string = "";
//}

// 1) Component Tipini Tanımla
// Prop Type: Tanımladı
// Return Type: Oto Algılama
const Button = ({ text }: IProps) => {
  return <button>{text}</button>;
};

// 2) Component Tipini Tanımla
// Prop Type: Tanımladı
// Return Type: Tanımlandı
const Button2 = ({ text }: IProps): JSX.Element => {
  return <button>{text}</button>;
};

// 3) Component Tipini Tanımla
// React.FC aracılığıyla tek noktada hem return hem prop tipi tanımlama
// Prop Type: Tanımladı
// Return Type: Tanımlandı
const Button3: FC<IProps> = ({ text }) => {
  return <button>{text}</button>;
};

export { Button, Button2, Button3 };
