import { FC } from "react";
import "../../styles/app.scss";

interface Props {
  /** Height must be a number. ex: "14". default value: 32 */
  height?: string;
  /** Width must be a number. ex: "14". default value: 100 */
  width?: string;
}

export const Skeletton: FC<Props> = ({ height = "32", width = "100" }) => {
  return (
    <div className='skeletton' style={{ width: `${width}px` }}>
      <p style={{ fontSize: `${height}px` }}> </p>
    </div>
  );
};
