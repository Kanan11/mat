export const validate = (rules, values) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    if (isRequiredFieldEmpty(rules, field, values)) {
      errors[field] = `${rules[field].label} är krävs`;
    } else if (isFieldLengthOutOfBoundaries(rules, field, values)) {
      errors[
        field
      ] = `${rules[field].label} måste vara mellan ${rules[field].minLength} till ${rules[field].maxLength} karakter`;
    } else if (isEmailInvalid(rules, field, values)) {
      errors[field] = `${rules[field].label} Måste vara en giltig e-postadress`;
    } else if (isPhoneInvalid(rules, field, values)) {
      errors[field] = `${rules[field].label} måste vara ett giltigt telefonnummer`;
    } else if (isNumberInvalid(rules, field, values)) {
      errors[field] = `${rules[field].label} måste vara mellan 0 och 9`;
    }
  });

  return errors;
};

const isRequiredFieldEmpty = (rules, field, values) =>
  rules[field]?.required && !values[field];

const isFieldLengthOutOfBoundaries = (rules, field, values) =>
  (rules[field].minLength && values[field].length < rules[field].minLength) ||
  (rules[field].maxLength && values[field].length > rules[field].maxLength);

const isEmailInvalid = (rules, field, values) =>
  rules[field]?.type === 'e-post adress' &&
  !/^\S+@\S+[.][0-9a-z]+$/.test(values[field]);

const isPhoneInvalid = (rules, field, values) =>
  rules[field]?.type === 'telefon' && !/^[0-9()\s-+]+$/.test(values[field]);

const isNumberInvalid = (rules, field, values) =>
  rules[field]?.type === 'nummer' &&
  (values[field] < rules[field]?.min || values[field] > rules[field]?.max);
