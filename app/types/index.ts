export type Locale = "en" | "de" | "sk" | "pl";

export interface Global {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  video?: Media | null;
  Header?: SharedHeader | null;
}

export interface SharedHeader {
  id?: number;
  logo?: Media | null;
  Contacts?: SharedContact[] | null;
}

export interface SharedContact {
  id?: number;
  name?: string;
  link?: string;
  icon?: Media | null;
  type?: "whatsapp" | "telegram" | "email" | "phone" | "viber";
}

export interface Product {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  description?: string;
  subtitle?: string;
  filter_part_length?: number;
  nicotine?: number;
  tar?: number;
  diameter?: number;
  cigarette_length?: number;
  brand?: Brand | null;
  category?: Category | null;
  image?: Media | null;
  tobacco_part_length?: number;
}

export interface Message {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  phone?: string;
  email?: string;
  details?: string;
  work_status?: "read" | "unread" | "pending" | "answered";
}

export interface Brand {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
  description?: string;
  logo?: Media | null;
}

export interface Category {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: MediaFormat;
    small: MediaFormat;
    medium: MediaFormat;
    large: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}
