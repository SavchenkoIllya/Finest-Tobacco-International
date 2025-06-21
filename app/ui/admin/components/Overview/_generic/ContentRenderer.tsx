"use client";
import { ReactNode } from "react";
import { ContentWrapper } from "@/app/ui/admin";
import {
  BooleanRenderer,
  StringRenderer,
} from "@/app/ui/admin/components/Overview/_generic/renderers";

export type BasicOverViewContentType = Record<string, any>;

export interface ItemsComposerProps<T extends BasicOverViewContentType> {
  data: Record<string, any>;
  items: OverviewItem<T>[];
}

export interface ContentRendererProps<T extends BasicOverViewContentType>
  extends ItemsComposerProps<T> {
  title?: string;
}

export type OverviewItemsType =
  | "string"
  | "boolean"
  | "number"
  | "date"
  | "datetime"
  | "id";

export interface OverviewItem<
  T extends BasicOverViewContentType,
  K extends keyof T = keyof T,
> {
  key: K;
  title: string;
  renderElement?: (value: any) => ReactNode;
  type?: OverviewItemsType;
  size?: any;
}

export const OverviewItemRenderer = <T extends BasicOverViewContentType>({
  item,
  value,
}: {
  item: OverviewItem<T>;
  value: any;
}) => {
  if (item.renderElement) {
    return item.renderElement(value);
  }

  switch (item.type) {
    case "string":
      return (
        <StringRenderer value={value} size={item.size} title={item.title} />
      );

    case "boolean":
      return (
        <BooleanRenderer value={value} size={item.size} title={item.title} />
      );

    case "number":
      return value;
    case "date":
      return value;
    case "datetime":
      return value;
    case "id":
      return value;
  }
};

export const ItemsComposer = <T extends BasicOverViewContentType>({
  data,
  items,
}: ItemsComposerProps<T>) => {
  const content = Object.entries(data).map(([key, value]) => {
    const itemConfig = items.find((item) => item.key === key);

    if (!itemConfig) return null;

    return <OverviewItemRenderer key={key} item={itemConfig} value={value} />;
  });

  if (!content) return null;

  return <div className={"flex gap-16"}>{content}</div>;
};

export const ContentRenderer = <T extends BasicOverViewContentType>({
  items,
  title,
  data,
}: ContentRendererProps<T>) => {
  return (
    <ContentWrapper
      title={title}
      mainContent={<ItemsComposer data={data} items={items} />}
    />
  );
};
