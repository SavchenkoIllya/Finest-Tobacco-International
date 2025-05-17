"use client";
import { useActionState, useEffect, useState } from "react";
import { getLocalesByProductId, getProductsById } from "@/app/actions";
import { Product, ProductTranslation } from "@/app/db/types";

interface ProductFormModalProps {
  id?: Product["select"]["id"];
}

export const FormProduct = ({ id }: ProductFormModalProps) => {
  const [defaultFormValues, setDefaultFormValues] = useState<{
    product?: Product["select"];
    locales?: ProductTranslation["select"][];
  }>({});

  // const [errorMessage, formAction, isPending] = useActionState(
  //   login,
  //   undefined,
  // );

  useEffect(() => {
    if (id) {
      const fetchDefaultData = async () => {
        const product = await getProductsById(id);
        const locales = await getLocalesByProductId(id);

        const formValues: {
          product?: Product["select"];
          locales?: ProductTranslation["select"][];
        } = {};

        if (product && "id" in product) {
          formValues.product = product;
        }

        if (locales && locales.length > 0) {
          formValues.locales = locales;
        }

        setDefaultFormValues(formValues);
      };

      void fetchDefaultData();
    }
  }, [id]);

  return (
    <div className={"m-8"}>
      <form>
        {defaultFormValues.product ? (
          Object.entries(defaultFormValues.product).map(([key, value]) => {
            return (
              <div key={key}>
                <label>{key}</label>
                <input defaultValue={value ?? ""} type="text" name={key} />
              </div>
            );
          })
        ) : (
          <p>Загрузка данных...</p>
        )}
      </form>
    </div>
  );
};
