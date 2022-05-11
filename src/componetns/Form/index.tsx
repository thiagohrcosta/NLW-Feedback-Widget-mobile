import { ArrowLeft } from "phosphor-react-native";
import { 
  View,
  TextInput,
  Image,
  Text,
  Touchable,
  TouchableOpacity
} from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";

import { FeedbackTypes } from '../../componetns/Widget';
import { ScreenshotButton } from '../../componetns/ScreenshotButton';

import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  feedbackType: FeedbackTypes;
}
export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image} 
            style={styles.image} 
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput 
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton 
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot=""
        />
      </View>
    </View>
  )
}