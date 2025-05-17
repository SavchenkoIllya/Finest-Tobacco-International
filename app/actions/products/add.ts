export async function addProduct(
  prevState: string | undefined,
  formData: FormData,
) {
  for (const value of formData.values()) {
    console.log(value);
  }
}
