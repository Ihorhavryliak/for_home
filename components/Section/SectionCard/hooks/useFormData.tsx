import { AppDispatch } from "@/redux/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationShema/validationShema";
import { fetchGetRecords, homeActions, selectItem } from "@/redux/slice/HomeSlice";
import { useEffect } from "react";

export type ErrorUserFormType = {
  [key: string]: { message: string };
};
export type InputFieldNameType = {
  title?: string;
  description?: string;
};
export type InputFieldNameKeyType = keyof InputFieldNameType;

export type DataInputType = {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
};

type UseFormDataType = {
  setShow: (val: boolean) => void;
  type: "edit" | "add";
  id: string;
};

const useFormData = ({ setShow, type, id }: UseFormDataType) => {
  const item = useSelector(selectItem);

  const dispatch: AppDispatch = useDispatch();
  const resolver = yupResolver(schema);
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
    setValue,
    clearErrors
  } = useForm({
    resolver
  });

  useEffect(() => {
    if (type === "edit" && item) {
      setValue("description", item.description || "");
      setValue("title", item.title || "");
      dispatch(homeActions.setItem({}));
    }
  }, [dispatch, setValue, item, type]);

  const errorData = errors as ErrorUserFormType;

  const onSubmit: SubmitHandler<InputFieldNameType> = (data) => {
    if (type === "edit") {
      dispatch(
        homeActions.setEditItem({
          id: id,
          title: data.title,
          description: data.description
        })
      );
      setShow(false);
      reset();
      clearErrors();
      return;
    }

    dispatch(fetchGetRecords());
    dispatch(homeActions.setInitialState(data.description));
    setShow(false);
    reset();
    clearErrors();
  };

  const dataInput = [
    {
      name: "title",
      type: "text",
      label: "Title",
      placeholder: ""
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      placeholder: ""
    }
  ];

  return {
    dataInput,
    register,
    handleSubmit,
    error: errorData,
    onSubmit,
    watch,
    reset,
    clearErrors
  };
};

export default useFormData;
