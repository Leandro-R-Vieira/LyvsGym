import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <NativeBaseButton
      w='full'
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'darkBlue.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="darkBlue.700"
      rounded='sm'
      _pressed={{
        bg: variant === 'outline' ? 'gray.900' : 'darkBlue.600'
      }}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'darkBlue.600' : 'white'}
        fontFamily='heading'
        fontSize='sm'
      >
        {title}
      </Text>
    </NativeBaseButton>

  );
}