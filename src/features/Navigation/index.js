import { Link } from "react-router-dom";
import { Button } from "./styled";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ArrowIcon } from "./styled";

export const Navigation = ({ isFirstPage }) => (
  <nav>
    {isFirstPage ? (
      <Link to="/page2">
        <Button>
          <ArrowIcon icon={faArrowRight} />
        </Button>
      </Link>
    ) : (
      <Link to="/">
        <Button>
          <ArrowIcon icon={faArrowLeft} />
        </Button>
      </Link>
    )}
  </nav>
);
