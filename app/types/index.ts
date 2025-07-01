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
  age_modal?: SharedAgeModal | null;
  about_content: SharedAboutContent | null;
  brands_section?: SharedBrandsSection | null;
  additional_about_section?: SharedAdditionalAboutSection | null;
  scroll_labels?: SharedScrollLabels[] | null;
  contacts_section?: SharedContactsSection | null;
  copyrights_text?: string;
  map_location?: SharedMapLocation | null;
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

export interface SharedAgeModal {
  id?: number;
  heading: string;
  main_text: string;
  cancel_button: string;
  confirm_button: string;
}

export interface SharedAboutContent {
  id?: number;
  main_title: string;
  secondary_title: string;
  description: string;
  pillars?: SharedPillar[] | null;
}

export interface SharedPillar {
  id?: number;
  title: string;
  label: string;
}

export interface SharedBrandsSection {
  id?: number;
  title: string;
  brands?: Brand[] | null;
}

export interface SharedAdditionalAboutSection {
  id?: number;
  catchphrase: string;
  title_main: string;
  description_main: string;
  title_secondary?: string;
  description_secondary?: string;
}

export interface SharedScrollLabels {
  id?: number;
  type: "hero" | "about" | "production" | "brands" | "contacts";
  name: string;
}

export interface SharedContactsSection {
  id?: number;
  heading: string;
  form_inputs: SharedInput[] | null;
  send_button: string;
}

export interface SharedMapLocation {
  id?: number;
  lat: number;
  lng: number;
}

export interface SharedInput {
  id?: number;
  placeholder: string;
  field_name: string;
  type: "field" | "textarea";
}

export interface Subscriber {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  email: string;
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
