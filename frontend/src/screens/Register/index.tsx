import { AuthHeader } from "@/Components/AuthHeader"
import { DismissKeyboardView } from "@/Components/DismissKeyboardView"
import { View } from 'react-native'
import { RegisterForm } from "./RegisterForm"

export const Register = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  )
}