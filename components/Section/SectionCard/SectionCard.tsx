"use client";
import ButtonGeneral from "@/components/Button/ButtonGeneral";
import CardGeneral from "@/components/CardGeneral/CardGeneral";
import ModalGeneral from "@/components/Modal/ModalGeneral/ModalGeneral";
import React, { useEffect, useState } from "react";
import useFormData from "./hooks/useFormData";
import InputGeneral from "@/components/Input/InputGeneral";
import TextAreaGeneral from "@/components/TextArea/TextAreaGeneral";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { homeActions, selectItems } from "@/redux/slice/HomeSlice";

const SectionCard = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [type, setType] = useState("add" as "add" | "edit");
  const [itemId, setItemId] = useState("");
  const { dataInput, register, error, handleSubmit, onSubmit, watch, reset, clearErrors } = useFormData({
    setShow,
    type,
    id: itemId
  });
  const items = useSelector(selectItems);

  useEffect(() => {
    const getItems = localStorage.getItem("items");
    const items = getItems ? JSON?.parse(getItems) : "";
    dispatch(homeActions.setItems(items || []));
  }, [dispatch]);

  return (
    <section className="min-h-874 bg-black position-relative z-index-2 px-16 card-box">
      <h2 className="text-72 fw-bold line-89 mb-0 color-green-100 text-green-100 pt-118 d-flex justify-content-center">
        My Cards
      </h2>
      <div className="pt-110 d-flex justify-content-center w-100 pb-152">
        <div className="d-flex gap-26 max-w-1132 flex-wrap w-100">
          {items?.map((item, index) => {
            return (
              <div className="mb-2-c max-w-360 w-100" key={`${index}sectionCardKey`}>
                <CardGeneral
                  onDelete={() => dispatch(homeActions.setDeleteItem(item.id))}
                  onEdit={() => {
                    dispatch(homeActions.setItem(item.id));
                    setType("edit");
                    setItemId(item.id);
                    setShow((prev) => !prev);
                  }}
                  title={item.title}
                  description={item.description || ""}
                />
              </div>
            );
          })}
          <ButtonGeneral
            onClick={() => {
              clearErrors();
              reset();
              setType("add");
              setShow((prev) => !prev);
            }}
          />
        </div>
      </div>
      <ModalGeneral
        type={type}
        show={show}
        onChange={() => {
          handleSubmit(onSubmit)();
        }}
        setShow={() => {
          reset();
          setShow((prev) => !prev);
        }}
      >
        <Form>
          {dataInput.map((input, index) => {
            if (input.type === "textarea") {
              return (
                <div key={`sectionCardKey${index}`} className="mb-4">
                  <TextAreaGeneral
                    value={watch(input.name as "title")}
                    label={input.label}
                    type={input.type}
                    item={input}
                    register={register(input.name as "title")}
                    error={error[input.name]?.message}
                    id={index}
                  />
                </div>
              );
            }
            return (
              <div key={`sectionCardKey${index}`} className="mb-4">
                <InputGeneral
                  disabled={type === "edit"}
                  value={watch(input.name as "title")}
                  label={input.label}
                  type={input.type}
                  item={input}
                  register={register(input.name as "title")}
                  error={error[input.name]?.message}
                  id={index}
                />
              </div>
            );
          })}
        </Form>
      </ModalGeneral>
    </section>
  );
};

export default SectionCard;
