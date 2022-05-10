import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Stack,
  HStack,
} from '@chakra-ui/react';
import {
  Controller,
  UseFormRegister,
  Path,
  FieldError,
  Control,
} from 'react-hook-form';

// import {} from '@chakra-ui/core';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  label?: string;
  register: UseFormRegister<TFormValues>;
  defaultValue: string | number | undefined;
  error: FieldError | undefined;
  control: Control<TFormValues>;
  radios?: any;
}

export const RadioButton = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  label = '',
  register,
  validate = {},
  error,
  defaultValue,
  control,
  radios,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl>
      <FormLabel color="brand.100" fontSize="1.1rem">
        {label}
      </FormLabel>
      <Controller
        render={({ field }) => (
          <HStack justify="space-between" spacing={6}>
            <RadioGroup aria-label={label} {...field} w="full">
              <Stack
                direction={['column', 'row']}
                w="full"
                align="flex-start"
                spacing={['1.25rem', '1.5rem']}
              >
                {radios}
              </Stack>
            </RadioGroup>
          </HStack>
        )}
        name={name}
        control={control}
      />
    </FormControl>
  );
};
