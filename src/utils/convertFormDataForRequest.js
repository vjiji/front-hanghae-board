import { getObjectType } from './getObjectType';

export const convertFormForRequest = (form) => {
  const jsonData = {};
  const formData = new FormData();

  for (const [key, value] of Object.entries(
    form,
  )) {
    getObjectType(value) === '[object FileList]'
      ? formData.append('files', form.files[0])
      : (jsonData[key] = value);
  }
  formData.append(
    'updatePostRequestDto',
    new Blob([JSON.stringify(jsonData)], {
      type: 'application/json',
    }),
  );

  return formData;
};
