import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/app/types/navigation";

export const useAppNavigation = () => useNavigation<AppNavigationProp>();
