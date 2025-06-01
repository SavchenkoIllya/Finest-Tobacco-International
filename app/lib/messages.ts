export enum SUCCESS_MESSAGES {
  GENERAL_SUCCESS = "Successfully done",
  BUCKET_CREATED = "Bucket successfully created",
  PRODUCTS_AND_TRANSLATIONS = "Products and translations added successfully!",
  BUCKET_POLICIES = "Bucket policies applied successfully!",
  FILE_UPLOADED = "File successfully uploaded",
  TEST_MESSAGE = "Test message was successfully added to DB!",
}

export enum INFO_MESSAGES {
  BUCKET_EXISTS = "Bucket already exists.",
  BUCKET_NOT_FOUNDED = "Bucket not founded. Create...",
}

export enum ERROR_MESSAGES {
  GENERAL_ERROR = "Something went wrong",
  INVALID_CREDENTIALS = "Invalid credentials",
  USER_NOT_FOUND = "User not found",
  PASSWORD_NOT_MATCH = "Passwords do not match",
  BUCKET_NOT_CREATED = "Error during bucket creation",
  BUCKET_POLICIES = "Error during applying  bucket policies",
  FILE_UPLOADED = "Error uploading file",
  TEST_MESSAGE = "Test message was NOT added to DB!",
  TABLES_NOT_EXISTS = "No tables not exist. Run 'npx drizzle-kit push' first",
}
