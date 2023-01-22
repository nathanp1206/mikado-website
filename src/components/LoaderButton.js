import cx from "clsx";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const LoaderButton = ({ isLoading, className, children, ...props }) => (
  <Button className={cx("d-flex align-items-center", className)} {...props}>
    {isLoading && (
      <Spinner
        style={{ borderWidth: 2 }}
        as="span"
        animation="border"
        role="status"
      />
    )}{" "}
    {children}
  </Button>
);

export default LoaderButton;
