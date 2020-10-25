import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/elements";
import { IStoreState } from "shared/interfaces/redux/store";
import { ICurrentUser } from "shared/interfaces/redux/users";
import { setCurrentUser } from "shared/redux/actions/users";
import { styled } from "shared/theme";
import { useFieldArray, useForm } from "shared/utils/form";

type DefaultValueForArray = {
  age: number | undefined;
  gender: "";
};

type HomeForm = {
  name: string;
  array: DefaultValueForArray[];
};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<IStoreState>(
    (state) => state.users.currentUser
  ) as ICurrentUser;

  const defaultValueForArrayField: DefaultValueForArray = {
    age: undefined,
    gender: "",
  };

  const initialValues = {
    name: "",
    array: [defaultValueForArrayField],
  };

  const { values, handleChange, setFieldValue } = useForm<HomeForm>({
    initialValues,
  });

  const { add, remove, handleChangeArray } = useFieldArray<
    DefaultValueForArray
  >({
    fieldName: "array",
    defaultValue: defaultValueForArrayField,
    arrayValues: values.array,
    setFieldValue,
  });

  return (
    <HomeWrapper>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <Button onClick={() => setFieldValue("name", "bossROD")}>
        Set Value to 'bossROD'
      </Button>
      <Button onClick={() => alert("name: " + JSON.stringify(values))}>
        Click to alert values
      </Button>

      <h1>FieldArray</h1>
      {values.array.map((item: DefaultValueForArray, idx: number) => {
        return (
          <div
            key={idx}
            style={{ display: "flex", flexDirection: "column", width: "400px" }}
          >
            <input
              type="text"
              placeholder="input age"
              value={item.age}
              name="age"
              onChange={(e) =>
                handleChangeArray(idx, e.target.name, e.target.value)
              }
            />
            <input
              type="text"
              placeholder="input gender"
              value={item.gender}
              name="gender"
              onChange={(e) =>
                handleChangeArray(idx, e.target.name, e.target.value)
              }
            />
            <Button onClick={add}>Add more</Button>
            <Button onClick={() => remove(idx)}>Remove</Button>
          </div>
        );
      })}

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
