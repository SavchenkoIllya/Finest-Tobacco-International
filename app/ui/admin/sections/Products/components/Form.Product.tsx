"use client";
import { useActionState, useEffect, useState } from "react";
import {
  addProduct,
  getLocalesByProductId,
  getProductsById,
} from "@/app/actions";
import { Product, ProductTranslation } from "@/app/db/types";

interface ProductFormModalProps {
  id?: Product["select"]["id"];
}

export const FormProduct = ({ id }: ProductFormModalProps) => {
  const [defaultFormValues, setDefaultFormValues] = useState<{
    product?: Product["select"];
    locales: ProductTranslation["select"][];
  }>({ locales: [] });

  const [errorMessage, formAction, isPending] = useActionState(
    addProduct,
    undefined,
  );

  useEffect(() => {
    if (id) {
      const fetchDefaultData = async () => {
        const product = await getProductsById(id);
        const locales = await getLocalesByProductId(id);

        setDefaultFormValues({
          product,
          locales: locales || [],
        });
      };

      void fetchDefaultData();
    }
  }, [id]);

  const handleProductChange = (key: string, value: string) => {
    setDefaultFormValues((prev) => ({
      ...prev,
      product: {
        ...prev.product,
        [key]: value,
      },
    }));
  };

  const handleLocaleChange = (
    index: number,
    key: keyof ProductTranslation["select"],
    value: string,
  ) => {
    const updatedLocales = [...defaultFormValues.locales];
    updatedLocales[index] = {
      ...updatedLocales[index],
      [key]: value,
    };

    setDefaultFormValues((prev) => ({
      ...prev,
      locales: updatedLocales,
    }));
  };

  const addLocale = () => {
    setDefaultFormValues((prev) => ({
      ...prev,
      locales: [
        ...prev.locales,
        {
          id: undefined,
          product_id: id ?? 0,
          locale: "",
          title: "",
          subtitle: "",
          description: "",
          blend: "",
        },
      ],
    }));
  };

  const removeLocale = (index: number) => {
    const updatedLocales = [...defaultFormValues.locales];
    updatedLocales.splice(index, 1);
    setDefaultFormValues((prev) => ({
      ...prev,
      locales: updatedLocales,
    }));
  };

  return (
    <div className={"p-8 overflow-auto"}>
      <form action={formAction}>
        <h2 className="text-xl font-bold mb-2">Product</h2>
        {defaultFormValues.product &&
          Object.entries(defaultFormValues.product).map(([key, value]) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="text"
                name={`product.${key}`}
                defaultValue={value ?? ""}
              />
            </div>
          ))}

        <h2 className="text-xl font-bold mt-6 mb-2">Locales</h2>
        {defaultFormValues.locales.map((locale, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              marginBottom: "1rem",
              padding: "1rem",
            }}
          >
            <input
              type="hidden"
              name={`locales[${index}].id`}
              value={locale.id ?? ""}
            />
            <input
              type="hidden"
              name={`locales[${index}].product_id`}
              value={locale.product_id}
            />

            <div>
              <label>Locale</label>
              <input
                type="text"
                name={`locales[${index}].locale`}
                defaultValue={locale.locale}
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name={`locales[${index}].title`}
                defaultValue={locale.title}
              />
            </div>
            <div>
              <label>Subtitle</label>
              <input
                type="text"
                name={`locales[${index}].subtitle`}
                defaultValue={locale.subtitle}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name={`locales[${index}].description`}
                defaultValue={locale.description}
              />
            </div>
            <div>
              <label>Blend</label>
              <input
                type="text"
                name={`locales[${index}].blend`}
                defaultValue={locale.blend}
              />
            </div>
            <button type="button" onClick={() => removeLocale(index)}>
              Удалить локаль
            </button>
          </div>
        ))}

        <button type="button" onClick={addLocale}>
          Добавить локаль
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
