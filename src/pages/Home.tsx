import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/elements";
import { IStoreState } from "shared/interfaces/redux/store";
import { ICurrentUser } from "shared/interfaces/redux/users";
import { setCurrentUser } from "shared/redux/actions/users";
import { styled } from "shared/theme";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<IStoreState>(
    (state) => state.users.currentUser
  ) as ICurrentUser;

  console.log("currentUser: ", currentUser);

  return (
    <HomeWrapper>
      <h2>
        Click the button to display my name here: {currentUser?.name ?? ""}
      </h2>
      <Button onClick={() => dispatch(setCurrentUser({ name: "bossROD" }))}>
        Display Current User
      </Button>
      <h1>
        Hello Home! <span>test</span>
      </h1>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.primary};

    & > span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
