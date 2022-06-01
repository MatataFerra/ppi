import { FC } from "react";
import "../styles/app.scss";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <nav className='title-container'>
      <h1 className='title'>{title}</h1>
    </nav>
  );
};
