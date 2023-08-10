import { Container, Card, Button, Col, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../index.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className=" py-5">
      {userInfo ? (
        <>
          <Container className="d-flex justify-content-center">
            <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
              <h1 className="text-center mb-4">Hey {userInfo.name} </h1>
              <Image
                style={{ width: "200px", marginRight: "20px" }}
                src={
                  userInfo.image
                    ? `http://localhost:3000/images/${userInfo.image}`
                    : null
                }
                
              />
              {/* <p>{userInfo.image}</p> */}
              <p className="text-center mb-4">
                Name:{userInfo.name}
                <br />
                email:{userInfo.email}
              </p>
              <div className="d-flex">
                <LinkContainer to="/profile">
                  <Button variant="primary" className="me-3">
                    Profile
                  </Button>
                </LinkContainer>
              </div>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <Container className="d-flex justify-content-center">
            <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
              <h1 className="text-center mb-4">
                <span className="small-text"> Be a part of </span>FineBonito
              </h1>
              <p className="text-center mb-4">
                This is a boilerplate for MERN authentication that stores a JWT
                in an HTTP-Only cookie. It also uses Redux Toolkit and the React
                Bootstrap library
              </p>
              <div className="d-flex">
                <LinkContainer to="/login">
                  <Button variant="primary" className="me-3">
                    Login
                  </Button>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Button variant="secondary">Signup</Button>
                </LinkContainer>
              </div>
            </Card>
          </Container>
        </>
      )}
    </div>
  );
};

export default Hero;
